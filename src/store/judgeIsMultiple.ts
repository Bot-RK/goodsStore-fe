import create from "zustand";

interface judgeType {
  isMultiple: boolean;
  setIsTrue: () => void;
  setIsFlase: () => void;
}

const useJudge = create<judgeType>((set) => ({
  isMultiple: false,
  setIsTrue: () =>
    set((state) => ({
      isMultiple: true,
    })),
  setIsFlase: () =>
    set((state) => ({
      isMultiple: false,
    })),
}));

export default useJudge;
