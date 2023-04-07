import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

export interface IInitialState {
  chat?: boolean;
  cart?: boolean;
  userProfile?: boolean;
  notification?: boolean;
  activeMenu?: boolean;
  isActive?: boolean;
  setActiveMenu: Dispatch<SetStateAction<boolean>>;
  handleClickMore?: (value: string) => void;
  isClicked?: object;
  setIsClicked: Dispatch<SetStateAction<IInitialState>>;
  screenSize: number;
  setScreenSize?: any;
}

export interface IOrderGrid {
  headerText?: string;
  width?: number;
  field?: string;
}
export interface IOrderData {
  OrderID: number;
  CustomerName: string;
  TotalAmount: number;
  OrderItems: string;
  Location: string;
  Status: string;
  StatusBg?: string;
  ProductImage: any;
}
