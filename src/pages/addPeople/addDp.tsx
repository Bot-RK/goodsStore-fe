import { View, Text, Input, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";
import api from "../../service/api";
import "./addDp.scss";

export default function AddDp() {
  const [dp, setDp] = useState("");
  function final() {
    api
      .put("/admin/department/add", {
        name: dp,
      })
      .then((res) => {
        console.log("dp add success:", res);
      });
    Taro.navigateBack({
      delta: 1,
    });
  }
  const onAddDp = (e) => {
    setDp(e.detail.value);
  };
  return (
    <View className="backGround-b">
      <View className="thingList-text">
        <Text className="thingList-font">添加单位</Text>
      </View>
      <View className="add-input">
        <Text>单位:</Text>
        <Input
          className="input1"
          placeholder="输入名称"
          placeholderClass="input-place"
          onBlur={(e) => onAddDp(e)}
        ></Input>
      </View>
      <View className="next">
        <Button className="next-button" onClick={final}>
          完成
        </Button>
      </View>
    </View>
  );
}
