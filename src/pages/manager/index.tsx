import { View, Text, Button } from "@tarojs/components";
import { AtSearchBar } from "taro-ui";
import Taro from "@tarojs/taro";
import { useState } from "react";
import "./index.scss";
import ThingList from "../../components/thingList";
import useThingListStore from "../../store/thingList";
import api from "../../service/api";

export default function Apply() {
  const searchByName = useThingListStore((state) => state.searchByName);
  const [text, setText] = useState("");
  const thingList = useThingListStore((state) => state.data);
  const setData = useThingListStore((state) => state.setData);

  const onChange = (e) => {
    setText(e);
  };

  Taro.useReady(() => {
    api.get("/user/goods").then((res: any) => {
      setData(res.data.data);
    });
  });
  function to() {
    Taro.navigateTo({
      url: "first",
      success: () => {
        Taro.showToast({
          title: "成功",
          icon: "success",
          duration: 2000,
        });
      },
    });
  }
  const search = () => {
    let index = thingList.findIndex(({ name }) => name === text);
    searchByName(index);
  };
  function to2() {
    Taro.navigateTo({
      url: "third",
      success: () => {
        Taro.showToast({
          title: "成功",
          icon: "success",
          duration: 2000,
        });
      },
    });
  }

  return (
    <View className="backGround-b">
      <View className="progress">
        <Text className="progress-text">物资管理</Text>
      </View>
      {/* <View>
        <Button className="button-scan" onClick={scan}></Button>
      </View> */}
      <View className="manager-button">
        <Button className="button-one" onClick={to}>
          补充物品
        </Button>
        <Button className="button-two" onClick={to2}>
          新建物品
        </Button>
      </View>
      <AtSearchBar
        value={text}
        onChange={onChange}
        className="search-bar"
        onActionClick={search}
      />
      <View className="things">
        <ThingList />
        {/* <View className="things-item">
          <Image
            src="https://joeschmoe.io/api/v1/random"
            className="things-icon"
          ></Image>
          <View className="things-texts">
            <Text className="things-title">物品名字</Text>
          </View>
          <View className="things-count">
            <Text className="things-count-text">剩余</Text>
            <View className="counts">
              <Input className="count-input" disabled value="20"></Input>
            </View>
            <Text className="things-count-text">本</Text>
          </View>
        </View> */}
      </View>
    </View>
  );
}
