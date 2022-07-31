import create from "zustand";

interface adminRecords {
  data: Array<{
    id: number;
    created_at: string;
    user_id: number;
    person_name: string;
    department_id: number;
    total_amount: number;
    requests: Array<{
      id: number;
      created_at: string;
      record_id: number;
      good_id: number;
      name: string;
      amount: number;
      picture_url: string;
      measure_word: string;
    }>;
  }>;
  setData: (data: any) => void;
}

const useAdminRecords = create<adminRecords>((set) => ({
  data: [],
  setData: (data1) =>
    set(() => ({
      data: data1,
    })),
}));

export default useAdminRecords;
