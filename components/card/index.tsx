import Image from "next/image";
import Button from "../button";
import styles from "./styles.module.css";

type TCard = {
  name: string;
  price: string;
  image: string;
};

export const Card = ({ name, price, image }: TCard) => {
  return (
    <div className={styles.card}>
      <p>{name}</p>
      <p>${price}</p>

      <div className={styles.image}>
        <Image src={image} alt={name} fill />
      </div>

      <Button text="Add to cart" onClick={() => {}} />
    </div>
  );
};
