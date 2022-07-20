import { View, Text, Button } from "@tarojs/components";
import Taro, { useReady } from "@tarojs/taro";
import { useState } from "react";
import { AtSearchBar } from "taro-ui";
import ThingList from "../../components/thingList";
import Popup from "../../components/popup";
import "./index.scss";
import usePopupDetail from "../../store/popup";
import useThingListStore from "../../store/thingList";
import api from "../../service/api";

export default function Second() {
  const [text, setText] = useState("");
  // const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const searchByName = useThingListStore((state) => state.searchByName);
  const thingList = useThingListStore((state) => state.data);
  const open = usePopupDetail((state) => state.isOpen);
  const popupOpen = usePopupDetail((state) => state.onOpen);
  const popupClose = usePopupDetail((state) => state.onclose);
  const id = useThingListStore((state) => state.selectId);
  const setID = useThingListStore((state) => state.setSelectedId);
  const setData = useThingListStore((state) => state.setData);
  const onChange = (e) => {
    setText(e);
  };
  useReady(() => {
    api.get("/user/goods").then((res) => {
      setData(res.data.data);
    });
  });
  const scan = (e) => {
    Taro.scanCode({
      success: (res) => {
        setID(Number(res.result));
        popupOpen();
        console.log(res);
      },
    });
  };
  const search = () => {
    let index = thingList.findIndex(({ name }) => name === text);
    searchByName(index);
  };

  const getCount = (e) => {
    setCount(e);
  };
  return (
    <View className="backGround-f">
      <View className="thingList-text">
        <Text className="thingList-font">物资清单</Text>
        {/* <View className="search">
        <Image className="search-icon" src={searchIcon}></Image>
        <Input
          className="search-input"
          type="text"
          placeholder="搜索物品"
          confirmType="search"
          placeholderClass="search-input-placeholder"
          focus
        ></Input>
      </View> */}
        <View>
          <Button className="button-scan" onClick={scan}></Button>
        </View>
        <AtSearchBar
          value={text}
          onChange={onChange}
          className="search-bar"
          onActionClick={search}
        />
      </View>
      <View className="things">
        <ThingList />
      </View>
      <Popup
        isOpen={open}
        isShowQRcode={false}
        isShowCounter={false}
        onclose={popupClose}
        thingId={id}
        remainCount={20}
      ></Popup>
      {/* <Popup isOpen={open} isShowQRcode isShowCounter={false} onclose={close}></Popup> */}
    </View>
  );
}
