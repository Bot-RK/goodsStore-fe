import { View, Text } from "@tarojs/components";
import { AtInputNumber } from "taro-ui";
import useSelectedId from "../../store/selected";
import useDepartmentList from "../../store/departmentList";

export default function MultipleDetail() {
  const departmentList = useDepartmentList((state) => state.data);
  const addCount = useDepartmentList((state) => state.addCount);
  const setCount = useDepartmentList((state) => state.setCount);
  const list = useSelectedId((state) => state.data);
  const setList = useDepartmentList((state) => state.setList);
  if (departmentList[0].count == undefined) {
    addCount();
    for (let i = 0; i < list.length; i++) {
      setList(list[i]);
      console.log(i);
    }
  }
  const showList: any = [];
  const onChange = (Id, e) => {
    console.log(Id);
    const index = departmentList.findIndex(({ ID }) => ID === Id);
    setCount(index, e);
  };
  for (let i = 0; i < list.length; i++) {
    let j = departmentList.findIndex(({ ID }) => ID == list[i]);
    showList.push(departmentList[j]);
  }
  return (
    <>
      {showList.map((item) => (
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
