import { useContext } from "react";
import { CartContext } from "../context/index";

const useCart = () => {
  const { state, dispatch } = useContext(CartContext);

  return [state, dispatch];
};

export default useCart;
