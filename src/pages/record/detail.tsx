import { View, Text } from "@tarojs/components";
import { getCurrentInstance } from "@tarojs/taro";
import RecordDetailList from "../../components/recordDetailList/recordDetailList";
import RecordDetail from "../../components/recordDetail/recordDetail";
import "./detail.scss";

export default function detail() {
  const id = getCurrentInstance().router?.params.id;
  console.log(id);
  return (
    <View className="backGround-f">
      <View>
        <RecordDetail Id={id} />
        <Text className="record-item-text">申领物品:</Text>
      </View>
      <View className="things">
        <RecordDetailList Id={id} />
      </View>
    </View>
  );
}
