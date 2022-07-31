import { View, Text } from "@tarojs/components";
import useDepartmentList from "../../store/departmentList";
import useRecordTypeStore from "../../store/records";

const RecordDetail = (props) => {
  const records = useRecordTypeStore((state) => state.data);
  const { Id } = props;
  const index = records.findIndex(({ id }) => id == Number(Id));
  console.log("索引：" + index);
  const departmentId = records[index].department_id;
  const personName = records[index].person_name;
  const time = records[index].created_at;
  const department = useDepartmentList((state) => state.data);
  return (
    <>
      <View className="thingList-text">
        <Text className="thingList-font">{`${
          department[department.findIndex(({ ID }) => departmentId == ID)].name
        }`}</Text>
      </View>
      <View className="record-detail">
        <Text className="record-title">申领时间:</Text>
        <Text className="record-message">
          &nbsp;&nbsp;{time.substring(0, 10)}
        </Text>
      </View>
      <View className="record-detail">
        <Text className="record-title">申领人:</Text>
        <Text className="record-message">&nbsp;&nbsp;{personName}</Text>
      </View>
      <View className="record-detail">
        <Text className="record-title">申领单位:</Text>
        <Text className="record-message">
          &nbsp;&nbsp;
          {`${
            department[department.findIndex(({ ID }) => departmentId == ID)]
              .name
          }`}
        </Text>
      </View>
    </>
  );
};

export default RecordDetail;
