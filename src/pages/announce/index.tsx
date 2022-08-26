import { View, Text, Button } from "@tarojs/components";
import Taro, { getStorageSync } from "@tarojs/taro";
import { useEffect, useState } from "react";
import { AtInputNumber, AtTextarea } from "taro-ui";
import api from "../../service/api";

import "./index.scss";

export default function () {
  const [text, setText] = useState("");
  const [warning_value, setWarning_value] = useState(0);
  const [oldWarningValue, setOldWarningValue] = useState(0);
  const token = getStorageSync("token");
  const onChange = (e) => {
    setText(e);
  };
  const changeCount = (e) => {
    setWarning_value(e);
  };
  const getOldWarningValue = () => {
    api.get("/admin/value").then((res) => {
      setOldWarningValue(res.data.data);
    });
  };
  useEffect(() => {
    getOldWarningValue();
  }, []);

  const setData = async () => {
    let detail = "";
    if (text != "") {
      await api
        .post("/admin/broadcast", {
          content: text,
        })
        .then((res) => {
          detail += "公告√";
        })
        .catch(() => {
          detail = "错误";
        });
    }
    if (warning_value != 0) {
      await Taro.request({
        method: "POST",
        header: {
          "content-type": "application/json",
          Authorization: token,
        },
        url: `https://gss.ncuos.com/admin/value?value=${warning_value}`,
        success: () => {
          detail += " 预警值√";
        },
      });
    }

    Taro.navigateBack({
      delta: 1,
      success: () => {
        Taro.showToast({
          title: `${detail}`,
          icon: "none",
          duration: 2000,
        });
      },
    });
  };

  return (
    <View className="backGround-b">
      <View className="thingList-text">
        <Text className="thingList-font">编辑公告</Text>
        <AtTextarea
          className="input-text"
          onChange={onChange}
          maxLength={200}
          placeholder="编辑新的公告"
          value={text}
          height={300}
        />
      </View>
      <View className="thingList-text">
        <Text className="thingList-font">更新预警值&nbsp;:</Text>
        <AtInputNumber
          className="input-number"
          min={0}
          max={100}
          step={1}
          value={warning_value}
          onChange={changeCount}
          type="number"
        />
      </View>
      <Text className="oldWarningValue">当前预警值{oldWarningValue}</Text>
      <View className="next">
        <Button className="next-button" onClick={() => setData()}>
          更新
        </Button>
      </View>
    </View>
  );
}
