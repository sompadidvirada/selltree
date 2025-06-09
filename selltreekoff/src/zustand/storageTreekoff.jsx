import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const TreekoffStorage = (set, get) => ({
  staffInfo: null,
  customerInfo: null,
  session: null,
  menuForBranch: null,
  waitingNumbers: {},
  orderOnline2: [],
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
  setOrderOnline2: (newData) => {
    set({ orderOnline2: newData });
  },
  updateOrderOnline2Item: (id_bill, newFields) => {
    console.log(id_bill, newFields);
    set((state) => ({
      orderOnline2: state.orderOnline2.map((order) =>
        order.id_bill.toString() === id_bill.toString()
          ? { ...order, ...newFields }
          : order
      ),
    }));
  },
  removeOrderOnline2Item: (id_bill) =>
    set((state) => ({
      orderOnline2: state.orderOnline2.filter(
        (order) => order.id_bill !== id_bill
      ),
    })),
  logout: () => {
    set({
      userBill: [],
      userInfo: null,
      staffInfo: null,
      customerInfo: null,
      session: null,
      menuForBranch: null,
      waitingNumbers: {},
      orderOnline2: [],
    });
  },
});

const usePersist = {
  name: "sellTreekoff-storege2",
  storage: createJSONStorage(() => localStorage),
};

const useTreekoffStorage = create(persist(TreekoffStorage, usePersist));

export default useTreekoffStorage;
