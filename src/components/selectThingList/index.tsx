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
  if (!thingList[0].count) {
    addCount();
  }
  //   const a = [
  //     { id: 1 },
  //     {
  //       id: 2,
  //     },
  //   ];
  //   console.log(!a.find(({ id }) => id === 1));
  const onChangePush = (index1, e, Id, name, icon, remain_count, count) => {
    onChange(index1, e);
    if (!layoutList.find(({ id }) => id === Id)) {
      onPush(Id, name, icon, remain_count, count);
    } else {
      const index = layoutList.findIndex(({ id }) => id === Id);
      console.log(index);
      setCount(index, count + 1);
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
                  item.count
                )
              }
            />
          </View>
        </>
      ))}
    </>
  );
}
