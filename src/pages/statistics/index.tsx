import { View, Text, Button, Image, Picker } from "@tarojs/components";
import Taro, { getStorageSync, useReady } from "@tarojs/taro";
import { useState } from "react";
import { AtCheckbox, AtFloatLayout, AtList, AtListItem } from "taro-ui";
import "./index.scss";
import { getFromTime } from "../../utils/getTime";
import icon5 from "../../asset/images/Vector12.js";
import AdRecords from "../../components/adminRecords";
import BackRecords from "../../components/backRecords";
import api from "../../service/api";
import useDepartmentList from "../../store/departmentList";
import useAdminRecords from "../../store/adminRecords";

export default function Index() {
  const [layoutShow, setLayoutShow] = useState(false);
  const [selected, setSelected] = useState(true);
  const [startDate, setStartDate] = useState("2022-07-02");
  const [endDate, setEndDate] = useState("2022-07-12");
  const [selectList, setSelectList] = useState([]);
  const setDpData = useDepartmentList((state) => state.setData);
  const DpList = useDepartmentList((state) => state.data);
  const setRecordsList = useAdminRecords((state) => state.setData);
  const token = getStorageSync("token");
  const setAdRecord = useAdminRecords((state) => state.setData);
  // const [dp, setDp] = useState("");

  useReady(() => {
    api.get("/user/departments").then((res) => {
      setDpData(res.data.data);
    });
    // api.get("/user/records/1").then((res) => {
    //   setAdRecord(res.data.data);
    //   console.log("这是数据", res.data.data);
    // });
  });
  const openLayout = (e) => {
    setLayoutShow(!layoutShow);
    console.log(layoutShow);
  };
  const select = (e) => {
    setSelectList(e);
    console.log(e);
  };
  const closeLayout = (e) => {
    setLayoutShow(!layoutShow);
    console.log(layoutShow);
    let time1 = getFromTime(startDate);
    let time2 = getFromTime(endDate);
    let data: Array<any> = [];
    for (let i = 0; i < selectList.length; i++) {
      data.push({
        from: time1,
        to: time2,
        last_id: -1,
        department_id: selectList[i],
      });
    }
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
    // api.post("/admin/records", data).then((res) => {
    //   setRecordsList(res.data.data);
    // });
  };
  // const department: string[] = ["A", "B", "C", "d"];
  let departments: Array<any> = [];
  for (let i = 0; i < DpList.length; i++) {
    departments.push({
      value: DpList[i].ID,
      label: DpList[i].name,
    });
  }
  // const departments: any = [
  //   {
  //     value: "学工处",
  //     label: "学工处",
  //   },
  //   {
  //     value: "保卫处",
  //     label: "保卫处",
  //   },
  //   {
  //     value: "后勤处",
  //     label: "后勤处",
  //   },
  // ];
  function change() {
    setSelected(!selected);
  }
  // const onChangeDepartment = (e) => {
  //   console.log(e);
  //   setDp(department[e.detail.value]);
  // };

  const onStartTimeChange = (e) => {
    setStartDate(e.detail.value);
    console.log("ttttttt", getFromTime(startDate));
  };
  const onEndTimeChange = (e) => {
    setEndDate(e.detail.value);
  };

  return (
    <View className="backGround-b">
      <View className="progress">
        <Text className="progress-text">申领统计</Text>
      </View>
      <View className="switch">
        <Button
          className={selected ? "Selected-one" : "unSelected-one"}
          onClick={change}
        >
          物品统计
        </Button>
        <Button
          className={selected ? "unSelected-two" : "Selected-two"}
          onClick={change}
        >
          申领记录
        </Button>
      </View>
      <View className={selected ? "listShow" : "listUnShow"}>
        <View className="select-date">
          <View className="startTime">
            <Picker
              mode="date"
              onChange={onStartTimeChange}
              value={startDate}
              end="2023-12-31"
            >
              <AtList>
                <AtListItem title={startDate} />
              </AtList>
            </Picker>
          </View>
          <View className="little-text">
            <Image className="little-image" src={icon5}></Image>
          </View>
          <View className="endTime">
            <Picker
              mode="date"
              onChange={onEndTimeChange}
              value={endDate}
              end="2023-12-31"
            >
              <AtList>
                <AtListItem title={endDate} />
              </AtList>
            </Picker>
          </View>
        </View>
        {/* <View className="select-department">
          <Picker
            mode="selector"
            range={department}
            onChange={onChangeDepartment}
          >
            <AtList>
              <AtListItem title="部门选择" extraText={dp} />
            </AtList>
          </Picker>
        </View> */}
        <View className="department-box">
          <Button className="department-button" onClick={openLayout}>
            点击选择部门
          </Button>
        </View>
        <View className="list">
          <AdRecords />
        </View>
      </View>
      <View className={selected ? "detail-unshow" : "detail-show"}>
        <BackRecords />
      </View>
      <AtFloatLayout
        isOpened={layoutShow}
        onClose={closeLayout}
        title="已选清单"
      >
        <AtCheckbox
          options={departments}
          selectedList={selectList}
          onChange={select}
        />
      </AtFloatLayout>
    </View>
  );
}
