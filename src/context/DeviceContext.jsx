import React from "react";
import { useContext } from "react";
import { createContext } from "react";

const DeviceContext = createContext();

export default function DeviceContextProvider({ children }) {
  const [isMobile, setIsMobile] = useState(true);
  const getIsMobileType = () => {
    setIsMobile(window.navigator.userAgent.includes("Mobile"));
  };
  return (
    <DeviceContext.Provider value={deviceValue}>
      {children}
    </DeviceContext.Provider>
  );
}

export const useDeviceContext = () => {
  const context = useContext(DeviceContext);
  if (!context) throw new Error("Device context not defined");
  return context;
};
