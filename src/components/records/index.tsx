import { View, Image, Text, Navigator } from "@tarojs/components";
import useRecordTypeStore from "../../store/records";
import icon4 from "../../asset/images/Vector4.png";
import icon6 from "../../asset/images/Vector6.png";
import { formateTime } from "../../utils/getTime";

const Records = () => {
  const recordsData = useRecordTypeStore((state) => state.data);
  const time = formateTime();
  return (
    <>
      {recordsData.map((item) => (
        <>
          <View className="operation">
            <Navigator
              className="pathTo"
              url={`/pages/record/detail?id=${item.id}`}
            ></Navigator>
            <Image className="icon" src={icon6}></Image>
            <Text className="icon-font">{time}</Text>
            <View className="little-box">
              <Text className="little-font">
                {`剩余${item.total_amount}件物资`}
              </Text>
              <Text className="department-name">{item.department_id}</Text>
            </View>
            <Image className="arrow" src={icon4}></Image>
          </View>
        </>
      ))}
    </>
  );
};

export default Records;
