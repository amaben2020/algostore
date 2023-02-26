import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import Button from "../button";
import styles from "./styles.module.css";

type TCard = {
  name: string;
  price: string;
  image: string;
  id: string;
};

export const Card = ({ id, name, price, image }: TCard) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const addToCart = async () => {
    try {
      setIsSuccess(false);
      const data = await axios.post("http://localhost:3000/api/add-to-cart", {
        productId: id,
        qty: 1,
      });
      setIsSuccess(true);
      console.log("Added item", data.data);
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
