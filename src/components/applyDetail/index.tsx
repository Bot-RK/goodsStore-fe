import { Input, View, Image, Text } from "@tarojs/components";
import useLayoutList from "../../store/layoutList";

export default function DetailList() {
  const layoutList = useLayoutList((state) => state.data);
  return (
    <>
      {layoutList.map((item) => (
        <View className="things-item" key={item.id}>
          <Image
            src="https://joeschmoe.io/api/v1/random"
            className="things-icon"
          ></Image>
          <View className="things-texts">
            <Text className="things-title">{item.name}</Text>
          </View>
          <View className="things-count">
            <View className="counts">
              <Input
                className="count-input"
                disabled
                value={`${item.count}`}
              ></Input>
            </View>
            <Text className="things-count-text">{item.count_name}</Text>
          </View>
        </View>
      ))}
    </>
  );
}
