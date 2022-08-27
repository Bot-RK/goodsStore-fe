import { View, Text, Input, Button } from "@tarojs/components";
import Taro, { getStorageSync } from "@tarojs/taro";
import { useState } from "react";
import { AtImagePicker, AtInputNumber } from "taro-ui";
import "./third.scss";
import api from "../../service/api";
import useQrcodeDetail from "../../store/Qrcode";

export default function Index() {
  const [count, setCount] = useState(1);
  const [file, setFile] = useState<any>([]);
  const [name, setName] = useState("");
  const [measure_word, setMeasure_word] = useState("");
  const [picture_url, setPicture_url] = useState("");
  const setQrName = useQrcodeDetail((state) => state.setName);
  const setQrId = useQrcodeDetail((state) => state.setId);
  const size = 1024 * 1024 * 10;

  async function final() {
    api
      .put("/admin/good/add", {
        amount: count,
        name: name,
        picture_url: picture_url,
        measure_word: measure_word,
      })
      .then((res) => {
        if (res.statusCode == 200) {
          setQrId(res.data.data.ID);
          setQrName(res.data.data.name);
          Taro.navigateBack({
            delta: 1,
            success: () => {
              Taro.showToast({
                title: "add success",
                icon: "success",
                duration: 2000,
              });
              Taro.navigateTo({
                url: "QRcode",
                success: () => {},
              });
            },
          });
        } else {
          Taro.showToast({
            title: `${res.data.message}`,
            icon: "none",
            duration: 2000,
          });
        }
      })
      .catch((err) => {
        Taro.showToast({
          title: `${err}`,
          icon: "none",
          duration: 2000,
        });
      });
  }

  const onChange = async (files: any) => {
    if (files[0].file.size <= size) {
      setFile(files);
      api
        .get(
          `/admin/picture/${files[0].url.substring(files[0].url.length - 3)}`
        )
        .then((response) => {
          setPicture_url(response.data.data.key);
          Taro.uploadFile({
            url: "https://goods-storage-system.oss-cn-hangzhou.aliyuncs.com",
            filePath: files[0].url,
            name: "file",
            header: {
              "content-type": "multipart/form-data",
            },
            formData: {
              key: response.data.data.filename,
              OSSAccessKeyId: response.data.data.access_id,
              signature: response.data.data.signature,
              policy: response.data.data.policy,
              success_action_status: "200",
            },
            success: () => {},
            fail: (err) => {
              Taro.showToast({
                title: `${err}`,
                icon: "none",
                duration: 2000,
              });
            },
          });
        });
    } else {
      Taro.showToast({
        title: "错误,图片过大",
        icon: "error",
        duration: 2000,
      });
    }
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
            min={1}
            max={10000}
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
