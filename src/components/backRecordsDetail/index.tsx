import { View, Text, Image, Input } from "@tarojs/components";
import useAdminRecords from "../../store/adminRecords";
import deleteIcon from "../../asset/images/Vector13.png";

export default function BackRecordsDetail(props: any) {
  const { Id } = props;
  const records = useAdminRecords((state) => state.data);
  const index = records.findIndex(({ id }) => id == Number(Id));
  return (
    <>
      <View className="thingList-text">
        <Text className="thingList-font">
          {records[index].created_at}的申领
        </Text>
      </View>
      <View className="delete">
        <Image className="delete-icon" src={deleteIcon}></Image>
        <Text className="delete-text">删除</Text>
      </View>
      <View className="record-detail">
        <Text className="record-title">申领时间:</Text>
        <Text className="record-message">
          &nbsp;&nbsp;{records[index].created_at}
        </Text>
      </View>
      <View className="record-detail">
        <Text className="record-title">申领人:</Text>
        <Text className="record-message">
          &nbsp;&nbsp;{records[index].person_name}
        </Text>
      </View>
      <View className="record-detail">
        <Text className="record-title">申领单位:</Text>
        <Text className="record-message">
          &nbsp;&nbsp;{records[index].department_id}
        </Text>
      </View>
      <View>
        <Text className="record-item-text">申领物品:</Text>
      </View>
      <View className="things">
        {records[index].requests.map((list) => (
          <>
            <View className="things-item">
              <Image
                src="https://joeschmoe.io/api/v1/random"
                className="things-icon"
              ></Image>
              <View className="things-texts">
                <Text className="things-title">{list.name}</Text>
              </View>
              <View className="things-count">
                <View className="counts">
                  <Input
                    className="count-input"
                    disabled
                    value={`${list.amount}`}
                  ></Input>
                </View>
                <Text className="things-count-text">{list.measure_word}</Text>
              </View>
            </View>
          </>
        ))}
      </View>
    </>
  );
}
