import { View, Image, Text, Input } from "@tarojs/components";
import useAdminRecords from "../../store/adminRecords";

export default function AdRecords() {
  const AdRecord = useAdminRecords((state) => state.data);
  console.log(AdRecord);
  return (
    <>
      {AdRecord.map((item) => (
        <>
          <View className="list-item">
            <Text>{`${item.department_id}:`}</Text>
          </View>
          {item.requests.map((list) => (
            <>
              <View className="things">
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
                    <Text className="things-count-text">
                      {list.measure_word}
                    </Text>
                  </View>
                </View>
              </View>
            </>
          ))}
        </>
      ))}
    </>
  );
}
