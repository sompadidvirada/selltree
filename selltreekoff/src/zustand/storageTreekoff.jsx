import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const TreekoffStorage = (set, get) => ({
  userBill: [],
  employeeInfo: null,
  userInfo: null,
  screenControl: null,
  setUserBill: (billOrUpdater) => {
  set((state) => ({
    userBill:
      typeof billOrUpdater === "function"
        ? billOrUpdater(state.userBill)
        : [billOrUpdater, ...state.userBill],
  }));
},
  replaceUserBill: (newArray) => {
    set({ userBill: newArray }); // overwrite entire array
  },
  setEmplyeeInfo: (newData) => {
    set({ employeeInfo: newData });
  },
  setUserInfo: (newData) => {
    set({ userInfo: newData });
  },
  resetBill: () => {
    set({
      userBill: [],
      userInfo: null,
      screenControl:null
    });
  },
  setScreenControll: (newData) => {
    set({ screenControl: newData });
  },
});

const usePersist = {
  name: "sellTreekoff-storege2",
  storage: createJSONStorage(() => localStorage),
};

const useTreekoffStorage = create(persist(TreekoffStorage, usePersist));

export default useTreekoffStorage;
