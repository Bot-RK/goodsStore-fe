import create from "zustand";

interface recordsType {
  data: Array<{
    id: number;
    created_at: string;
    user_id: number;
    person_name: string;
    department_id: number;
    total_amount: number;
    requests: Array<{
      id: number;
      created_at: string;
      record_id: number;
      good_id: number;
      name: string;
      amount: number;
      picture_url: string;
      measure_word: string;
    }>;
  }>;
  setData: (data1: any) => void;
}

const useRecordTypeStore = create<recordsType>((set) => ({
  data: [
    {
      id: 15,
      created_at: "2022-07-06T16:40:04.915+08:00",
      user_id: 123,
      person_name: "批量申请",
      department_id: 2,
      total_amount: 35,
      requests: [
        {
          id: 35,
          created_at: "2022-07-06T16:40:04.917+08:00",
          record_id: 15,
          good_id: 2,
          name: "物资4",
          amount: 10,
          picture_url: "test.com",
          measure_word: "个",
        },
        {
          id: 36,
          created_at: "2022-07-06T16:40:04.919+08:00",
          record_id: 15,
          good_id: 3,
          name: "物资5",
          amount: 10,
          picture_url: "test.com",
          measure_word: "个",
        },
        {
          id: 37,
          created_at: "2022-07-06T16:40:04.921+08:00",
          record_id: 15,
          good_id: 4,
          name: "物资6",
          amount: 10,
          picture_url: "test.com",
          measure_word: "个",
        },
        {
          id: 38,
          created_at: "2022-07-06T16:40:04.923+08:00",
          record_id: 15,
          good_id: 13,
          name: "物资8",
          amount: 5,
          picture_url: "test.com",
          measure_word: "个",
        },
      ],
    },
    {
      id: 14,
      created_at: "2022-07-06T16:40:04.892+08:00",
      user_id: 123,
      person_name: "批量申请",
      department_id: 1,
      total_amount: 35,
      requests: [
        {
          id: 31,
          created_at: "2022-07-06T16:40:04.908+08:00",
          record_id: 14,
          good_id: 2,
          name: "物资4",
          amount: 10,
          picture_url: "test.com",
          measure_word: "个",
        },
        {
          id: 32,
          created_at: "2022-07-06T16:40:04.91+08:00",
          record_id: 14,
          good_id: 3,
          name: "物资5",
          amount: 10,
          picture_url: "test.com",
          measure_word: "个",
        },
        {
          id: 33,
          created_at: "2022-07-06T16:40:04.912+08:00",
          record_id: 14,
          good_id: 4,
          name: "物资6",
          amount: 10,
          picture_url: "test.com",
          measure_word: "个",
        },
        {
          id: 34,
          created_at: "2022-07-06T16:40:04.914+08:00",
          record_id: 14,
          good_id: 13,
          name: "物资8",
          amount: 5,
          picture_url: "test.com",
          measure_word: "个",
        },
      ],
    },
  ],
  setData: (data1) =>
    set(() => ({
      data: data1,
    })),
}));

export default useRecordTypeStore;
