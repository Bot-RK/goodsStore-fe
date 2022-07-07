import { View, Text } from "@tarojs/components";
import { AtInputNumber } from "taro-ui";
import useDepartmentList from "../../store/departmentList";

export default function MultipleDetail() {
  const departmentList = useDepartmentList((state) => state.data);
  const addCount = useDepartmentList((state) => state.addCount);
  const setCount = useDepartmentList((state) => state.setCount);
  if (!departmentList[0].count) {
    addCount();
  }
  const onChange = (Id, e) => {
    console.log(Id);
    const index = departmentList.findIndex(({ ID }) => ID === Id);
    setCount(index, e);
  };
  return (
    <>
      {departmentList.map((item) => (
        <>
          <View className="things-item">
            <View className="things-texts">
              <Text className="things-title">{item.name}</Text>
            </View>
          </View>
          <View className="counter">
            <AtInputNumber
              type="number"
              min={0}
              max={100}
              step={1}
              value={`${item.count}`}
              onChange={(e) => onChange(item.ID, e)}
            />
          </View>
        </>
      ))}
    </>
  );
}
