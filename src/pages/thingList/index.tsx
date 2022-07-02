import { View, Text, Progress, Image, Input, Button } from "@tarojs/components";
import { useState } from "react";
import { AtSearchBar } from "taro-ui";
import scanIcon from "../../asset/images/扫描二维码.png";
import "./index.scss";

export default function Second() {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e);
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
        <View className="">
          <Button className="button-scan"></Button>
        </View>
        <AtSearchBar value={text} onChange={onChange} className="search-bar" />
      </View>
      <View className="things">
        <View className="things-item">
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
        </View>
      </View>
    </View>
  );
}
