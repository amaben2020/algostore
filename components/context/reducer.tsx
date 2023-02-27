type TAction =
  | {
      type: "ADD_TO_CART";
      payload: any;
    }
  | {
      type: "REMOVE_FROM_CART";
      payload: any;
    };

type TState = {
  cartItems: [];
};

export const CartItemsReducer = (state: TState, action: TAction): any => {
  console.log("action", action);

  switch (action.type) {
    case "ADD_TO_CART":
      console.log("payload", action.payload);
      return {
        ...state,
        cartItems: [...action.payload],
      };

    default:
      return state;
  }
};
