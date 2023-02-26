import styles from "./styles.module.css";

type TButton = {
  onClick: () => void;
  text: string;
};

const Button = ({ onClick, text }: TButton) => {
  return <button className={styles.button}>{text}</button>;
};

export default Button;
