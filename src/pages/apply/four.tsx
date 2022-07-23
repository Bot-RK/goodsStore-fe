import { View, Text, Button } from "@tarojs/components";
import Taro, { getStorageSync, useReady } from "@tarojs/taro";
import "./four.scss";
import { formateTime } from "../../utils/getTime";
import useApplyList from "../../store/applyList";
import useJudge from "../../store/judgeIsMultiple";
import useDepartmentList from "../../store/departmentList";
import DetailList from "../../components/applyDetail";
import useMultipleDepartmentType from "../../store/multipleDepartment";
import api from "../../service/api";

export default function Detail() {
  const person_name = useApplyList((state) => state.person_name);
  const isMultiple = useJudge((state) => state.isMultiple);
  const departmentList = useDepartmentList((state) => state.data);
  const deparmentID = useApplyList((state) => state.department_id);
  const addData = useMultipleDepartmentType((state) => state.addData);
  const Index = departmentList.findIndex(({ ID }) => ID === deparmentID);
  const multipleDepartment = useMultipleDepartmentType((state) => state.data);
  const detail = useApplyList((state) => state.requests);
  const applyList = useApplyList((state) => state);
  let longName = "";
  const departments = departmentList.filter((item) => item.count! > 0);
  const token = getStorageSync("token");
  const test = [
    {
      person_name: "批量申请",
      department_id: 1,
      requests: [
        {
          good_id: 2,
          amount: 10,
        },
        {
          good_id: 3,
          amount: 10,
        },
      ],
    },
    {
      person_name: "批量申请",
      department_id: 2,
      requests: [
        {
          good_id: 2,
          amount: 10,
        },
        {
          good_id: 3,
          amount: 10,
        },
      ],
    },
  ];
  useReady(() => {
    for (let i = 0; i < departments.length; i++) {
      for (let j = 0; j < departments[i].count!; j++) {
        addData(departments[i].ID, detail);
      }
      console.log(detail);
    }
  });
  function to() {
    console.log(multipleDepartment);
    Taro.request({
      url: "https://gss.ncuos.com/user/records",
      method: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
        Authorization: token,
      },
      data: JSON.stringify(multipleDepartment),
      success: (res) => {
        console.log("成功啦", res);
        Taro.navigateTo({
          url: "last",
          success: (res1) => {
            Taro.showToast({
              title: "成功",
              icon: "success",
              duration: 2000,
            });
          },
        });
      },
    });
    // api
    //   .post("/user/records", multipleDepartment)
    //   .then((res) => {
    //     console.log("结果:" + res);
    //     console.log("test");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
  function to2() {
    console.log("show:", applyList);
    api.post("/user/record", applyList).then((res) => {
      console.log(res);
    });
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
      </View>
      <View className="next">
        <Button className="next-button" onClick={isMultiple ? to : to2}>
          申领
        </Button>
      </View>
    </View>
  );
}
