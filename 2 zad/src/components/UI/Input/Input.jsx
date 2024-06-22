import styles from "./style.module.css"
const Input = ({ value, onChange, className, placeholder }) => {
  return (
    <input
      value={value}
      onChange={(event) => {
        if (typeof onChange === "function") {
          onChange(event);
        }
      }}
      className={`${className} ${styles.input}`}
      placeholder={placeholder}
    />
  );
};

export default Input;
