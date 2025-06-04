import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const TreekoffStorage = (set, get) => ({
  userBill: [],
  employeeInfo: null,
  userInfo: null,
  screenControl: null,
  orderOnline: [],
  staffInfo: null,
  customerInfo: null,
  session: null,
  menuForBranch: null,
  waitingNumbers: {},
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
  // Append a new order to the front
  appendOrderOnline: (newOrder) => {
    set((state) => ({
      orderOnline: [newOrder, ...state.orderOnline],
    }));
  },
  // Replace all online orders (e.g. after fetch)
  replaceOrderOnline: (newOrders) => {
    set({
      orderOnline: newOrders,
    });
  },
  // Remove an order by ID
  removeOrderOnline: (billNumberToRemove) => {
    set((state) => ({
      orderOnline: state.orderOnline.filter(
        (order) => order.billNumber !== billNumberToRemove
      ),
    }));
  },
  setStaffInfo: (newData) => {
    set((state) => ({
      staffInfo: {
        ...state.staffInfo,
        ...newData,
      },
    }));
  },
  setStaffInfo: (newData) => {
    set((state) => ({
      staffInfo: {
        ...state.staffInfo,
        ...newData,
      },
    }));
  },
  setCustomerInfo: (updater) => {
    set((state) => {
      const prev = state.customerInfo || {};
      const newCustomerInfo =
        typeof updater === "function" ? updater(prev) : updater;

      return { customerInfo: newCustomerInfo };
    });
  },

  resetCustomerInfo: (newData) => {
    set({ customerInfo: newData });
  },
  setSession: (newData) => {
    set({ session: newData });
  },
  setMenuForBranch: (newData) => {
    set({ menuForBranch: newData });
  },
  getNextWaitNumber: (branchId) => {
  const current = get().waitingNumbers[branchId] || 0;
  const next = current >= 5 ? 1 : current + 1;
  set((state) => ({
    waitingNumbers: {
      ...state.waitingNumbers,
      [branchId]: next,
    },
  }));
  return next;
},

  resetWaitNumbers: () => {
    set({ waitingNumbers: {} });
  },
});

const usePersist = {
  name: "sellTreekoff-storege2",
  storage: createJSONStorage(() => localStorage),
};

const useTreekoffStorage = create(persist(TreekoffStorage, usePersist));

export default useTreekoffStorage;
