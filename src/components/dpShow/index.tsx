import { View, Text, Image } from "@tarojs/components";
import api from "../../service/api";
import useDepartmentList from "../../store/departmentList";
import deleteIcon from "../../asset/images/delete.png";

export default function List() {
  const dpList = useDepartmentList((state) => state.data);
  const setData = useDepartmentList((state) => state.setData);
  function deleteList(name1) {
    api
      .put("/admin/department/delete", {
        name: name1,
      })
      .then((res) => {
        console.log("delete success: " + res);
        api.get("/user/departments").then((res1) => {
          setData(res1.data.data);
        });
      });
  }
  return (
    <>
      {dpList.map((dp) => (
        <>
          <View className="list-delete1" onClick={() => deleteList(dp.name)}>
            <Image className="delete1" src={deleteIcon}></Image>
          </View>
          <View className="dp-detail">
            <Text>{dp.name}</Text>
          </View>
        </>
      ))}
    </>
  );
}
