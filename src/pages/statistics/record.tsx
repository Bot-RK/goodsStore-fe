import { View,Text,Input,Image } from "@tarojs/components";
import { Barcode, QRCode } from 'taro3-code'
import './record.scss'
import deleteIcon from '../../asset/images/Vector13.png'

export default function detail(){
    return(
        <View className="backGround-b">
             <View className="thingList-text">
        <Text className="thingList-font">2022/5/9的申领</Text>
        </View>
        <View className="delete">
          <Image className="delete-icon" src={deleteIcon}></Image>
          <Text className="delete-text">删除</Text>
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
        <View>
        <QRCode
          text="www.baidu.com"
          size={300}
          scale={4}
          errorCorrectLevel="M"
          typeNumber={2}
        />
        </View>
         </View>
    )
}