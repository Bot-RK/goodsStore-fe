import create from "zustand";

interface selectIdType {
  data: [];
  setData: (data1: any) => void;
}

const useSelectedId = create<selectIdType>((set) => ({
  data: [],
  setData: (data1) =>
    set(() => ({
      data: data1,
    })),
}));
export default useSelectedId;
