import { View, Text, Progress, Image, Input, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";
import { AtSearchBar, AtCurtain, AtInputNumber } from "taro-ui";
import ThingList from "../../components/thingList";
import Popup from "../../components/popup";
import "./index.scss";
import usePopupDetail from "../../store/popup";

export default function Second() {
  const [text, setText] = useState("");
  // const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);

  const open = usePopupDetail((state) => state.isOpen);
  const popupClose = usePopupDetail((state) => state.onclose);
  const onChange = (e) => {
    setText(e);
  };
  const scan = (e) => {
    Taro.scanCode({
      success: (res) => {
        console.log(res);
      },
    });
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
        <AtSearchBar value={text} onChange={onChange} className="search-bar" />
      </View>
      <View className="things">
        <ThingList />
      </View>
      <Popup
        isOpen={open}
        isShowQRcode={false}
        isShowCounter={false}
        onclose={popupClose}
        icon="https://joeschmoe.io/api/v1/random"
        name="物品名字"
        remainCount={20}
      ></Popup>
      {/* <Popup isOpen={open} isShowQRcode isShowCounter={false} onclose={close}></Popup> */}
    </View>
  );
}
