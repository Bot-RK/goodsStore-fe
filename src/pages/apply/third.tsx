import { View, Text, Progress,Button, Input } from "@tarojs/components";
import Taro from "@tarojs/taro";
import './third.scss'

export default function Third() {
    function to(){
      Taro.navigateTo({
        url :'four',
        success:(res)=>{
          Taro.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          })
        }
      })}
  return (
    <View className="backGround-f">
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
      <View className="add-input">
        <Text>申领人:</Text>
        <Input
          className="input1"
          placeholder="输入名称"
          placeholderClass="input-place"
        ></Input>
      </View>
      <View className="next">
        <Button className="next-button" onClick={to}>下一步</Button>
      </View>
    </View>
  );
}
