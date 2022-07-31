import { View, Image, Text, Navigator } from "@tarojs/components";
import useRecordTypeStore from "../../store/records";
import icon4 from "../../asset/images/Vector4.js";
import icon6 from "../../asset/images/Vector6.js";
import useDepartmentList from "../../store/departmentList";

const Records = () => {
  const recordsData = useRecordTypeStore((state) => state.data);
  const department = useDepartmentList((state) => state.data);
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
            <Text className="icon-font">
              {item.created_at.substring(0, 10)}
            </Text>
            <View className="little-box">
              <Text className="little-font">
                {`申领${item.total_amount}件物资`}
              </Text>
              <Text className="department-name">{`${
                department[
                  department.findIndex(({ ID }) => item.department_id == ID)
                ].name
              }`}</Text>
            </View>
            <Image className="arrow" src={icon4}></Image>
          </View>
        </>
      ))}
    </>
  );
};

export default Records;
