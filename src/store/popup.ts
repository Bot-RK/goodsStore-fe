import { CommonEvent, CommonEventFunction } from "@tarojs/components";
import create from "zustand";

interface popUpDetail {
  isOpen: boolean;
  isShowQRcode: boolean;
  icon?: string;
  name?: string;
  remainCount?: number;
  isShowCounter: boolean;
  needCount?: number | string;
  onclose: () => void;
  onOpen: () => void;
  setDetail: (any) => void;
  ID: number;
  setId: (number) => void;
}

const usePopupDetail = create<popUpDetail>((set) => ({
  isOpen: false,
  isShowQRcode: false,
  isShowCounter: false,
  icon: "",
  name: "",
  needCount: 0,
  ID: -1,
  onclose: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),
  onOpen: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),
  setDetail: (detail) =>
    set(() => ({
      icon: detail.picture_url,
      name: detail.name,
      remainCount: detail.amount,
    })),
  setId: (id) =>
    set(() => ({
      ID: id,
    })),
}));

export default usePopupDetail;
