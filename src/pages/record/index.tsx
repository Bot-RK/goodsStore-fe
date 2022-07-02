import { View, Text, Image, Navigator } from "@tarojs/components";
import icon4 from "../../asset/images/Vector4.png";
import icon6 from "../../asset/images/Vector6.png";
import './index.scss'

export default function record(){
    return(
        <View className="backGround-f">
             <View className="thingList-text">
        <Text className="thingList-font">物资清单</Text>
        </View>
        <View className="operation">
        <Navigator className="pathTo" url="/pages/record/detail"></Navigator>
        <Image className="icon" src={icon6}></Image>
        <Text className="icon-font">物资清单</Text>
        <Image className="arrow" src={icon4}></Image>
      </View>
      <View className="operation">
      <Navigator className="pathTo" url="/pages/apply/index"></Navigator>
        <Image className="icon" src={icon6}></Image>
        <Text className="icon-font">物资清单</Text>
        <Image className="arrow" src={icon4}></Image>
      </View>
      
         </View>
    )
}