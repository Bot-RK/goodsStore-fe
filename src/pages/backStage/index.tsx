import { View, Text, Image, Navigator } from "@tarojs/components";
import { getStorageSync, useReady } from "@tarojs/taro";
import "./index.scss";
import icon1 from "../../asset/images/Vector7.js";
import icon2 from "../../asset/images/Vector8.js";
import icon3 from "../../asset/images/Vector9.js";
import icon4 from "../../asset/images/Vector4.js";
import icon5 from "../../asset/images/Vector10.js";
import icon6 from "../../asset/images/backStage1.js";
import icon7 from "../../asset/images/Group.js";
import useLayoutList from "../../store/layoutList";

export default function Index() {
  const clean = useLayoutList((state) => state.clean);
  useReady(() => {
    clean();
  });
  const name = getStorageSync("name");

  return (
    <View className='"backGround-b"'>
      <View className="title">
        <Text className="title-name">管理后台</Text>
        <Text className="title-who">你好,{name}</Text>
      </View>
      <View className="backStage-image">
        <Image className="backStage-image1" src={icon6}></Image>
      </View>
      <View className="announcement"></View>

      <View className="operation">
        <Navigator className="pathTo" url="/pages/manager/index"></Navigator>
        <Image className="icon" src={icon1}></Image>
        <Text className="icon-font">物资管理</Text>
        <Image className="arrow" src={icon4}></Image>
      </View>
      <View className="operation">
        <Navigator className="pathTo" url="/pages/statistics/index"></Navigator>
        <Image className="icon" src={icon2}></Image>
        <Text className="icon-font">申领统计</Text>
        <Image className="arrow" src={icon4}></Image>
      </View>
      <View className="operation">
        <Navigator className="pathTo" url="/pages/addPeople/index"></Navigator>
        <Image className="icon" src={icon3}></Image>
        <Text className="icon-font">系统设置</Text>
        <Image className="arrow" src={icon4}></Image>
      </View>
      <View className="operation">
        <Navigator className="pathTo" url="/pages/announce/index"></Navigator>
        <Image className="icon" src={icon5}></Image>
        <Text className="icon-font">编辑公告</Text>
        <Image className="arrow" src={icon4}></Image>
      </View>
      <View className="icon-family">
        <Image className="family-image" src={icon7}></Image>
      </View>
    </View>
  );
}
