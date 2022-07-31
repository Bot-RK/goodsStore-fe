import create from "zustand";
import { produce } from "immer";

interface applyListType {
  person_name: string;
  department_id: number;
  requests: Array<{
    good_id: number;
    amount: number;
  }>;
  add: (id: number, Amount: number) => void;
  setPerson_name: (name: string) => void;
  setDepartment_id: (id: number) => void;
  clean: () => void;
}

const useApplyList = create<applyListType>((set) => ({
  person_name: "test",
  department_id: -1,
  requests: [],
  add: (id, Amount) =>
    set(
      produce((state) => {
        state.requests.push({
          good_id: id,
          amount: Amount,
        });
      })
    ),
  setDepartment_id: (id) =>
    set((state) => ({
      department_id: id,
    })),
  clean: () =>
    set((state) => ({
      requests: [],
    })),
  setPerson_name: (name) =>
    set((state) => ({
      person_name: name,
    })),
}));

export default useApplyList;
