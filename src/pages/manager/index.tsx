import { View, Text, Progress, Input, Image, Button } from "@tarojs/components";
import { AtInputNumber, AtSearchBar } from "taro-ui";
import Taro from "@tarojs/taro";
import { useState } from "react";
import "./index.scss";
import searchIcon from "../../asset/images/search.png";
import ThingList from "../../components/thingList";
import useThingListStore from "../../store/thingList";

export default function Apply() {
  const searchByName = useThingListStore((state) => state.searchByName);
  const [text, setText] = useState("");
  const thingList = useThingListStore((state) => state.data);

  const onChange = (e) => {
    setText(e);
  };

  function to() {
    Taro.navigateTo({
      url: "first",
      success: (res) => {
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
      success: (res) => {
        Taro.showToast({
          title: "成功",
          icon: "success",
          duration: 2000,
        });
      },
    });
  }
  const scan = (e) => {
    Taro.scanCode({
      success: (res) => {
        console.log(res);
      },
    });
  };
  return (
    <View className="backGround-b">
      <View className="progress">
        <Text className="progress-text">物资管理</Text>
      </View>
      <View>
        <Button className="button-scan" onClick={scan}></Button>
      </View>
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
