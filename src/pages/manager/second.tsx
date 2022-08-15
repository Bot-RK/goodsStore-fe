import { View, Text, Progress, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./second.scss";
import FloatLayout from "../../components/floatLayout";
import useLayoutList from "../../store/layoutList";
import useUpdataGoodsStore from "../../store/updateGoods";
import api from "../../service/api";

export default function Apply() {
  // const empty=useApplyList((state)=>state.)
  const data = useLayoutList((state) => state.data);
  const cleanData = useUpdataGoodsStore((state) => state.clean);
  const cleanData1 = useLayoutList((state) => state.clean);
  const data1: Array<any> = [];
  function to() {
    for (let i = 0; i < data.length; i++) {
      data1.push({
        amount: data[i].count + data[i].remain_count,
        name: data[i].name,
        picture_url: data[i].icon,
        measure_word: data[i].count_name,
      });
    }
    console.log(data1);

    data1.map((item) => {
      api.put("/admin/good/update", item).then((res) => {
        if (res.statusCode === 200) {
          console.log("addRes:", res);
          console.log(data1);
          cleanData();
          cleanData1();
          console.log("add物品成功");
        } else {
          console.log(res);
        }
      });
    });

    Taro.navigateBack({
      delta: 2,
      success: () => {
        Taro.showToast({
          title: "成功",
          icon: "success",
          duration: 2000,
        });
      },
    });
    Taro.login({
      success: (res) => {
        console.log(res.code);
      },
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
