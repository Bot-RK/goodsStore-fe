import { View, Text } from "@tarojs/components";
import { useState } from "react";
import { AtInputNumber, AtTextarea } from "taro-ui";
import './index.scss'

export default function () {
    const [text,setText]=useState("")
    const [count,setCount]=useState(0)
    const onChange=(e)=>{
        setText(e)
    }
    const changeCount=(e)=>{
        setCount(e)
    }
  return (
    <View className="backGround-b">
      <View className="thingList-text">
        <Text className="thingList-font">编辑公告</Text>
        <AtTextarea className="input-text" onChange={onChange} maxLength={200} placeholder="编辑新的公告" value={text}  height={300}    />
      </View>
      <View className="thingList-text">
        <Text className="thingList-font">设置预警值&nbsp;:</Text>
        <AtInputNumber className="input-number"  min={0} max={100} step={1} value={count} onChange={changeCount} type="number" />
        </View>
    </View>
  );
}
