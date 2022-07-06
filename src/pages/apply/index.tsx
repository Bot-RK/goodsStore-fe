import { View, Text, Progress, Input, Image, Button } from "@tarojs/components";
import { AtFloatLayout, AtInputNumber, AtSearchBar } from "taro-ui";
import Taro from "@tarojs/taro";
import { useState } from "react";
import Popup from "../../components/popup";
import "./index.scss";
import searchIcon from "../../asset/images/search.png";

export default function Apply() {
  const [text, setText] = useState("");
  const [layoutShow, setLayoutShow] = useState(false);
  const [open, setOpen] = useState(false);
  const openLayout = (e) => {
    setLayoutShow(!layoutShow);
  };
  const onChange = (e) => {
    setText(e);
  };
  const close = (e) => {
    setOpen(!open);
  };
  function to() {
    Taro.navigateTo({
      url: "third",
      success: (res) => {
        Taro.showToast({
          title: "成功",
          icon: "success",
          duration: 2000,
        });
      },
    });
    Taro.login({
      success: (res) => {
        console.log(res);
      },
    });
  }
  const closeLayout = (e) => {
    console.log(e);
  };
  const scan = (e) => {
    Taro.scanCode({
      success: (res) => {
        setOpen(!open)
        console.log(res);
      },
    });
  };

  const getPhoneNumber = (e) => {
    console.log(e.detail.errMsg);
    console.log(e.detail.iv);
    console.log(e.detail.encryptedData);
  };

  return (
    <View className="backGround-f">
      <View className="progress">
        <Text className="progress-font">步骤1/2</Text>
        <Progress
          className="progress-bar"
          percent={50}
          strokeWidth={3}
          color="#0B75FB"
        ></Progress>
        <Text className="progress-text">选择物品</Text>
        <View>
          <Button className="button-scan" onClick={scan}></Button>
        </View>
        <AtSearchBar value={text} onChange={onChange} className="search-bar" />
      </View>

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
            onChange={() => 2}
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
            onChange={() => 2}
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
            onChange={() => 2}
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
            onChange={() => 2}
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
            onChange={() => 2}
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
            onChange={() => 2}
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
            onChange={() => 2}
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
            onChange={() => 2}
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
            onChange={() => 2}
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
            onChange={() => 2}
          />
        </View>
      </View>
      <View className="next">
        <Button className="show-list" onClick={openLayout}>
          已选列表
        </Button>
        <Button className="next-button" onClick={to}>
          下一步
        </Button>
      </View>
      <AtFloatLayout
        isOpened={layoutShow}
        title="已选清单"
        onClose={closeLayout}
      >
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
        <View className="counter-new">
          <AtInputNumber
            type="digit"
            min={0}
            max={100}
            step={1}
            value={1}
            onChange={() => 2}
          />
        </View>
      </AtFloatLayout>
      <Popup
        isOpen={open}
        isShowQRcode={false}
        isShowCounter
        onclose={close}
        icon="https://joeschmoe.io/api/v1/random"
        name="物品名字"
        remainCount="20"
      ></Popup>
    </View>
  );
}
