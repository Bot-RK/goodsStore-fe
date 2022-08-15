import { View, Text, Progress, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import MultipleDetail from "../../components/multipleDetail";
import "./multiple.scss";

export default function Apply() {
  function to() {
    Taro.navigateTo({
      url: "four",
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
          color="#0B75FB"
        ></Progress>
        <Text className="progress-text">申领信息</Text>
      </View>
      <View className="things">
        <MultipleDetail />
      </View>
      <View className="next">
        <Button className="next-button" onClick={to}>
          预览申领详情
        </Button>
      </View>
    </View>
  );
}
