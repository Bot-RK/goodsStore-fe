export default function getParams(url: string, name: string) {
  let arrobj = url.split("?");
  if (arrobj.length > 1) {
    let param = arrobj[1].split("&");
    let arr: any;
    for (let i = 0; i < param.length; i++) {
      arr = param[i].split("=");
      if (arr != null && arr[0] == name) {
        return arr[1];
      }
    }
    return "";
  } else {
    return "";
  }
}
