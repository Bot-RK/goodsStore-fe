import Taro, { getStorageSync } from "@tarojs/taro";

export default {
  baseOptions(params, method = "get") {
    let { url, data } = params;
    let contentType = "application/json";
    contentType = params.contentType || contentType;
    const token = getStorageSync("token");
    type OptionType = {
      url: string;
      data?: object | string;
      method?: any;
      header: object;
      success: any;
      // error:any,
    };
    data = {
      ...data,
    };
    const option: OptionType = {
      url: url.indexOf("https") !== -1 ? url : "https://gss.ncuos.com" + url,
      data: data,
      method: method,
      header: {
        "content-type": contentType,
        Authorization: token,
      },
      success(res: any) {
        if (res.statusCode === 200) {
          return res.data;
        } else {
          Taro.showToast({
            title: "请求失败",
            icon: "none",
            duration: 2000,
          });
        }
      },
    };
    return Taro.request(option);
  },
  get(url: string, data?: object) {
    let option = { url, data };
    console.log("token=>", getStorageSync("token"));
    return this.baseOptions(option);
  },
  post(url: string, data?: object) {
    let option = { url, data };
    return this.baseOptions(option, "POST");
  },
  put(url: string, data?: object) {
    let option = { url, data };
    return this.baseOptions(option, "PUT");
  },
  delete(url: string, data?: object) {
    let option = { url, data };
    return this.baseOptions(option, "DELETE");
  },
};
