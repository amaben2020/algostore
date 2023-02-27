import { useMemo, useReducer } from "react";
import { CartContext } from "./index";
import { CartItemsReducer } from "./reducer";

const CartState = ({ children }: { children: React.ReactNode }) => {
  const { Provider } = CartContext;

  const initialState = {
    cartItems: [],
  };

  const [state, dispatch] = useReducer<any>(CartItemsReducer, initialState);

  const memoizedValues = useMemo(() => {
    return {
      state,
      dispatch,
    };
  }, [dispatch, state]);

  return <Provider value={memoizedValues}>{children}</Provider>;
};

export default CartState;
