import { View, Text, Image, Navigator } from "@tarojs/components";
import { useState } from "react";
import Taro, { useReachBottom, useReady } from "@tarojs/taro";
import api from "../../service/api";
import Records from "../../components/records";
import "./index.scss";
import useRecordTypeStore from "../../store/records";

export default function Record() {
  const [page, setPage] = useState(1);
  const setRecords = useRecordTypeStore((state) => state.setData);
  const data = useRecordTypeStore((state) => state.data);
  useReady(() => {
    api.get(`/user/records/${page}`).then((response) => {
      console.log(response);
      setPage(page + 1);
      console.log(response);
      setRecords(response.data.data);
    });
  });
  useReachBottom(() => {
    api.get(`/user/records/${page}`).then((response) => {
      console.log(response);
      setPage(page + 1);
      console.log(response);
      setRecords([...data, ...response.data.data]);
    });
  });
  return (
    <View className="backGround-f">
      <View className="thingList-text">
        <Text className="thingList-font">物资清单</Text>
      </View>
      <View>
        <Records />
      </View>
    </View>
  );
}
