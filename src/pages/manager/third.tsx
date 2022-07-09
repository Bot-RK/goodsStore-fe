import { View, Text, Input, Picker, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";
import { AtImagePicker, AtInputNumber, AtList, AtListItem } from "taro-ui";
import "./third.scss";
import api from "../../service/api";

export default function Index() {
  const [count, setCount] = useState(0);
  const [file, setFile] = useState<any>([]);
  const [name, setName] = useState("");
  const [measure_word, setMeasure_word] = useState("");
  const [picture_url, setPicture_url] = useState("");
  const [suffix, setSuffix] = useState("");

  async function final() {
    api
      .get(`/admin/picture/${suffix}`)
      .then((response) => {
        console.log(response.data.data);
        Taro.uploadFile({
          url: "https://goods-storage-system.oss-cn-hangzhou.aliyun…3yTY&Signature=T0%2FsNW1kzU32wMiBJybR%2BiTU0tQ%3D",
          filePath: file[0].url,
          name: response.data.data.key,
          success: (res) => {
            console.log(res);
          },
          fail: (res1) => {
            console.log(res1);
          },
        });
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);
        console.log(11113333);
      });

    Taro.navigateBack({
      delta: 1,
      success: (res) => {
        Taro.showToast({
          title: "成功",
          icon: "success",
          duration: 2000,
        });
      },
    });
  }

  const onChange = (files) => {
    console.log(file);
    console.log(files);
    setFile(files);
    console.log(file);
    console.log(files[0].url);
    setSuffix(files[0].url.substring(files[0].url.length - 3));
  };
  const SetName = (e) => {
    setName(e.detail.value);
  };
  const SetMeasureWord = (e) => {
    setMeasure_word(e.detail.value);
  };
  const countOnChange = (e) => {
    setCount(e);
  };

  return (
    <View className="backGround-b">
      <View className="thingList-text">
        <Text className="thingList-font">新建物品</Text>
      </View>
      <View className="add-input">
        <Text>物品姓名:</Text>
        <Input
          className="input1"
          placeholder="输入名称"
          placeholderClass="input-place"
          onBlur={(e) => SetName(e)}
        ></Input>
      </View>
      <View className="add-input">
        <Text>物品量词:</Text>
        <Input
          className="input2"
          placeholder="点击输入"
          placeholderClass="input-place"
          onBlur={(e) => SetMeasureWord(e)}
        ></Input>
      </View>
      <View className="add-input">
        <Text>物品数量:</Text>
        <View>
          <AtInputNumber
            className="counter"
            min={0}
            max={10}
            step={1}
            value={count}
            width={100}
            onChange={(e) => countOnChange(e)}
            type="number"
          />
        </View>
      </View>
      <View className="add-input">
        <Text>物品图片:</Text>
        <View>
          <AtImagePicker
            className="imagePciker"
            files={file}
            onChange={onChange}
            multiple={false}
            showAddBtn={file.length < 1}
          />
        </View>
      </View>
      <View className="next">
        <Button className="next-button" onClick={final}>
          完成
        </Button>
      </View>
    </View>
  );
}
