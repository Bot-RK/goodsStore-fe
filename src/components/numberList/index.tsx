import { View, Text, Picker } from "@tarojs/components";
import { FC, useEffect } from "react";
import { AtList, AtListItem } from "taro-ui";
import useAdminList from "../../store/adminList";

export default function NumberList() {
  const Authoritys = useAdminList((state) => state.data);
  const onChange = useAdminList((state) => state.changeAu);

  const authority = ["成员", "管理员"];
  return (
    <>
      {Authoritys.map((item, i) => (
        <View className="list-title" key={item.ID}>
          <View>
            <Text className="title-detail">{item.username}</Text>
          </View>
          <View>
            <Text className="title-detail">{item.phone}</Text>
          </View>
          <View>
            <Picker
              className="selector"
              mode="selector"
              range={authority}
              onChange={(e) => onChange(i, e)}
            >
              <AtList className="au-selector">
                <AtListItem
                  className="au-selector-text"
                  extraText={item.is_admin ? "成员" : "管理员"}
                />
              </AtList>
            </Picker>
          </View>
        </View>
      ))}
    </>
  );
}
