import useCart from "../components/hooks/useCart";

const Cart = () => {
  const [state] = useCart();

  console.log("item", state);
  return (
    <div>
      {state.cartItems?.map((elem: any) => (
        <div>
          <p> {elem.product.name}</p>
          <p>{elem.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
