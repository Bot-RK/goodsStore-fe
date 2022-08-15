import { Button, View, Image, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import Vector5 from "../../asset/images/Vector5";
import "./login.scss";

const getphone = (e) => {
  console.log(e);
  Taro.navigateTo({
    url: "/pages/index/index",
  });
};

const login = () => {
  return (
    <View className="login-background">
      {/* <View className="icon-b">
        <Image className="icon" src={Vector5}></Image>
      </View> */}
      <View className="title">
        <Text>学工仓储系统</Text>
      </View>
      <Button
        className="getNumber"
        openType="getPhoneNumber"
        onGetPhoneNumber={getphone}
      >
        登录
      </Button>
    </View>
  );
};
export default login;
