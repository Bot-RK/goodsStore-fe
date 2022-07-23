import { View, Text, Button } from "@tarojs/components";
import Taro, { getStorageSync } from "@tarojs/taro";
import { useState } from "react";
import { AtInputNumber, AtTextarea } from "taro-ui";
import api from "../../service/api";

import "./index.scss";

export default function () {
  const [text, setText] = useState("");
  const [warning_value, setWarning_value] = useState(0);
  const token = getStorageSync("token");
  const onChange = (e) => {
    setText(e);
  };
  const changeCount = (e) => {
    setWarning_value(e);
    console.log(e);
  };
  const setData = () => {
    api
      .post("/admin/broadcast", {
        content: text,
      })
      .then((res) => {
        console.log("公告更新", res);
        Taro.request({
          method: "POST",
          header: {
            "content-type": "application/json",
            Authorization: token,
          },
          url: `https://gss.ncuos.com/admin/value?value=${warning_value}`,
          success: (res2) => {
            console.log("预警值更新", res2);
            Taro.navigateBack({
              delta: 1,
            });
          },
        });
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
        <Text className="thingList-font">设置预警值&nbsp;:</Text>
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
      <View className="next">
        <Button className="next-button" onClick={() => setData()}>
          完成
        </Button>
      </View>
    </View>
  );
}
