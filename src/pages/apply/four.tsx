import { View, Text, Input, Image, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./four.scss";
import { formateTime } from "../../utils/getTime";
import useApplyList from "../../store/applyList";
import useJudge from "../../store/judgeIsMultiple";
import useDepartmentList from "../../store/departmentList";
import DetailList from "../../components/applyDetail";

export default function Detail() {
  const person_name = useApplyList((state) => state.person_name);
  const isMultiple = useJudge((state) => state.isMultiple);
  const departmentList = useDepartmentList((state) => state.data);
  const deparmentID = useApplyList((state) => state.department_id);
  const Index = departmentList.findIndex(({ ID }) => ID === deparmentID);
  console.log(departmentList);
  let longName = "";
  const departments = departmentList.filter((item) => item.count! > 0);
  function to() {
    Taro.navigateTo({
      url: "last",
      success: (res) => {
        Taro.showToast({
          title: "成功",
          icon: "success",
          duration: 2000,
        });
      },
    });
  }
  let time = formateTime();
  departments.forEach((item) => {
    longName += item.name + "(" + item.count + ")" + " ";
  });

  console.log(longName);

  return (
    <View className="backGround-f">
      <View className="thingList-text">
        <Text className="thingList-font">申领信息</Text>
      </View>
      <View className="record-detail">
        <Text className="record-title">申领时间:</Text>
        <Text className="record-message">&nbsp;&nbsp;{time}</Text>
      </View>
      <View className="record-detail">
        <Text className="record-title">申领人:</Text>
        <Text className="record-message">
          &nbsp;&nbsp;{isMultiple ? "批量申领" : person_name}
        </Text>
      </View>
      <View className="record-detail">
        <Text className="record-title">申领单位:</Text>
        <Text className="record-message">
          &nbsp;&nbsp;{isMultiple ? longName : departmentList[Index].name}
        </Text>
      </View>
      <View>
        <Text className="record-item-text">申领物品:</Text>
      </View>
      <View className="things">
        <DetailList />
        {/* <View className="things-item">
          <Image
            src="https://joeschmoe.io/api/v1/random"
            className="things-icon"
          ></Image>
          <View className="things-texts">
            <Text className="things-title">物品名字</Text>
          </View>
          <View className="things-count">
            <View className="counts">
              <Input className="count-input" disabled value="20"></Input>
            </View>
            <Text className="things-count-text">本</Text>
          </View>
        </View> */}
      </View>
      <View className="next">
        <Button className="next-button" onClick={to}>
          申领
        </Button>
      </View>
    </View>
  );
}
