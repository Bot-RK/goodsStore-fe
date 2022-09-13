import { View, Text, Image, Input } from "@tarojs/components";
import Taro, { getStorageSync } from "@tarojs/taro";
import useAdminRecords from "../../store/adminRecords";
import deleteIcon from "../../asset/images/Vector13.js";
import useDepartmentList from "../../store/departmentList";
import api from "../../service/api";
import useRecordParamsStore from "../../store/adminRecordParams";

export default function BackRecordsDetail(props: any) {
  const { Id } = props;
  const records = useAdminRecords((state) => state.data);
  const index = records.findIndex(({ id }) => id == Number(Id));
  const department = useDepartmentList((state) => state.data);
  const token = getStorageSync("token");
  const data = useRecordParamsStore((state) => state.data);
  const setRecordsList = useAdminRecords((state) => state.setData);

  const deleteRecord = () => {
    api.delete(`/admin/record/${Id}`).then((re) => {
      console.log(re);
      if (re.statusCode === 200) {
        Taro.request({
          url: "https://gss.ncuos.com/admin/records",
          method: "POST",
          header: {
            "content-type": "application/x-www-form-urlencoded;charset=utf-8",
            Authorization: token,
          },
          data: JSON.stringify(data),
          success: (res) => {
            if (res.data.data) {
              console.log("成功啦", res);
              setRecordsList(res.data.data);
              console.log(JSON.stringify(data));
            } else {
              Taro.showToast({
                title: "失败,无数据",
                icon: "error",
              });
            }
          },
        });
        Taro.navigateBack({
          delta: 1,
          success: () => {
            Taro.showToast({
              title: "成功",
              icon: "none",
            });
          },
        });
      }
    });
  };

  return (
    <>
      <View className="thingList-text">
        <Text className="thingList-font">
          {records[index].created_at.substring(0, 10)}的申领
        </Text>
      </View>
      <View className="delete" onClick={deleteRecord}>
        <Image className="delete-icon" src={deleteIcon}></Image>
        <Text className="delete-text">删除</Text>
      </View>
      <View className="record-detail">
        <Text className="record-title">申领时间:</Text>
        <Text className="record-message">
          &nbsp;&nbsp;{records[index].created_at.substring(0, 10)}
        </Text>
      </View>
      <View className="record-detail">
        <Text className="record-title">申领人:</Text>
        <Text className="record-message">
          &nbsp;&nbsp;{records[index].person_name}
        </Text>
      </View>
      <View className="record-detail">
        <Text className="record-title">申领单位:</Text>
        <Text className="record-message">
          &nbsp;&nbsp;
          {`${
            department[
              department.findIndex(
                ({ ID }) => records[index].department_id == ID
              )
            ].name
          }`}
        </Text>
      </View>
      <View>
        <Text className="record-item-text">申领物品:</Text>
      </View>
      <View className="things">
        {records[index].requests.map((list) => (
          <>
            <View className="things-item">
              <Image
                src="https://joeschmoe.io/api/v1/random"
                className="things-icon"
              ></Image>
              <View className="things-texts">
                <Text className="things-title">{list.name}</Text>
              </View>
              <View className="things-count">
                <View className="counts">
                  <Input
                    className="count-input"
                    disabled
                    value={`${list.amount}`}
                  ></Input>
                </View>
                <Text className="things-count-text">{list.measure_word}</Text>
              </View>
            </View>
          </>
        ))}
      </View>
    </>
  );
}
