import { View, Text, Image, Navigator } from "@tarojs/components";
import useAdminRecords from "../../store/adminRecords";
import icon4 from "../../asset/images/Vector4.png";
import icon6 from "../../asset/images/Vector11.png";

export default function BackRecords() {
  const AdRecord = useAdminRecords((state) => state.data);
  return (
    <>
      {AdRecord.map((item) => (
        <>
          <View className="list-item">
            <Text>{`${item.department_id}:`}</Text>
          </View>

          <View className="operation">
            <Navigator
              className="pathTo"
              url={`/pages/statistics/record?id=${item.id}`}
            ></Navigator>
            <Image className="icon" src={icon6}></Image>
            <Text className="icon-font">物资清单</Text>
            <Image className="arrow" src={icon4}></Image>
          </View>
        </>
      ))}
    </>
  );
}
