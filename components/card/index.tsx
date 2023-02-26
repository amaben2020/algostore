import Image from "next/image";
import styles from "./styles.module.css";

export const Card = ({ name, price, image }) => {
  return (
    <div className={styles.card}>
      <p>{name}</p>
      <p>${price}</p>

      <div className={styles.image}>
        <Image src={image} alt={name} fill />
      </div>
    </div>
  );
};
