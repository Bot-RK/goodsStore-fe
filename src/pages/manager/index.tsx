import { View, Text, Progress, Input, Image, Button } from "@tarojs/components";
import { AtInputNumber } from 'taro-ui'
import Taro from "@tarojs/taro";
import "./index.scss";
import searchIcon from "../../asset/images/search.png";



export default function apply() {
  function to(){Taro.navigateTo({
    url :'second',
    success:(res)=>{
      Taro.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000
      })
    }
  })}
  return (
    <View className="backGround-b">
      <View className="progress">
        <Text className="progress-text">物资管理</Text>
      </View>
      <View className="manager-button">
        <Button className="button-one">补充物品</Button>
        <Button className="button-two">新建物品</Button>
      </View>
      <View className="search">
        <Image className="search-icon" src={searchIcon}></Image>
        <Input
          className="search-input"
          type="text"
          placeholder="搜索物品"
          confirmType="search"
          placeholderClass="search-input-placeholder"
          focus
        ></Input>
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
            <Text className="things-count-text">剩余</Text>
            <View className="counts">
            <Input className="count-input" disabled value="20"></Input>
            </View>
            <Text className="things-count-text">本</Text>
         </View>
          
        </View>
        </View>
      
 
    </View>
  );
}
