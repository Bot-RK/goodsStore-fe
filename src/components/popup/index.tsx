import {
  View,
  Image,
  Text,
  Input,
  Button,
  CommonEvent,
  CommonEventFunction,
} from "@tarojs/components";
import { FC, memo } from "react";
import { AtCurtain, AtInputNumber } from "taro-ui";
import { Barcode, QRCode } from "taro3-code";
import white1 from "../../asset/images/纯白.png";
import "./index.scss";

type popupProps = {
  isOpen: boolean;
  isShowQRcode: boolean;
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
  icon,
  name,
  remainCount,
  isShowCounter,
  needCount,
  onclose,
  getCount,
}) => {
  return (
    <>
      <View className={isShowQRcode ? "show-QRcode" : "show-detail"}>
        <AtCurtain isOpened={isOpen} onClose={onclose}>
          <Image src={white1} className="detail-background"></Image>
          <View className="detail-box">
            <View className="little-box">
              <Image
                src={icon!}
                className={isShowCounter ? "detail-icon" : "detail-icon-new"}
              ></Image>
              <View
                className={isShowCounter ? "detail-name" : "detail-name-new"}
              >
                <Text>{name}</Text>
              </View>
              <View
                className={isShowCounter ? "detail-count" : "detail-count-new"}
              >
                <Text className="detail-count-text">剩余</Text>
                <Input
                  disabled
                  className="detail-count-input"
                  value={`${remainCount}`}
                ></Input>
                <Text className="detail-count-text">本</Text>
              </View>
            </View>
            <View className={isShowCounter ? "counter-new" : "uncounter-new"}>
              <Text className="counter-name-new">需要</Text>
              <AtInputNumber
                className="counter-counter-new"
                min={0}
                max={10}
                step={1}
                value={needCount!}
                width={120}
                onChange={getCount!}
                type="number"
              />
            </View>
            <View className={isShowCounter ? "next-1" : "unnext"}>
              <Button className="next-button-1">加入申领清单</Button>
            </View>
          </View>
        </AtCurtain>
      </View>
      <View className={isShowQRcode ? "QR-code" : "un-show-QR-code"}>
        <AtCurtain onClose={onclose} isOpened={isOpen}>
          <View className="QR-code-style">
            <QRCode
              text="www.baidu.com"
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