import {
  View,
  Image,
  Text,
  Input,
  Button,
  CommonEvent,
  CommonEventFunction,
} from "@tarojs/components";
import Taro from "@tarojs/taro";
import { FC, useState } from "react";
import { AtCurtain, AtInputNumber } from "taro-ui";
import { QRCode } from "taro3-code";
import useThingListStore from "../../store/thingList";
import white1 from "../../asset/images/white.js";
import "./index.scss";
import useLayoutList from "../../store/layoutList";
import usePopupDetail from "../../store/popup";

type popupProps = {
  isOpen: boolean;
  isShowQRcode: boolean;
  thingId: number;
  icon?: string;
  name?: string;
  remainCount?: number;
  isShowCounter: boolean;
  needCount?: number | string;
  onclose: CommonEventFunction<any>;
  getCount?: (value: number, e: CommonEvent<any>) => void;
};

const Popup: FC<popupProps> = ({
  isOpen,
  isShowQRcode,
  thingId,
  isShowCounter,
  needCount,
  onclose,
}) => {
  const thingList = useThingListStore((state) => state.data);
  const index = thingList.findIndex(({ ID }) => ID === thingId);
  const onPush = useLayoutList((state) => state.onPush);
  const [value, setValue] = useState(1);
  const layoutList = useLayoutList((state) => state.data);
  const onClose = usePopupDetail((state) => state.onclose);
  const onChange = useThingListStore((state) => state.onChange);
  const onchangeValue = (e) => {
    setValue(Number(e));
    onChange(index, e);
  };

  const onClick1 = (Id, name, icon, remain_count, count_name) => {
    if (!layoutList.find(({ id }) => id === Id)) {
      onPush(Id, name, icon, remain_count, count_name, value);
    } else {
      Taro.showToast({
        title: "物品已添加",
        icon: "error",
      });
    }
    onClose();
  };

  return (
    <>
      <View className={isShowQRcode ? "show-QRcode" : "show-detail"}>
        <AtCurtain isOpened={isOpen} onClose={onclose}>
          <Image src={white1} className="detail-background"></Image>
          <View className="detail-box">
            <View className="little-box">
              <Image
                src={
                  !thingList[index]
                    ? "https://joeschmoe.io/api/v1/random"
                    : thingList[index].picture_url
                }
                className={isShowCounter ? "detail-icon" : "detail-icon-new"}
              ></Image>
              <View
                className={isShowCounter ? "detail-name" : "detail-name-new"}
              >
                <Text>
                  {!thingList[index] ? "名字名字" : thingList[index].name}
                </Text>
              </View>
              <View
                className={isShowCounter ? "detail-count" : "detail-count-new"}
              >
                <Text className="detail-count-text">剩余</Text>
                <Input
                  disabled
                  className="detail-count-input"
                  value={!thingList[index] ? "0" : `${thingList[index].amount}`}
                ></Input>
                <Text className="detail-count-text">
                  {!thingList[index] ? "个" : thingList[index].measure_word}
                </Text>
              </View>
            </View>
            <View className={isShowCounter ? "counter-new" : "uncounter-new"}>
              <Text className="counter-name-new">需要</Text>
              <AtInputNumber
                className="counter-counter-new"
                min={1}
                max={10000}
                step={1}
                value={value}
                width={120}
                onChange={onchangeValue}
                type="number"
              />
            </View>
            <View
              className={isShowCounter ? "next-1" : "unnext"}
              onClick={() => {
                onClick1(
                  thingId,
                  thingList[index].name,
                  thingList[index].picture_url,
                  thingList[index].amount,
                  thingList[index].measure_word
                );
              }}
            >
              <Button className="next-button-1">加入申领清单</Button>
            </View>
          </View>
        </AtCurtain>
      </View>
      <View className={isShowQRcode ? "QR-code" : "un-show-QR-code"}>
        <AtCurtain onClose={onclose} isOpened={isOpen}>
          <View className="QR-code-style">
            <QRCode
              text="16"
              size={300}
              scale={4}
              errorCorrectLevel="M"
              typeNumber={2}
            />
          </View>
        </AtCurtain>
      </View>
    </>
  );
};
export default Popup;
