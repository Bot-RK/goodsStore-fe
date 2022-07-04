import { View,Text,Input,Image, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import './four.scss'

export default function detail(){
     function to(){
      Taro.navigateTo({
        url :'last',
        success:(res)=>{
          Taro.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          })
        }
      })}
    return(
        <View className="backGround-f">
             <View className="thingList-text">
        <Text className="thingList-font">2022/5/9的申领</Text>
        </View>
        <View className="record-detail">
            <Text className="record-title">申领时间:</Text>
            <Text className="record-message">&nbsp;&nbsp;53113</Text>
        </View>
        <View className="record-detail">
            <Text className="record-title">申领人:</Text>
            <Text className="record-message">&nbsp;&nbsp;53113</Text>
        </View>
        <View className="record-detail">
            <Text className="record-title">申领单位:</Text>
            <Text className="record-message">&nbsp;&nbsp;53113</Text>
        </View>
        <View>
            <Text className="record-item-text">
            申领物品:
            </Text>
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
            <View className="counts">
            <Input className="count-input" disabled value="20"></Input>
            </View>
            <Text className="things-count-text">本</Text>
         </View>
        </View>
        <View className="things-item">
          <Image
            src="https://joeschmoe.io/api/v1/random"
            className="things-icon"
          ></Image>
          <View className="things-texts">
            <Text className="things-title">物品名字</Text>
            
          </View>
         <View className="things-count">
            <View className="counts">
            <Input className="count-input" disabled value="20"></Input>
            </View>
            <Text className="things-count-text">本</Text>
         </View>
        </View>
        </View>
        <View className="next">
        <Button className="next-button" onClick={to}>申领</Button>
      </View>
         </View>
    )
}