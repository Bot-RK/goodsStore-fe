import { View, Image, Text, Input } from "@tarojs/components";
import usePopupDetail from "../../store/popup";
import useThingListStore from "../../store/thingList";

export default function ThingList() {
  const thingList = useThingListStore((state) => state.data);
  console.log(222);
  console.log(thingList);
  const openPopupList = usePopupDetail((state) => state.onOpen);
  return (
    <>
      {thingList.map((item) => (
        <View className="things-item" key={item.ID} onClick={openPopupList}>
          <Image
            src="https://joeschmoe.io/api/v1/random"
            className="things-icon"
          ></Image>
          <View className="things-texts">
            <Text className="things-title">{item.name}</Text>
          </View>
          <View className="things-count">
            <Text className="things-count-text">剩余</Text>
            <View className="counts">
              <Input
                className="count-input"
                disabled
                value={`${item.amount}`}
              ></Input>
            </View>
            <Text className="things-count-text">本</Text>
          </View>
        </View>
      ))}
    </>
  );
}
