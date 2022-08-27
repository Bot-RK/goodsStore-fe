import { Canvas, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import drawQrcode from "weapp-qrcode-canvas-2d";
import "./QRcode.scss";
import useQrcodeDetail from "../../store/Qrcode";

export default function QRcode() {
  const ID = useQrcodeDetail((state) => state.id);
  const name = useQrcodeDetail((state) => state.name);

  Taro.useReady(() => {
    const query = Taro.createSelectorQuery();
    query
      .select("#myQrcode")
      .fields({ node: true, size: true })
      .exec((res) => {
        console.log(res);
        const canvas = res[0].node;
        const ctx = canvas.getContext("2d");
        const dpr = Taro.getSystemInfoSync().pixelRatio;
        canvas.width = res[0].width * dpr;
        canvas.height = res[0].height * dpr;
        ctx.scale(dpr, dpr);

        drawQrcode({
          canvas: canvas,
          canvasId: "myQrcode",
          width: 200,
          padding: 90,
          background: "#ffffff",
          paddingColor: "#ffffff",
          foreground: "#000000",
          text: `${ID}`,
        });
        ctx.fillStyle = "#000000";
        ctx.font = "48px  serif";
        ctx.fillText(`${name}`, canvas.width / 3 + 50, canvas.height - 30);

        Taro.canvasToTempFilePath({
          canvasId: "myQrcode",
          canvas: canvas,
          x: 0,
          y: 0,
          width: canvas.width,
          height: canvas.height,
          destWidth: 260,
          destHeight: 260,
          success(res1) {
            Taro.saveImageToPhotosAlbum({
              filePath: res1.tempFilePath,
              success: () => {
                Taro.navigateBack({
                  delta: 3,
                  success: () => {
                    Taro.showToast({
                      title: "成功保存图片",
                      icon: "none",
                      duration: 3000,
                    });
                  },
                });
              },
            });
          },
        });
      });
  });
  return (
    <View>
      <Canvas
        type="2d"
        id="myQrcode"
        style="width: 320px; height: 320px;"
      ></Canvas>
    </View>
  );
}
