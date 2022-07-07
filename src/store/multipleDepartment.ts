import { produce } from "immer";
import create from "zustand";

interface multipleDepartmentType {
  data: Array<{
    person_name: string;
    department_id: number;
    requests: Array<{
      good_id: number;
      amount: number;
    }>;
  }>;
  addData: (id: any, detail: any) => void;
}

const useMultipleDepartmentType = create<multipleDepartmentType>((set) => ({
  data: [
    {
      person_name: "批量申请",
      department_id: 1,
      requests: [
        {
          good_id: 2,
          amount: 10,
        },
        {
          good_id: 3,
          amount: 10,
        },
        {
          good_id: 4,
          amount: 10,
        },
        {
          good_id: 13,
          amount: 5,
        },
      ],
    },
    {
      person_name: "批量申请",
      department_id: 2,
      requests: [
        {
          good_id: 2,
          amount: 10,
        },
        {
          good_id: 3,
          amount: 10,
        },
        {
          good_id: 4,
          amount: 10,
        },
        {
          good_id: 13,
          amount: 5,
        },
      ],
    },
  ],
  addData: (id, detail) =>
    set(
      produce((state) => {
        state.data.push({
          person_name: "批量申请",
          department_id: id,
          requests: detail,
        });
      })
    ),
}));

export default useMultipleDepartmentType;
