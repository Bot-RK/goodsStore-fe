import { View, Text, Progress, Button, Input } from "@tarojs/components";
import Taro, { useReady } from "@tarojs/taro";
import { useState } from "react";
import { AtCheckbox, AtFloatLayout } from "taro-ui";
import useJudge from "../../store/judgeIsMultiple";
import useApplyList from "../../store/applyList";
import "./third.scss";
import useDepartmentList from "../../store/departmentList";
import api from "../../service/api";
import useSelectedId from "../../store/selected";

export default function Third() {
  const [layoutShow, setLayoutShow] = useState(false);
  const [selectList, setSelected] = useState([]);
  const [isMultiple, setIsMultiple] = useState(false);
  const [text, setText] = useState<boolean>(false);
  const setSingleDepartment = useApplyList((state) => state.setDepartment_id);
  const setName = useApplyList((state) => state.setPerson_name);
  const applyList = useApplyList((state) => state);
  const setIsTrue = useJudge((state) => state.setIsTrue);
  const setIsFalse = useJudge((state) => state.setIsFlase);
  const setData = useDepartmentList((state) => state.setData);
  const dpData = useDepartmentList((state) => state.data);
  const setShowData = useSelectedId((state) => state.setData);
  const departments: any = dpData.map(function (item) {
    let obj = {};
    obj["value"] = item.ID;
    obj["label"] = item.name;
    return obj;
  });
  useReady(() => {
    api.get("/user/departments").then((res: any) => {
      setData(res.data.data);
    });
  });
  const openLayout = () => {
    setLayoutShow(!layoutShow);
  };
  const closeLayout = () => {
    setLayoutShow(!layoutShow);

    if (selectList.length > 1) {
      setIsMultiple(true);
    } else {
      setIsMultiple(false);
    }
    if (selectList.length > 0) {
      setText(true);
    }
  };
  const select = (e: any) => {
    setSelected(e);
    setShowData(e);
    if (e.length == 1) {
      setSingleDepartment(e[0]);
      console.log("list", applyList);
      console.log("e" + e[0]);
    }
  };
  function to() {
    setIsFalse();
    Taro.navigateTo({
      url: "four",
    });
  }
  const to2 = () => {
    setIsTrue();
    Taro.navigateTo({
      url: "multiple",
    });
  };
  const onBlur = (name) => {
    setName(name);
  };

  return (
    <View className="backGround-b">
      <View className="progress">
        <Text className="progress-font">步骤2/2</Text>
        <Progress
          className="progress-bar"
          percent={100}
          strokeWidth={3}
          color="#0B75FB"
        ></Progress>
        <Text className="progress-text">申领信息</Text>
      </View>
      <View className="add-input">
        <Text>申领人:</Text>
        <Input
          className="input1"
          placeholder="输入名称"
          placeholderClass="input-place"
          onBlur={(e) => onBlur(e.detail.value)}
        ></Input>
      </View>
      <View className="add-input">
        <Text>申领部门:</Text>
        <View className="department-box">
          <Button className="department-button" onClick={openLayout}>
            {text ? "我的部门" : "点击选择"}
          </Button>
        </View>
      </View>
      <View className={isMultiple ? "unnext" : "next"}>
        <Button className="next-button" onClick={to}>
          预览申领详情
        </Button>
      </View>
      <View className={isMultiple ? "next-more" : "unnext-more"}>
        <Button className="next-button" onClick={to2}>
          选择数量
        </Button>
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
