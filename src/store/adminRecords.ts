import create from "zustand";

interface adminRecords {
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
  setData: (data: any) => void;
}

const useAdminRecords = create<adminRecords>((set) => ({
  data: [
    {
      id: 10,
      created_at: "2022-07-04T15:54:58.816+08:00",
      user_id: 123,
      person_name: "test one",
      department_id: 1,
      total_amount: 80,
      requests: [
        {
          id: 16,
          created_at: "2022-07-06T15:54:58.83+08:00",
          record_id: 10,
          good_id: 2,
          name: "物资4",
          amount: 10,
          picture_url: "test.com",
          measure_word: "个",
        },
        {
          id: 17,
          created_at: "2022-07-06T15:54:58.832+08:00",
          record_id: 10,
          good_id: 3,
          name: "物资5",
          amount: 10,
          picture_url: "test.com",
          measure_word: "个",
        },
        {
          id: 18,
          created_at: "2022-07-06T15:54:58.833+08:00",
          record_id: 10,
          good_id: 4,
          name: "物资6",
          amount: 10,
          picture_url: "test.com",
          measure_word: "个",
        },
        {
          id: 19,
          created_at: "2022-07-06T15:54:58.835+08:00",
          record_id: 10,
          good_id: 13,
          name: "物资8",
          amount: 50,
          picture_url: "test.com",
          measure_word: "个",
        },
      ],
    },
    {
      id: 5,
      created_at: "2022-07-01T15:21:26.472+08:00",
      user_id: 1,
      person_name: "test 1",
      department_id: 1,
      total_amount: 12,
      requests: [
        {
          id: 1,
          created_at: "2022-07-06T15:21:26.479+08:00",
          record_id: 5,
          good_id: 4,
          name: "物资6",
          amount: 3,
          picture_url: "test.com",
          measure_word: "个",
        },
        {
          id: 2,
          created_at: "2022-07-06T15:21:26.482+08:00",
          record_id: 5,
          good_id: 2,
          name: "物资4",
          amount: 4,
          picture_url: "test.com",
          measure_word: "个",
        },
        {
          id: 3,
          created_at: "2022-07-06T15:21:26.484+08:00",
          record_id: 5,
          good_id: 3,
          name: "物资5",
          amount: 5,
          picture_url: "test.com",
          measure_word: "个",
        },
      ],
    },
    {
      id: 13,
      created_at: "2022-07-05T16:02:45.164+08:00",
      user_id: 123,
      person_name: "批量申请",
      department_id: 2,
      total_amount: 35,
      requests: [
        {
          id: 27,
          created_at: "2022-07-06T16:02:45.165+08:00",
          record_id: 13,
          good_id: 2,
          name: "物资4",
          amount: 10,
          picture_url: "test.com",
          measure_word: "个",
        },
        {
          id: 28,
          created_at: "2022-07-06T16:02:45.167+08:00",
          record_id: 13,
          good_id: 3,
          name: "物资5",
          amount: 10,
          picture_url: "test.com",
          measure_word: "个",
        },
        {
          id: 29,
          created_at: "2022-07-06T16:02:45.169+08:00",
          record_id: 13,
          good_id: 4,
          name: "物资6",
          amount: 10,
          picture_url: "test.com",
          measure_word: "个",
        },
        {
          id: 30,
          created_at: "2022-07-06T16:02:45.171+08:00",
          record_id: 13,
          good_id: 13,
          name: "物资8",
          amount: 5,
          picture_url: "test.com",
          measure_word: "个",
        },
      ],
    },
    {
      id: 9,
      created_at: "2022-07-03T15:53:18.979+08:00",
      user_id: 123,
      person_name: "test one",
      department_id: 2,
      total_amount: 30,
      requests: [
        {
          id: 13,
          created_at: "2022-07-06T15:53:18.998+08:00",
          record_id: 9,
          good_id: 2,
          name: "物资4",
          amount: 10,
          picture_url: "test.com",
          measure_word: "个",
        },
        {
          id: 14,
          created_at: "2022-07-06T15:53:19+08:00",
          record_id: 9,
          good_id: 3,
          name: "物资5",
          amount: 10,
          picture_url: "test.com",
          measure_word: "个",
        },
        {
          id: 15,
          created_at: "2022-07-06T15:53:19.002+08:00",
          record_id: 9,
          good_id: 4,
          name: "物资6",
          amount: 10,
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

export default useAdminRecords;
