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

export { formateTime, easyTime };
