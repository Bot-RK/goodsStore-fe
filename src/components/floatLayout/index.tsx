import { View, Image, Text } from "@tarojs/components";
import { AtInputNumber } from "taro-ui";
import useLayoutList from "../../store/layoutList";
import useThingListStore from "../../store/thingList";

export default function FloatLayout() {
  const layoutList = useLayoutList((state) => state.data);
  const onChange = useLayoutList((state) => state.onChange);
  const setCount = useThingListStore((state) => state.setCount);
  const onDelete = useLayoutList((state) => state.onDelete);
  const onSetChange = (index, e, Id) => {
    onChange(index, e);
    const newIndex = layoutList.findIndex(({ id }) => id === Id);
    if (e === 0) {
      onDelete(newIndex);
      setCount(newIndex, e);
    } else {
      console.log("delete", layoutList);
      setCount(newIndex, e);
    }
  };
  console.log(layoutList);
  return (
    <>
      {layoutList.map((item, index) => (
        <>
          <View className="things-item">
            <Image
              src="https://joeschmoe.io/api/v1/random"
              className="things-icon"
            ></Image>
            <View className="things-texts">
              <Text className="things-title">{item.name}</Text>
              <Text className="things-count">{`剩余${item.remain_count}`}</Text>
            </View>
          </View>
          <View className="counter-new">
            <AtInputNumber
              type="digit"
              min={0}
              max={100}
              step={1}
              value={`${item.count}`}
              onChange={(e) => onSetChange(index, e, item.id)}
            />
          </View>
        </>
      ))}
    </>
  );
}
