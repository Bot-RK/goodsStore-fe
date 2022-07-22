import { produce } from "immer";
import create from "zustand";

interface updataGoodsType {
  data: Array<{
    amount: number;
    name: string;
    picture_url: string;
    measure_word: string;
  }>;
  pushData: (
    amount1: number,
    name1: string,
    picture_url1: string,
    measure_word1: string
  ) => void;
  clean: () => void;
}

const useUpdataGoodsStore = create<updataGoodsType>((set) => ({
  data: [],
  pushData: (amount1, name1, picture_url1, measure_word1) =>
    set(
      produce((state) => {
        state.data.push({
          amount: amount1,
          name: name1,
          picture_url: picture_url1,
          measure_word: measure_word1,
        });
        console.log(amount1, name1, picture_url1, measure_word1);
        console.log(state);
      })
    ),
  clean: () =>
    set((state) => ({
      data: [],
    })),
}));

export default useUpdataGoodsStore;
