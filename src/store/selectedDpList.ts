import { produce } from "immer";
import create from "zustand";

interface selectedDpListType {
  data: Array<{
    person_name: string;
    department_id: number;
    requests: Array<{
      good_id: number;
      amount: number;
    }>;
  }>;
  setData: (data1: any) => void;
  addData: (id: any, detail: any) => void;
}
const useSelectedDpList = create<selectedDpListType>((set) => ({
  data: [],
  setData: (data1) =>
    set(() => ({
      data: data1,
    })),
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
export default useSelectedDpList;
