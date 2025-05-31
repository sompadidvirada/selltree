import React, { createContext, useContext, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

const SocketContext = createContext(null);

export const useSocket = () => useContext(SocketContext);
const envUrl = import.meta.env.VITE_API_URL;

export const SocketProvider = ({ children }) => {
  
  const socketRef = useRef(null);

  // Initialize socket once
  if (!socketRef.current) {
    socketRef.current = io(`${envUrl}`);
  }

  useEffect(() => {
    // Disconnect only when app is really unmounting
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect(); 
      }
    };
  }, []);

  return (
    <SocketContext.Provider value={socketRef.current}>
      {children}
    </SocketContext.Provider>
  );
};
