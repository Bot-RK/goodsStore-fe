import create from "zustand";

interface judgeType {
  isMultiple: boolean;
  setIsTrue: () => void;
  setIsFlase: () => void;
}

const useJudge = create<judgeType>((set) => ({
  isMultiple: false,
  setIsTrue: () =>
    set(() => ({
      isMultiple: true,
    })),
  setIsFlase: () =>
    set(() => ({
      isMultiple: false,
    })),
}));

export default useJudge;
