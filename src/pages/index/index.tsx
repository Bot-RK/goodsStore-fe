import { View, Text, Image, Navigator } from "@tarojs/components";
import Taro, { setStorageSync, useReady } from "@tarojs/taro";
import "./index.scss";
import icon1 from "../../asset/images/Vector.png";
import icon2 from "../../asset/images/Vector2.png";
import icon3 from "../../asset/images/Vector3.png";
import icon4 from "../../asset/images/Vector4.png";
import icon5 from "../../asset/images/Vector5.png";
import icon6 from "../../asset/images/Group.png";

export default function Index() {
  useReady(() => {
    Taro.login({
      success: (res) => {
        Taro.request({
          method: "POST",
          url: "https://gss.ncuos.com/login",
          header: {
            code: "1",
          },
          success: (res1) => {
            console.log(res1);
            setStorageSync("token", res1.data.data.token);
          },
          fail: (err) => console.log(err),
        });
      },
    });
  });
  return (
    <View className='"backGround-f"'>
      <View className="announcement">
        <View className="announcement-text">
          <Text>你好,欢迎使用学工仓储系统</Text>
          <View>
            <Text>
              我是公告我是公告我是公告我是公告我是公告我是公告我是公告我是公告我是公告我是公告
            </Text>
          </View>
        </View>
      </View>
      <View className="operation">
        <Navigator className="pathTo" url="/pages/apply/index"></Navigator>
        <Image className="icon" src={icon1}></Image>
        <Text className="icon-font">物资申领</Text>
        <Image className="arrow" src={icon4}></Image>
      </View>
      <View className="operation">
        <Navigator className="pathTo" url="/pages/thingList/index"></Navigator>
        <Image className="icon" src={icon2}></Image>
        <Text className="icon-font">物资清单</Text>
        <Image className="arrow" src={icon4}></Image>
      </View>
      <View className="operation">
        <Navigator className="pathTo" url="/pages/record/index"></Navigator>
        <Image className="icon" src={icon3}></Image>
        <Text className="icon-font">申领记录</Text>
        <Image className="arrow" src={icon4}></Image>
      </View>
      <View className="operation">
        <Navigator className="pathTo" url="/pages/backStage/index"></Navigator>
        <Image className="icon" src={icon5}></Image>
        <Text className="icon-font">管理后台</Text>
        <Image className="arrow" src={icon4}></Image>
      </View>
      <View className="icon-family">
        <Image className="family-image" src={icon6}></Image>
      </View>
    </View>
  );
}
