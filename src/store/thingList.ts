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
}
const useThingListStore = create<thinglist>((set) => ({
  data: [
    {
      ID: 13,
      CreatedAt: "2022-07-06T15:35:17.772+08:00",
      UpdatedAt: "2022-07-06T16:40:04.924+08:00",
      DeletedAt: null,
      amount: 39,
      name: "物资8",
      picture_url: "test.com",
      measure_word: "个",
      under_warning_value: false,
    },
    {
      ID: 3,
      CreatedAt: "2022-07-06T10:23:26.07+08:00",
      UpdatedAt: "2022-07-06T16:40:04.92+08:00",
      DeletedAt: null,
      amount: 950,
      name: "物资5",
      picture_url: "test.com",
      measure_word: "个",
      under_warning_value: false,
    },
    {
      ID: 2,
      CreatedAt: "2022-07-06T10:22:57.219+08:00",
      UpdatedAt: "2022-07-06T16:40:04.918+08:00",
      DeletedAt: null,
      amount: 952,
      name: "物资4",
      picture_url: "test.com",
      measure_word: "个",
      under_warning_value: false,
    },
    {
      ID: 14,
      CreatedAt: "2022-07-06T15:35:17.772+08:00",
      UpdatedAt: "2022-07-06T16:40:04.924+08:00",
      DeletedAt: null,
      amount: 39,
      name: "物资9",
      picture_url: "test.com",
      measure_word: "个",
      under_warning_value: false,
    },
    {
      ID: 15,
      CreatedAt: "2022-07-06T15:35:17.772+08:00",
      UpdatedAt: "2022-07-06T16:40:04.924+08:00",
      DeletedAt: null,
      amount: 39,
      name: "物资10",
      picture_url: "test.com",
      measure_word: "个",
      under_warning_value: false,
    },
    {
      ID: 16,
      CreatedAt: "2022-07-06T15:35:17.772+08:00",
      UpdatedAt: "2022-07-06T16:40:04.924+08:00",
      DeletedAt: null,
      amount: 39,
      name: "物资16",
      picture_url: "test.com",
      measure_word: "个",
      under_warning_value: false,
    },
    {
      ID: 17,
      CreatedAt: "2022-07-06T15:35:17.772+08:00",
      UpdatedAt: "2022-07-06T16:40:04.924+08:00",
      DeletedAt: null,
      amount: 39,
      name: "物资17",
      picture_url: "test.com",
      measure_word: "个",
      under_warning_value: false,
    },
    {
      ID: 18,
      CreatedAt: "2022-07-06T15:35:17.772+08:00",
      UpdatedAt: "2022-07-06T16:40:04.924+08:00",
      DeletedAt: null,
      amount: 39,
      name: "物资18",
      picture_url: "test.com",
      measure_word: "个",
      under_warning_value: false,
    },
  ],
  onChange: (i, e) =>
    set(
      produce((state) => {
        state.data[i].count = e;
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
}));

export default useThingListStore;
