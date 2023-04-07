import { IInitialState } from "@/types";
import { createContext, ReactNode, useContext, useState } from "react";

const initialState: IInitialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
  activeMenu: true,
  isActive: false,
  handleClickMore: () => {},
  setActiveMenu: () => {},
  setIsClicked: () => {},
  screenSize: 0,
  setScreenSize: () => {},
  isClicked: {},
};
const StateContext = createContext(initialState);
export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [activeMenu, setActiveMenu] = useState<boolean>(true);
  const [isClicked, setIsClicked] = useState<IInitialState>(initialState);
  const [screenSize, setScreenSize] = useState<number>(0);
  const handleClickMore = (clicked: string) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };
  const valueState = {
    ...initialState,
    activeMenu,
    setActiveMenu,
    handleClickMore,
    isClicked,
    setIsClicked,
    screenSize,
    setScreenSize,
  };
  return (
    <StateContext.Provider value={valueState}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
