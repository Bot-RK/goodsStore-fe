import { View,Text, Progress,Image,Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtInputNumber } from "taro-ui";
import './multiple.scss'

export default function Apply(){
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
    return(
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
        <View className="things-item">
          <View className="things-texts">
            <Text className="things-title">物品科</Text>
          </View>
        </View>
        <View className="counter">
        <AtInputNumber
          type="number"
          min={0}
          max={100}
          step={1}
          value={1}
          onChange={()=>2}
        />
        </View>
        <View className="things-item">
          <View className="things-texts">
            <Text className="things-title">物品科</Text>
          </View>
        </View>
        <View className="counter">
        <AtInputNumber
          type="number"
          min={0}
          max={100}
          step={1}
          value={1}
          onChange={()=>2}
        />
        </View>
        </View>
        <View className="next">
        <Button className="next-button" onClick={to}>预览申领详情</Button>
      </View>
        </View>
    )
}