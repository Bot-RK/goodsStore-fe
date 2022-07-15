import { produce } from "immer";
import create from "zustand";

interface layoutListType {
  data: Array<{
    id: number;
    name: string;
    icon: string;
    remain_count: number;
    count: number;
    count_name: string;
  }>;
  onChange: (i: any, e: any) => void;
  onPush: (
    id: any,
    name: any,
    icon: any,
    remain1_count: any,
    count: any
  ) => void;
  setCount: (i: number, e: number) => void;
  onDelete: (index: number) => void;
  clean: () => void;
}
const useLayoutList = create<layoutListType>((set) => ({
  data: [],
  onChange: (i, e) =>
    set(
      produce((state) => {
        state.data[i].count = e;
      })
    ),
  onPush: (id1, name1, icon1, remain1_count1, count_name1) =>
    set(
      produce((state) => {
        state.data.push({
          id: id1,
          name: name1,
          icon: icon1,
          remain_count: remain1_count1,
          count: 1,
          count_name: count_name1,
        });
      })
    ),
  onDelete: (index) =>
    set(
      produce((state) => {
        state.data.splice(index, 1);
      })
    ),
  setCount: (i, e) =>
    set(
      produce((state) => {
        state.data[i].count = e;
        console.log("debug");
      })
    ),
  clean: () =>
    set((state) => ({
      data: [],
    })),
}));

export default useLayoutList;
