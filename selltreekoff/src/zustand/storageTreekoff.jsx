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
  session:null,
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
  setCustomerInfo: (newData) => {
    set((state) => ({
      customerInfo: {
        ...state.customerInfo,
        ...newData,
      },
    }));
  },
  resetCustomerInfo: (newData) => {
    set({ customerInfo: newData})
  },
  
  setSession: (newData) => {
    set({ session: newData})
  }
});

const usePersist = {
  name: "sellTreekoff-storege2",
  storage: createJSONStorage(() => localStorage),
};

const useTreekoffStorage = create(persist(TreekoffStorage, usePersist));

export default useTreekoffStorage;
