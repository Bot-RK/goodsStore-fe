import { View, Text, Picker } from "@tarojs/components";
import { FC } from "react";
import { AtList, AtListItem } from "taro-ui";
import useAdminList from "../../store/adminList";

export default function NumberList() {
  const Authoritys = useAdminList((state) => state.data);
  const onchange = useAdminList((state) => state.changeAu);
  const authority = ["成员", "管理员"];
  return (
    <>
      {Authoritys.map((item, index) => (
        <View className="list-title" key={item.ID}>
          <View>
            <Text className="title-detail">{item.username}</Text>
          </View>
          <View>
            <Text className="title-detail">{item.phone}</Text>
          </View>
          <View>
            <Picker
              mode="selector"
              range={authority}
              onChange={onchange(index)}
            >
              <AtList>
                <AtListItem extraText={item.is_admin ? "成员" : "管理员"} />
              </AtList>
            </Picker>
          </View>
        </View>
      ))}
    </>
  );
}
