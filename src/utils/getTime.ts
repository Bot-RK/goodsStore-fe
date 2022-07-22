const formateTime = () => {
  let time = new Date();
  let year = time.getFullYear();
  let month = time.getMonth();
  let day = time.getDate();
  let hours = time.getHours();
  let minute = time.getMinutes();
  let checktime = (times) => {
    if (times < 10) {
      return Number("0" + times);
    }
    return times;
  };
  day = checktime(day);
  hours = checktime(hours);
  minute = checktime(minute);
  return year + "/" + month + "/" + day + "/" + hours + ":" + minute;
};

const easyTime = () => {
  let time = new Date();
  let year = time.getFullYear();
  let month = time.getMonth();
  let day = time.getDate();
  return year + "/" + month + "/" + day;
};

const getFromTime = (time) => {
  let Timer = new Date();
  let year = Timer.getFullYear();
  let month = Timer.getMonth() + 1;
  let day = Timer.getDate();
  let checktime = (times) => {
    if (times < 10) {
      return Number("0" + times);
    }
    return times;
  };
  day = checktime(day);
  let nowTime = "" + year + "-" + month + "-" + day;
  let NowTime = Date.parse(nowTime);
  const fromTime = Date.parse(time);
  console.log(nowTime);
  return (NowTime - fromTime) / 86400000 + 1 / 3;
};

export { formateTime, easyTime, getFromTime };
