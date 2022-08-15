import { Image, View,Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import useJudge from "../../store/judgeIsMultiple";
import final from '../../asset/images/final.js'
import './last.scss'
import useLayoutList from "../../store/layoutList";
import useApplyList from "../../store/applyList";

export default function Last(){
  const clean=useLayoutList((state)=>state.clean)
  const cleanAp=useApplyList((state)=>state.clean)
  const isJudeg=useJudge((state)=>state.isMultiple)
    function to(){
      clean()
      cleanAp()
      if(!isJudeg){
        Taro.navigateBack({
          delta:4
        })
      }else{
        Taro.navigateBack({
          delta:5
        })
      }
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