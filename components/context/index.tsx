import { createContext, DispatchWithoutAction } from "react";

type ContextValues = {
  state: any;
  dispatch: DispatchWithoutAction;
};

export const CartContext = createContext<any>(null);
