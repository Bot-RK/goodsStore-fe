import { View,Text,Button } from "@tarojs/components"
import Taro from "@tarojs/taro";
import { useState } from "react";
import './index.scss'

export default function Add(){
    const [selected, setSelected] = useState(true);
    const [text,setText]=useState("添加成员")
    function change() {
        setSelected(!selected);
        setText(!selected?"添加成员":"添加单位");
      }
    function click(){
      Taro.navigateTo({
        url :'addNumber',
        success:(res)=>{
          Taro.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          })
        }
      })
    }
    function click2(){
      Taro.navigateTo({
        url :'addDp',
        success:(res)=>{
          Taro.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          })
        }
      })
    }
    return(
        <View className="backGround-b">
             <View className="thingList-text">
        <Text className="thingList-font">系统设置</Text>
        </View>
        <View className="switch">
        <Button
          className={selected ? "Selected-one" : "unSelected-one"}
          onClick={change}
        >
          账号设置
        </Button>
        <Button
          className={selected ? "unSelected-two" : "Selected-two"}
          onClick={change}
        >
          单位设置
        </Button>
      </View>
      <View className="add-button">
        <Button className="add-button-zero" onClick={selected?click:click2}>{text}</Button>
      </View>
      <View className={selected?"showNumber":"unShowNumber"}>
      <View className="number-list">
        <View className="list-title">
          <View>
          <Text className="title-detail">姓名</Text>
          </View>
          <View>
          <Text className="title-detail">微信绑定电话</Text>
          </View>
          <View>
          <Text className="title-detail">权限</Text>
          </View>
        </View>
        <View className="list">
        <View className="list-detail1">
          <Text>甘渊</Text>
          </View>
          <View className="list-detail2">
          <Text>15779507957</Text>
          </View>
          <View className="list-detail3">
          <Text>成员</Text>
          </View>
        </View>
        <View className="list">
        <View className="list-detail1">
          <Text>甘渊</Text>
          </View>
          <View className="list-detail2">
          <Text>15779507957</Text>
          </View>
          <View className="list-detail3">
          <Text>成员</Text>
          </View>
        </View>
        <View className="list">
        <View className="list-detail1">
          <Text>甘渊</Text>
          </View>
          <View className="list-detail2">
          <Text>15779507957</Text>
          </View>
          <View className="list-detail3">
          <Text>成员</Text>
          </View>
        </View>
      </View>
      </View>
      <View className={selected?"unShow":"show"}>
        <View className="dp-title">
        <Text>单位</Text>
        </View>
        <View className="dp-detail">
          <Text>教育科</Text>
        </View>
        <View className="dp-detail">
          <Text>教育科</Text>
        </View>
        <View className="dp-detail">
          <Text>教育科</Text>
        </View>
      </View>
        </View>
    )
}