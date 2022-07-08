import { View, Text } from "@tarojs/components";
import useRecordTypeStore from "../../store/records";

const RecordDetail = (props) => {
  const records = useRecordTypeStore((state) => state.data);
  const { Id } = props;
  console.log(Id);
  const index = records.findIndex(({ id }) => id == Number(Id));
  console.log(records);
  console.log(index);
  const departmentId = records[index].department_id;
  const personName = records[index].person_name;
  const time = records[index].created_at;
  return (
    <>
      <View className="thingList-text">
        <Text className="thingList-font">{`${departmentId}的申领`}</Text>
      </View>
      <View className="record-detail">
        <Text className="record-title">申领时间:</Text>
        <Text className="record-message">&nbsp;&nbsp;{time}</Text>
      </View>
      <View className="record-detail">
        <Text className="record-title">申领人:</Text>
        <Text className="record-message">&nbsp;&nbsp;{personName}</Text>
      </View>
      <View className="record-detail">
        <Text className="record-title">申领单位:</Text>
        <Text className="record-message">&nbsp;&nbsp;{departmentId}</Text>
      </View>
    </>
  );
};

export default RecordDetail;
