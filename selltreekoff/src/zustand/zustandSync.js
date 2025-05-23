// zustandSync.js
import { BroadcastChannel } from 'broadcast-channel';
import useTreekoffStorage from './storageTreekoff';

const channel = new BroadcastChannel('treekoff-sync');

// 🔄 Call this after any state update (in employee side)
export const broadcastState = () => {
  const state = useTreekoffStorage.getState();
  channel.postMessage({
    userBill: state.userBill,
    userInfo: state.userInfo,
    employeeInfo: state.employeeInfo,
    screenControl: state.screenControl
  });
};

// 📥 Call this in CustomerDisplay to listen for updates
export const startListening = () => {
  const setUserBill = useTreekoffStorage.getState().replaceUserBill;
  const setUserInfo = useTreekoffStorage.getState().setUserInfo;
  const setEmplyeeInfo = useTreekoffStorage.getState().setEmplyeeInfo;
  const setScreenControll = useTreekoffStorage.getState().setScreenControll;

  channel.onmessage = (data) => {
    const store = useTreekoffStorage.getState();
    if (data.userBill) store.replaceUserBill(data.userBill);
    if (data.userInfo) store.setUserInfo(data.userInfo);
    if (data.employeeInfo) store.setEmplyeeInfo(data.employeeInfo);
    if (data.screenControl) store.setScreenControll(data.screenControl);
  };
};
