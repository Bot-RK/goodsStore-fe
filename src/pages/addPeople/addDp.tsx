import { View, Text, Input, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./addDp.scss";

export default function AddDp() {
  function final() {
    Taro.navigateTo({
      url: "index",
      success: (res) => {
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
      <View className="thingList-text">
        <Text className="thingList-font">添加单位</Text>
      </View>
      <View className="add-input">
        <Text>单位:</Text>
        <Input
          className="input1"
          placeholder="输入名称"
          placeholderClass="input-place"
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
