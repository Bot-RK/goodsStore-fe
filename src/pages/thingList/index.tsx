import { View, Text, Progress, Image, Input, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";
import { AtSearchBar,AtCurtain, AtInputNumber } from "taro-ui";
import white1 from "../../asset/images/纯白.png";
import "./index.scss";

export default function Second() {
  const [text, setText] = useState("");
  const [open,setOpen]=useState(false);
  const [count,setCount]=useState(0);

  const onChange = (e) => {
    setText(e);
  };
  const scan=(e)=>{
    Taro.scanCode({
      success:(res)=>{
        console.log(res)
      }
    })
  }
  const shopping=(e)=>{
    Taro.navigateTo({
      url:"/pages/apply/index"
    })
  }
  const close=()=>{
    setOpen(!open)
  }

  const detail=()=>{
   setOpen(!open)
  }
  const getCount=(e)=>{
    setCount(e)
  }
  return (
    <View className="backGround-f">
      <View className="thingList-text">
        <Text className="thingList-font">物资清单</Text>
        {/* <View className="search">
        <Image className="search-icon" src={searchIcon}></Image>
        <Input
          className="search-input"
          type="text"
          placeholder="搜索物品"
          confirmType="search"
          placeholderClass="search-input-placeholder"
          focus
        ></Input>
      </View> */}
        <View >
          <Button className="button-scan" onClick={scan}></Button>
        </View>
        <AtSearchBar value={text} onChange={onChange} className="search-bar" />
      </View>
      <View className="things">
        <View className="things-item" onClick={detail}>
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
      <View>
        <Button className="shop-car" onClick={shopping}></Button>
      </View>
      <AtCurtain
        isOpened={open}
        onClose={close}
      >
          <Image src={white1} className="detail-background">
          </Image>
          <View className="detail-box">
            <View className="little-box">
            <Image  src="https://joeschmoe.io/api/v1/random" className="detail-icon">
            </Image>
          <View className="detail-name">
            <Text>物品名称</Text>
          </View>
          <View className="detail-count">
            <Text className="detail-count-text">
            剩余
            </Text>
            <Input disabled className="detail-count-input" value="20"></Input>
            <Text className="detail-count-text">本</Text>
          </View>
          </View>
          <View className="counter">
            <Text className="counter-name">需要</Text>
            <AtInputNumber className="counter-counter"  min={0} max={10} step={1} value={count} width={120} onChange={getCount} type="number"  />
          </View>
          <View className="next">
        <Button className="next-button" >加入申领清单</Button>
      </View>
        </View>
      </AtCurtain>
    </View>
    
  );
}
