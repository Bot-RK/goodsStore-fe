import { produce } from "immer";
import create from "zustand";

interface thinglist {
  data: Array<{
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | undefined | null;
    amount: number;
    name: string;
    picture_url: string;
    measure_word: string;
    under_warning_value: boolean;
    count?: number;
  }>;
  onChange: (i: any, e: any) => void;
  addCount: () => void;
  setCount: (i: number, e: number) => void;
  searchByName: (index: number) => void;
  selectId: number;
  setSelectedId: (ID: number) => void;
  setData: (data: any) => void;
}
const useThingListStore = create<thinglist>((set) => ({
  data: [
    {
      ID: 16,
      CreatedAt: "2022-07-06T15:35:17.772+08:00",
      UpdatedAt: "2022-07-06T16:40:04.924+08:00",
      DeletedAt: null,
      amount: 81,
      name: "物资16",
      picture_url: "https://joeschmoe.io/api/v1/random",
      measure_word: "个",
      under_warning_value: false,
    },
  ],
  onChange: (i, e) =>
    set(
      produce((state) => {
        state.data[i].count = e;
        console.log("count 变化");
      })
    ),
  addCount: () => {
    set(
      produce((state) => {
        state.data.forEach((item) => {
          item["count"] = 0;
        });
      })
    );
  },
  setCount: (i, e) =>
    set(
      produce((state) => {
        state.data[i].count = e;
      })
    ),
  searchByName: (index) =>
    set(
      produce((state) => {
        state.data.unshift(state.data[index]);
        state.data.splice(index + 1, 1);
      })
    ),
  selectId: -1,
  setSelectedId: (ID) =>
    set((state) => ({
      selectId: ID,
    })),
  setData: (data1) =>
    set(() => ({
      data: data1,
    })),
}));

export default useThingListStore;
