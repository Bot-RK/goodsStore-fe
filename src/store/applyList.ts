import create from "zustand";
import { produce } from "immer";

interface applyListType {
  data: Array<{
    good_id: number;
    amount: number;
  }>;
  add: (id: number, Amount: number) => void;
}

const applyList = create<applyListType>((set) => ({
  data: [],
  add: (id, Amount) =>
    set(
      produce((state) => {
        state.data.push({
          good_id: id,
          amount: Amount,
        });
      })
    ),
}));
