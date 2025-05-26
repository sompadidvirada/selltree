import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { onlineOrderData } from "../sell_treekoff/data/MockData";

const TreekoffStorage = (set, get) => ({
  userBill: [],
  employeeInfo: null,
  userInfo: null,
  screenControl: null,
  orderOnline: onlineOrderData,
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
      screenControl: null,
    });
  },
  setScreenControll: (newData) => {
    set({ screenControl: newData });
  },
  setOrderOnline: (newData) => {
    set((state) => ({
      orderOnline: [newData, ...state.orderOnline],
    }));
  },
});

const usePersist = {
  name: "sellTreekoff-storege2",
  storage: createJSONStorage(() => localStorage),
};

const useTreekoffStorage = create(persist(TreekoffStorage, usePersist));

export default useTreekoffStorage;
