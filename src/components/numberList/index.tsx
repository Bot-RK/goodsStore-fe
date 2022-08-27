import { View, Text, Picker, Image } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import Taro from "@tarojs/taro";
import useAdminList from "../../store/adminList";
import deleteIcon from "../../asset/images/delete.js";
import api from "../../service/api";

export default function NumberList() {
  const Authoritys = useAdminList((state) => state.data);
  const onChange = useAdminList((state) => state.changeAu);
  const setData = useAdminList((state) => state.setData);
  const authority = ["成员", "管理员"];
  function deleteList(phone1) {
    api
      .put("/admin/user/delete", {
        phone: phone1,
      })
      .then(() => {
        api.get("/admin/users").then((res) => {
          setData(res.data.data);
        });
      });
  }

  const chageAu = async (index, value) => {
    await onChange(index, value);
    api
      .put("/admin/user/update", {
        phone: Authoritys[index].phone,
        username: Authoritys[index].username,
        is_admin: value.detail.value == "1" ? true : false,
      })
      .then(() => {
        console.log(value.detail.value);
        console.log(value.detail.value == "1" ? true : false);
        Taro.showToast({
          title: " update success",
          icon: "none",
          duration: 2000,
        });
      })
      .catch((err) => {
        Taro.showToast({
          title: `${err.message}`,
          icon: "none",
          duration: 2000,
        });
      });
  };

  return (
    <>
      {Authoritys.map((item, i) => (
        <View className="list-title" key={item.ID}>
          <View className="list-delete" onClick={() => deleteList(item.phone)}>
            <Image className="delete" src={deleteIcon}></Image>
          </View>
          <View className="list-detail1">
            <Text>{item.username}</Text>
          </View>
          <View className="list-detail2">
            <Text>{item.phone}</Text>
          </View>
          <View className="list-detail3">
            <Picker
              className="selector"
              mode="selector"
              range={authority}
              value={item.is_admin ? 1 : 0}
              onChange={(e) => chageAu(i, e)}
            >
              <AtList className="au-selector">
                <AtListItem
                  className="au-selector-text"
                  extraText={item.is_admin ? "管理员" : "成员"}
                />
              </AtList>
            </Picker>
          </View>
        </View>
      ))}
    </>
  );
}
