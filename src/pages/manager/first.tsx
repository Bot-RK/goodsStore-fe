import { View, Text, Progress, Button } from "@tarojs/components";
import { AtSearchBar } from "taro-ui";
import Taro, { useReady } from "@tarojs/taro";
import { useState } from "react";
import "./first.scss";
import SelectThingList from "../../components/selectThingList";
import useThingListStore from "../../store/thingList";
import api from "../../service/api";

export default function Apply() {
  const [text, setText] = useState("");
  const searchByName = useThingListStore((state) => state.searchByName);
  const thingList = useThingListStore((state) => state.data);
  const setData = useThingListStore((state) => state.setData);

  const onChange = (e) => {
    setText(e);
  };
  useReady(() => {
    api.get("/user/goods").then((res) => {
      setData(res.data.data);
    });
  });

  function to() {
    Taro.navigateTo({
      url: "second",
      success: (res) => {
        Taro.showToast({
          title: "成功",
          icon: "success",
          duration: 2000,
        });
      },
    });
    Taro.login({
      success: (res) => {
        console.log(res.code);
      },
    });
  }
  const search = () => {
    let index = thingList.findIndex(({ name }) => name === text);
    searchByName(index);
  };

  return (
    <View className="backGround-b">
      <View className="progress">
        <Text className="progress-font">步骤1/2</Text>
        <Progress
          className="progress-bar"
          percent={50}
          strokeWidth={3}
          color="#39BB85"
        ></Progress>
        <Text className="progress-text">选择物品</Text>
      </View>
      <AtSearchBar
        value={text}
        onChange={onChange}
        className="search-bar"
        onActionClick={search}
      />

      <View className="things">
        <SelectThingList />
      </View>
      <View className="next">
        <Button className="next-button" onClick={to}>
          下一步
        </Button>
      </View>
    </View>
  );
}
