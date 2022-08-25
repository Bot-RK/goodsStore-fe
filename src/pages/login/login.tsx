import { Button, View, Text } from "@tarojs/components";
import Taro, { setStorageSync } from "@tarojs/taro";
import { useState } from "react";
import { AtInput } from "taro-ui";

import "./login.scss";

const Login = () => {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (e) => {
    setPhone(e);
  };

  const getPhone = (e) => {
    let match = /^1[3-9]\d{9}$/g;
    if (match.test(phone)) {
      console.log(223165);
      setStorageSync("phone", phone);
      Taro.navigateTo({
        url: "/pages/index/index",
      });
    } else {
      Taro.showToast({
        title: "手机号错误",
        icon: "error",
        duration: 2000,
      });
    }
  };
  return (
    <View className="login-background">
      {/* <View className="icon-b">
        <Image className="icon" src={Vector5}></Image>
      </View> */}
      <View className="title">
        <Text>学工仓储系统</Text>
      </View>

      <AtInput
        className="Phone-input"
        name="phone"
        border={false}
        title="手机号码"
        type="phone"
        placeholder="手机号码"
        value={phone}
        onChange={handlePhoneChange}
      />
      {/* <Button
        className="getNumber"
        openType="getPhoneNumber"
        onGetPhoneNumber={getphone}
      >
        登录
      </Button> */}
      <Button className="getNumber" onClick={getPhone}>
        登录
      </Button>
    </View>
  );
};
export default Login;
