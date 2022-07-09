import { View, Text, Input, Picker, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";
import { AtList, AtListItem } from "taro-ui";
import "./addNumber.scss";

export default function AddNumber() {
  const [au, setAu] = useState("");
  const Authors: string[] = ["成员", "管理员"];
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [is_admin, setIsAdmin] = useState(false);
  const onChangeAU = (e) => {
    console.log(e);
    setAu(Authors[e.detail.value]);
    setIsAdmin(e.detail.value == "成员" ? false : true);
  };
  function final() {
    Taro.navigateTo({
      url: "index",
      success: (res) => {
        Taro.showToast({
          title: "成功",
          icon: "success",
          duration: 2000,
        });
      },
    });
  }
  const onAddName = (e) => {
    setName(e.detail.value);
  };
  const onAddNumber = (e) => {
    setNumber(e.detail.value);
  };
  return (
    <View className="backGround-b">
      <View className="thingList-text">
        <Text className="thingList-font">添加成员</Text>
      </View>
      <View className="add-input">
        <Text>姓名:</Text>
        <Input
          className="input1"
          placeholder="输入名称"
          placeholderClass="input-place"
          onBlur={(e) => onAddName(e)}
        ></Input>
      </View>
      <View className="add-input">
        <Text>微信绑定电话号码:</Text>
        <Input
          className="input2"
          placeholder="点击输入"
          placeholderClass="input-place"
          onBlur={(e) => onAddNumber(e)}
        ></Input>
      </View>
      <View className="select-authority">
        <Text>权限:</Text>
        <Picker
          mode="selector"
          range={Authors}
          onChange={onChangeAU}
          className="pick"
        >
          <AtList>
            <AtListItem title="点击选择" extraText={au} />
          </AtList>
        </Picker>
      </View>
      <View className="next">
        <Button className="next-button" onClick={final}>
          完成
        </Button>
      </View>
    </View>
  );
}
