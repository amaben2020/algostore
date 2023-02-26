import styles from "./styles.module.css";

type TButton = {
  onClick: () => void;
  text: string;
};

const Button = ({ onClick, text }: TButton) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
