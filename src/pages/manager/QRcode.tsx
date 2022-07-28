import { Canvas, Icon, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { QRCode } from "taro3-code";
import drawQrcode from "weapp-qrcode-canvas-2d";
import "./QRcode.scss";

export default function QRcode() {
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
          text: "55",
        });
        ctx.fillStyle = "#000000";
        ctx.font = "48px  serif";
        ctx.fillText("物品:剪刀", canvas.width / 3, canvas.height - 30);

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
            console.log("二维码临时路径：", res1.tempFilePath);
            Taro.saveImageToPhotosAlbum({
              filePath: res1.tempFilePath,
              success: (res2) => {
                Taro.showToast({ title: "成功", icon: "none" });
              },
            });
          },
          fail(res1) {
            console.error(res1);
          },
        });
      });
  });
  return (
    <View>
      <View>1111111111111111</View>
      <Canvas
        type="2d"
        id="myQrcode"
        style="width: 320px; height: 320px;"
      ></Canvas>
    </View>
  );
}
