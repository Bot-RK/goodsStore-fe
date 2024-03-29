import { View, Text, Progress, Button } from "@tarojs/components";
import { AtFloatLayout, AtSearchBar } from "taro-ui";
import Taro, { useReady } from "@tarojs/taro";
import { useState } from "react";
import Popup from "../../components/popup";
import "./index.scss";
import usePopupDetail from "../../store/popup";
import SelectThingList from "../../components/selectThingList";
import FloatLayout from "../../components/floatLayout";
import useApplyList from "../../store/applyList";
import useLayoutList from "../../store/layoutList";
import api from "../../service/api";
import useThingListStore from "../../store/thingList";

export default function Apply() {
  const [text, setText] = useState("");
  const [layoutShow, setLayoutShow] = useState(false);
  // const [open, setOpen] = useState(false);
  const open = usePopupDetail((state) => state.isOpen);
  const popupClose = usePopupDetail((state) => state.onclose);
  const popupOpen = usePopupDetail((state) => state.onOpen);
  const pushApplyList = useApplyList((state) => state.add);
  const layoutList = useLayoutList((state) => state.data);
  const searchByName = useThingListStore((state) => state.searchByName);
  const thingList = useThingListStore((state) => state.data);
  const id = useThingListStore((state) => state.selectId);
  const setID = useThingListStore((state) => state.setSelectedId);
  const setData = useThingListStore((state) => state.setData);
  const openLayout = (e) => {
    setLayoutShow(!layoutShow);
  };
  const GetData = () => {
    api.get("/user/goods").then((res) => {
      setData(res.data.data);
      console.log("11:", res.data.data);
    });
  };
  useReady(() => {
    GetData();
  });
  const onChange = (e) => {
    setText(e);
  };
  const search = () => {
    let index = thingList.findIndex(({ name }) => name === text);
    searchByName(index);
  };

  async function to() {
    layoutList.map((item) => {
      pushApplyList(item.id, item.count);
    });
    Taro.navigateTo({
      url: "third",
      success: () => {},
    });
  }
  const closeLayout = () => {
    setLayoutShow(!layoutShow);
  };
  const scan = () => {
    Taro.scanCode({
      success: (res) => {
        setID(Number(res.result));
        popupOpen();
      },
    });
  };

  return (
    <View catchMove={layoutShow} className="backGround-f">
      <View className="progress">
        <Text className="progress-font">步骤1/2</Text>
        <Progress
          className="progress-bar"
          percent={50}
          strokeWidth={3}
          color="#0B75FB"
        ></Progress>
        <Text className="progress-text">选择物品</Text>
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
        <SelectThingList />
      </View>
      <View className="next">
        <Button className="show-list" onClick={openLayout}>
          已选列表
        </Button>
        <Button className="next-button" onClick={to}>
          下一步
        </Button>
      </View>
      <View>
        <AtFloatLayout
          isOpened={layoutShow}
          title="已选清单"
          onClose={closeLayout}
        >
          <FloatLayout />
        </AtFloatLayout>
      </View>
      <Popup
        isOpen={open}
        isShowQRcode={false}
        isShowCounter
        onclose={popupClose}
        thingId={Number(id)}
        remainCount={20}
      ></Popup>
    </View>
  );
}
