import Taro from "@tarojs/taro";
import create from "zustand";

interface announcementType {
  ID: number;
  CreatedAt?: string;
  UpdatedAt?: string;
  DeletedAt?: string | undefined;
  Content: string;
}

const useAnnouncementStore = create<announcementType>(() => ({
  ID: 0,
  Content: "",
}));

export default useAnnouncementStore;
