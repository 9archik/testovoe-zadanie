import Input from "../../../UI/Input/Input";
import styles from "./style.module.css";
import Button from "../../../UI/Button/Button";
const WindowNote = ({
  valueText,
  cancelClick,
  textSubmitBtn,
  submitClick,
  onChangeText,
  textHeader,
  submitBtnText,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitClick();
      }}
      className={`${styles.container}`}
    >
      <div className={styles.header}>{textHeader}</div>
      <Input
        className={styles.input}
        onChange={(event) => {
          onChangeText(event.target.value);
        }}
        value={valueText ? valueText : ""}
        placeholder={"Input your note..."}
      />

      <div className={styles.buttons}>
        <Button onClick={cancelClick}>Cancel</Button>
        <Button type={"submit"}>{submitBtnText}</Button>
      </div>
    </form>
  );
};

export default WindowNote;
