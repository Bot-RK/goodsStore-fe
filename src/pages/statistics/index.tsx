import {
  View,
  Text,
  Button,
  Image,
  Input,
  Navigator,
  Picker,
} from "@tarojs/components";
import { useState } from "react";
import { AtList, AtListItem } from "taro-ui";
import "./index.scss";
import icon4 from "../../asset/images/Vector4.png";
import icon6 from "../../asset/images/Vector11.png";
import icon5 from "../../asset/images/Vector12.png";

export default function Index() {
  const [selected, setSelected] = useState(true);
  const [startDate, setStartDate] = useState("2022-07-02");
  const [endDate, setEndDate] = useState("2022-07-12");
  const [dp, setDp] = useState("");
  const department: string[] = ["A", "B", "C", "d"];
  function change() {
    setSelected(!selected);
  }
  const onChangeDepartment = (e) => {
    console.log(e);
    setDp(department[e.detail.value]);
  };

  const onStartTimeChange = (e) => {
    setStartDate(e.detail.value);
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
              value="2022-07-02"
              start="2022-07-02"
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
              value="2022-07-12"
              end="2023-12-31"
            >
              <AtList>
                <AtListItem title={endDate} />
              </AtList>
            </Picker>
          </View>
        </View>
        <View className="select-department">
          <Picker
            mode="selector"
            range={department}
            onChange={onChangeDepartment}
          >
            <AtList>
              <AtListItem title="部门选择" extraText={dp} />
            </AtList>
          </Picker>
        </View>
        <View className="things">
          <View className="things-item">
            <Image
              src="https://joeschmoe.io/api/v1/random"
              className="things-icon"
            ></Image>
            <View className="things-texts">
              <Text className="things-title">物品名字</Text>
            </View>
            <View className="things-count">
              <View className="counts">
                <Input className="count-input" disabled value="20"></Input>
              </View>
              <Text className="things-count-text">本</Text>
            </View>
          </View>
        </View>
      </View>
      <View className={selected ? "detail-unshow" : "detail-show"}>
        <View className="operation">
          <Navigator className="pathTo" url="/pages/statistics/record"></Navigator>
          <Image className="icon" src={icon6}></Image>
          <Text className="icon-font">物资清单</Text>
          <Image className="arrow" src={icon4}></Image>
        </View>
        <View className="operation">
          <Navigator className="pathTo" url="/pages/statistics/record"></Navigator>
          <Image className="icon" src={icon6}></Image>
          <Text className="icon-font">物资清单</Text>
          <Image className="arrow" src={icon4}></Image>
        </View>
      </View>
    </View>
  );
}
