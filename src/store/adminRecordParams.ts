import create from "zustand";

interface RecordParamsType {
  data: Array<{
    from: number;
    to: number;
    last_id: number;
    department_id: number;
  }>;
  setData: (data1) => void;
}

const useRecordParamsStore = create<RecordParamsType>((set) => ({
  data: [],
  setData: (data1) =>
    set(() => ({
      data: data1,
    })),
}));

export default useRecordParamsStore;
