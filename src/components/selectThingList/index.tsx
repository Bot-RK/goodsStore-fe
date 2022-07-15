import { View, Image, Text, Icon } from "@tarojs/components";
import { AtInputNumber } from "taro-ui";
import useLayoutList from "../../store/layoutList";
import useThingListStore from "../../store/thingList";

export default function SelectThingList() {
  const thingList = useThingListStore((state) => state.data);
  const addCount = useThingListStore((state) => state.addCount);
  const onChange = useThingListStore((state) => state.onChange);
  const onPush = useLayoutList((state) => state.onPush);
  const layoutList = useLayoutList((state) => state.data);
  const setCount = useLayoutList((state) => state.setCount);
  const onDelete = useLayoutList((state) => state.onDelete);
  if (thingList[0].count === undefined) {
    addCount();
  }
  const onChangePush = async (
    index1,
    e,
    Id,
    name,
    icon,
    remain_count,
    count_name
  ) => {
    console.log("value:" + e);
    console.log("index1:" + index1);
    onChange(index1, e);
    if (!layoutList.find(({ id }) => id === Id)) {
      onPush(Id, name, icon, remain_count, count_name);
    } else {
      const index0 = layoutList.findIndex(({ id }) => id === Id);
      if (e === 0) {
        onDelete(index0);
      } else {
        console.log("index0: " + index0);
        setCount(index0, e);
      }
    }
  };
  return (
    <>
      {thingList.map((item, index) => (
        <>
          <View className="things-item">
            <Image
              src="https://joeschmoe.io/api/v1/random"
              className="things-icon"
            ></Image>
            <View className="things-texts">
              <Text className="things-title">{item.name}</Text>
              <Text className="things-count">{`剩余${item.amount}`}</Text>
            </View>
          </View>
          <View className="counter">
            <AtInputNumber
              type="number"
              min={0}
              max={100}
              step={1}
              value={`${item.count}`}
              onChange={(e) =>
                onChangePush(
                  index,
                  e,
                  item.ID,
                  item.name,
                  item.picture_url,
                  item.amount,
                  item.measure_word
                )
              }
            />
          </View>
        </>
      ))}
    </>
  );
}
