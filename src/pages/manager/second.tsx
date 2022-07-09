import { View, Text, Progress, Image, Button } from "@tarojs/components";
import { AtInputNumber } from "taro-ui";
import Taro from "@tarojs/taro";
import "./second.scss";
import searchIcon from "../../asset/images/search.png";
import FloatLayout from "../../components/floatLayout";

export default function Apply() {
  function to() {
    Taro.navigateBack({
      delta: 2,
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
  return (
    <View className="backGround-b">
      <View className="progress">
        <Text className="progress-font">步骤2/2</Text>
        <Progress
          className="progress-bar"
          percent={100}
          strokeWidth={3}
          color="#39BB85"
        ></Progress>
        <Text className="progress-text">确认物品</Text>
      </View>
      <View className="things">
        <FloatLayout />
      </View>
      <View className="next">
        <Button className="next-button" onClick={to}>
          完成
        </Button>
      </View>
    </View>
  );
}
