import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../button";
import useCart from "../hooks/useCart";
import useLocalStorage from "../hooks/useLocalStorage";
import styles from "./styles.module.css";

type TCard = {
  name: string;
  price: string;
  image: string;
  id: string;
};

export const Card = ({ id, name, price, image }: TCard) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const route = useRouter();

  const [_, dispatch] = useCart();

  const [value, setValue] = useLocalStorage("cartItems", []);

  console.log("value", value);

  const addToCart = async () => {
    try {
      setIsSuccess(false);
      const data = await axios.post("http://localhost:3000/api/add-to-cart", {
        productId: id,
        qty: 1,
      });
      setIsSuccess(true);
      console.log("Added item", data.data.data);
      if (data.data && data.status === 200) {
        dispatch({
          type: "ADD_TO_CART",
          payload: data.data.data.addCartItem.items,
        });
        setValue(data.data.data.addCartItem.items);

        await axios.post("http://localhost:3000/api/message-producer", {
          info: data.data.data.addCartItem.items,
        });

        await axios.get("http://localhost:3000/api/message-consumer");
        // route.push("/cart");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className={styles.card}>
      <p>{name}</p>
      <p>${price}</p>

      <div className={styles.image}>
        <Image src={image} alt={name} fill />
      </div>

      <Button text="Add to cart" onClick={addToCart} />

      {isSuccess && <p>Product added to cart</p>}
    </div>
  );
};
