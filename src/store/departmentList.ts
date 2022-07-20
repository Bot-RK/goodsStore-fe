import { produce } from "immer";
import create from "zustand";

interface departmentListType {
  data: Array<{
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    name: string;
    count?: number | undefined;
  }>;
  addCount: () => void;
  setCount: (i: number, e: number) => void;
  setData: (data1: any) => void;
}

const useDepartmentList = create<departmentListType>((set) => ({
  data: [
    {
      ID: 1,
      CreatedAt: "ss",
      UpdatedAt: "ss",
      DeletedAt: "aa",
      name: "咳咳咳",
    },
    {
      ID: 2,
      CreatedAt: "ss",
      UpdatedAt: "ss",
      DeletedAt: "aa",
      name: "咳咳咳1",
    },
    {
      ID: 3,
      CreatedAt: "ss",
      UpdatedAt: "ss",
      DeletedAt: "aa",
      name: "咳咳咳2",
    },
  ],
  addCount: () => {
    set(
      produce((state) => {
        state.data.forEach((item) => {
          item["count"] = 1;
        });
      })
    );
  },
  setData: (data1) =>
    set(() => ({
      data: data1,
    })),
  setCount: (i, e) =>
    set(
      produce((state) => {
        state.data[i].count = e;
      })
    ),
}));

export default useDepartmentList;
