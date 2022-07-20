import Taro from "@tarojs/taro";
import create from "zustand";
import { produce } from "immer";

interface adminlist {
  data: Array<{
    ID: number;
    phone: string;
    username: string;
    is_admin: boolean;
  }>;
  setLocalStorage: (state: any) => void;
  changeAu: any;
  setData: (data: any) => void;
}

const useAdminList = create<adminlist>((set) => ({
  data: [
    {
      ID: 0,
      phone: "12312341234",
      username: "6",
      is_admin: false,
    },
    {
      ID: 1,
      phone: "12312341234",
      username: "777",
      is_admin: false,
    },
    {
      ID: 2,
      phone: "12312341234",
      username: "888",
      is_admin: true,
    },
  ],
  setLocalStorage: (state) => {
    Taro.setStorage({
      key: "adminList",
      data: state.data,
    });
  },
  changeAu: (i, e) =>
    set(
      produce((state) => {
        if (e.detail.value == 0 && !state.data[i].is_admin) {
          state.data[i].is_admin = !state.data[i].is_admin;
        } else if (e.detail.value == 1 && state.data[i].is_admin) {
          state.data[i].is_admin = !state.data[i].is_admin;
        }
      })
    ),
  setData: (data1) =>
    set(() => ({
      data: data1,
    })),
}));
// ({
//     data:[
//         {
//             ID:0,
//             phone:"13312341234",
//             username:"333",
//             is_admin:false,

//             }))
//         },
//         {
//             ID:0,
//             phone:"13312341234",
//             username:"333",
//             is_admin:false
//         }
//     ],
//     setLocalStorage:(state)=>{
//         Taro.setStorage({
//             key:"adminList",
//             data:state.data
//         })
//     },

// )

export default useAdminList;
