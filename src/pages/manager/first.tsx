import { View, Text, Progress, Input, Image, Button } from "@tarojs/components";
import { AtInputNumber, AtSearchBar } from 'taro-ui'
import Taro from "@tarojs/taro";
import { useState } from "react";
import "./first.scss";
import searchIcon from "../../asset/images/search.png";



export default function Apply() {
    const [text, setText] = useState("");

    const onChange = (e) => {
      setText(e);
    };
  function to(){Taro.navigateTo({
    url :'second',
    success:(res)=>{
      Taro.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000
      })
    }
  });
  Taro.login({
    success:(res)=>{
      console.log(res.code)
    }
  })
}

  return (
    <View className="backGround-b">
      <View className="progress">
        <Text className="progress-font">步骤1/2</Text>
        <Progress
          className="progress-bar"
          percent={50}
          strokeWidth={3}
          color="#39BB85"
        ></Progress>
        <Text className="progress-text">选择物品</Text>
      </View>
      <AtSearchBar value={text} onChange={onChange} className="search-bar" />
     
      <View className="things">
        <View className="things-item">
          <Image
            src="https://joeschmoe.io/api/v1/random"
            className="things-icon"
          ></Image>
          <View className="things-texts">
            <Text className="things-title">物品名字</Text>
            <Text className="things-count">剩余XXX</Text>
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
          <Image
            src="https://joeschmoe.io/api/v1/random"
            className="things-icon"
          ></Image>
          <View className="things-texts">
            <Text className="things-title">物品名字</Text>
            <Text className="things-count">剩余XXX</Text>
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
          <Image
            src="https://joeschmoe.io/api/v1/random"
            className="things-icon"
          ></Image>
          <View className="things-texts">
            <Text className="things-title">物品名字</Text>
            <Text className="things-count">剩余XXX</Text>
          </View>
        </View>
        <View className="counter">
        <AtInputNumber
          type="digit"
          min={0}
          max={100}
          step={1}
          value={1}
          onChange={()=>2}
        />
        </View>
        <View className="things-item">
          <Image
            src="https://joeschmoe.io/api/v1/random"
            className="things-icon"
          ></Image>
          <View className="things-texts">
            <Text className="things-title">物品名字</Text>
            <Text className="things-count">剩余XXX</Text>
          </View>
        </View>
        <View className="counter">
        <AtInputNumber
          type="digit"
          min={0}
          max={100}
          step={1}
          value={1}
          onChange={()=>2}
        />
        </View>
        <View className="things-item">
          <Image
            src="https://joeschmoe.io/api/v1/random"
            className="things-icon"
          ></Image>
          <View className="things-texts">
            <Text className="things-title">物品名字</Text>
            <Text className="things-count">剩余XXX</Text>
          </View>
        </View>
        <View className="counter">
        <AtInputNumber
          type="digit"
          min={0}
          max={100}
          step={1}
          value={1}
          onChange={()=>2}
        />
        </View>
        <View className="things-item">
          <Image
            src="https://joeschmoe.io/api/v1/random"
            className="things-icon"
          ></Image>
          <View className="things-texts">
            <Text className="things-title">物品名字</Text>
            <Text className="things-count">剩余XXX</Text>
          </View>
        </View>
        <View className="counter">
        <AtInputNumber
          type="digit"
          min={0}
          max={100}
          step={1}
          value={1}
          onChange={()=>2}
        />
        </View>
        <View className="things-item">
          <Image
            src="https://joeschmoe.io/api/v1/random"
            className="things-icon"
          ></Image>
          <View className="things-texts">
            <Text className="things-title">物品名字</Text>
            <Text className="things-count">剩余XXX</Text>
          </View>
        </View>
        <View className="counter">
        <AtInputNumber
          type="digit"
          min={0}
          max={100}
          step={1}
          value={1}
          onChange={()=>2}
        />
        </View>
        <View className="things-item">
          <Image
            src="https://joeschmoe.io/api/v1/random"
            className="things-icon"
          ></Image>
          <View className="things-texts">
            <Text className="things-title">物品名字</Text>
            <Text className="things-count">剩余XXX</Text>
          </View>
        </View>
        <View className="counter">
        <AtInputNumber
          type="digit"
          min={0}
          max={100}
          step={1}
          value={1}
          onChange={()=>2}
        />
        </View>
        <View className="things-item">
          <Image
            src="https://joeschmoe.io/api/v1/random"
            className="things-icon"
          ></Image>
          <View className="things-texts">
            <Text className="things-title">物品名字</Text>
            <Text className="things-count">剩余XXX</Text>
          </View>
        </View>
        <View className="counter">
        <AtInputNumber
          type="digit"
          min={0}
          max={100}
          step={1}
          value={1}
          onChange={()=>2}
        />
        </View>
        <View className="things-item">
          <Image
            src="https://joeschmoe.io/api/v1/random"
            className="things-icon"
          ></Image>
          <View className="things-texts">
            <Text className="things-title">物品名字</Text>
            <Text className="things-count">剩余XXX</Text>
          </View>
        </View>
        <View className="counter">
        <AtInputNumber
          type="digit"
          min={0}
          max={100}
          step={1}
          value={1}
          onChange={()=>2}
        />
        </View>
      </View>
      <View className="next">
        <Button className="next-button" onClick={to}>下一步</Button>
      </View>
    </View>
  );
}
