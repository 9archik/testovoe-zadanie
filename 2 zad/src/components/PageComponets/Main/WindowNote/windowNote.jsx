import Input from "../../../UI/Input/Input";
import styles from "./style.module.css";
import Button from "../../../UI/Button/Button";
import { useState } from "react";
const WindowNote = ({
  valueText,
  cancelClick,
  textSubmitBtn,
  submitClick,
  onChangeText,
  textHeader,
  submitBtnText,
}) => {
  const [textError, setTextError] = useState(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (valueText.length === 0) {
          setTextError("Введите задачу");
          return;
        }
        setTextError(null);
        submitClick();
      }}
      className={`${styles.container}`}
    >
      <div className={styles.header}>{textHeader}</div>

      <div className={styles.inputBlock}>
        {textError && <div className={styles.error}>{textError}</div>}
        <Input
          className={styles.input}
          onChange={(event) => {
            onChangeText(event.target.value);
          }}
          value={valueText ? valueText : ""}
          placeholder={"Input your note..."}
        />
      </div>

      <div className={styles.buttons}>
        <Button onClick={cancelClick}>Cancel</Button>
        <Button type={"submit"}>{submitBtnText}</Button>
      </div>
    </form>
  );
};

export default WindowNote;
