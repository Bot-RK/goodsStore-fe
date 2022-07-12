import { View } from "@tarojs/components";
import { getCurrentInstance } from "@tarojs/taro";
import BackRecordsDetail from "../../components/backRecordsDetail";
import "./record.scss";

export default function detail() {
  const id = getCurrentInstance().router?.params.id;
  console.log(id);
  return (
    <View className="backGround-b">
      <BackRecordsDetail Id={id} />
    </View>
  );
}
