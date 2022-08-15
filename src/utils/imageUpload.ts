import Taro from "@tarojs/taro";

const tobeBase64 = async (fileUrl) => {
  const fs = Taro.getFileSystemManager();
  fs.readFile({
    filePath: fileUrl,
    encoding: "base64",
    success: (res) => {
      console.log(res.data);
    },
  });
};

export { tobeBase64 };
