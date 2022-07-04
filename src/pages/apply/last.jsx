import { Image, View,Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import final from '../../asset/images/final.png'
import './last.scss'

export default function last(){
    function to(){
        Taro.navigateTo({
          url :'/pages/index/index',
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
            <Image className="final-image" src={final}></Image>
            <View className="next">
        <Button className="next-button" onClick={to}>完成</Button>
      </View>
        </View>
    )
}