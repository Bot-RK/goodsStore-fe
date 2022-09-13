import { View, Text, Progress, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./second.scss";
import FloatLayout from "../../components/floatLayout";
import useLayoutList from "../../store/layoutList";
import useUpdataGoodsStore from "../../store/updateGoods";
import api from "../../service/api";
import useThingListStore from "../../store/thingList";

export default function Apply() {
  const data = useLayoutList((state) => state.data);
  const cleanData = useUpdataGoodsStore((state) => state.clean);
  const cleanData1 = useLayoutList((state) => state.clean);
  const setData = useThingListStore((state) => state.setData);
  const data1: Array<any> = [];
  function to() {
    let isSuccess;
    for (let i = 0; i < data.length; i++) {
      data1.push({
        amount: data[i].count + data[i].remain_count,
        name: data[i].name,
        picture_url: data[i].icon,
        measure_word: data[i].count_name,
      });
    }
    console.log(data1);
    data1.map(async (item) => {
      await api.put("/admin/good/update", item).then((res) => {
        if (res.statusCode === 200) {
          console.log("addRes:", res);
          console.log(data1);
          cleanData();
          cleanData1();
          console.log("add物品成功");
          isSuccess = true;
          console.log("isSuccess:", isSuccess);
        } else {
          console.log(res);
          isSuccess = false;
        }
      });
    });
    setTimeout(() => {
      if (isSuccess) {
        Taro.showToast({
          title: "add success",
          icon: "none",
          duration: 2000,
        });
      }
    }, 200);
    api.get("/user/goods").then((res: any) => {
      setData(res.data.data);
    });
    Taro.navigateBack({
      delta: 2,
    });
  }
  return (
    <View className="backGround-b">
      <View className="progress">
        <Text className="progress-font">步骤2/2</Text>
        <Progress
          className="progress-bar"
          percent={100}
          strokeWidth={3}
          color="#39BB85"
        ></Progress>
        <Text className="progress-text">确认物品</Text>
      </View>
      <View className="things">
        <FloatLayout />
      </View>
      <View className="next">
        <Button className="next-button" onClick={to}>
          完成
        </Button>
      </View>
    </View>
  );
}
