import { View, Text, Input, Picker, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";
import { AtImagePicker, AtInputNumber, AtList, AtListItem } from "taro-ui";
import "./third.scss";

export default function Index() {
  const [count, setCount] = useState(0);
  const [file, setFile] = useState([]);
  let img;

  function final() {
    Taro.navigateBack({
      delta: 1,
      success: (res) => {
        Taro.showToast({
          title: "成功",
          icon: "success",
          duration: 2000,
        });
      },
    });
  }
  const getCount = (e) => {
    console.log(e);
    setCount(e);
  };
  const onChange = (files) => {
    console.log(file);
    console.log(files);
    setFile(files);
  };
  return (
    <View className="backGround-b">
      <View className="thingList-text">
        <Text className="thingList-font">新建物品</Text>
      </View>
      <View className="add-input">
        <Text>物品姓名:</Text>
        <Input
          className="input1"
          placeholder="输入名称"
          placeholderClass="input-place"
        ></Input>
      </View>
      <View className="add-input">
        <Text>物品量词:</Text>
        <Input
          className="input2"
          placeholder="点击输入"
          placeholderClass="input-place"
        ></Input>
      </View>
      <View className="add-input">
        <Text>物品数量:</Text>
        <View>
          <AtInputNumber
            className="counter"
            min={0}
            max={10}
            step={1}
            value={count}
            width={100}
            onChange={getCount}
            type="number"
          />
        </View>
      </View>
      <View className="add-input">
        <Text>物品数量:</Text>
        <View>
          <AtImagePicker
            className="imagePciker"
            files={file}
            onChange={onChange}
            multiple={false}
            showAddBtn={file.length < 1}
          />
        </View>
      </View>
      <View className="next">
        <Button className="next-button" onClick={final}>
          完成
        </Button>
      </View>
    </View>
  );
}
