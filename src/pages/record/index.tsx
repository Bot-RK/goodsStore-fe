import { View, Text, Image, Navigator } from "@tarojs/components";
import Records from "../../components/records";
import icon4 from "../../asset/images/Vector4.png";
import icon6 from "../../asset/images/Vector6.png";
import "./index.scss";

export default function record() {
  return (
    <View className="backGround-f">
      <View className="thingList-text">
        <Text className="thingList-font">物资清单</Text>
      </View>
      <View>
        <Records />
      </View>
    </View>
  );
}
