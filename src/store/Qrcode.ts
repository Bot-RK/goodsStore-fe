import create from "zustand";

interface QrcodeType {
  id: number;
  name: string;
  setId: (id1: number) => void;
  setName: (name1: string) => void;
}

const useQrcodeDetail = create<QrcodeType>((set) => ({
  id: 0,
  name: "first",
  setId: (id1) =>
    set(() => ({
      id: id1,
    })),
  setName: (name1) =>
    set(() => ({
      name: name1,
    })),
}));

export default useQrcodeDetail;
