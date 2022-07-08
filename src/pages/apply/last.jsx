import { Image, View,Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import useJudge from "../../store/judgeIsMultiple";
import final from '../../asset/images/final.png'
import './last.scss'

export default function Last(){
  const isJudeg=useJudge((state)=>state.isMultiple)
    function to(){
      if(!isJudeg){
        Taro.navigateBack({
          delta:4
        })
      }else{
        Taro.navigateBack({
          delta:5
        })
      }
        // Taro.navigateTo({
        //   url :'/pages/index/index',
        //   success:(res)=>{
        //     Taro.showToast({
        //       title: '成功',
        //       icon: 'success',
        //       duration: 2000
        //     })
        //   }
        // })
      }
    return(
        <View className="backGround-f">
            <Image className="final-image" src={final}></Image>
            <View className="next">
        <Button className="next-button" onClick={to}>完成</Button>
      </View>
        </View>
    )
}