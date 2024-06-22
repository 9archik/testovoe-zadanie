import styles from "./style.module.css";
const Button = ({ className, onClick, type = "button", children }) => {
  return (
    <button onClick={onClick} type={type} className={`${styles.container} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
