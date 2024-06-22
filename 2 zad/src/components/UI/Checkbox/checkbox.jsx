import completePNG from "../../../assets/images/complete.png";
import styles from "./style.module.css";
const CheckBox = ({ active, onChange }) => {
  return (
    <label className={styles.checkbox}>
      <input checked={active} onChange={onChange} type="checkbox" />
      <span className={`${styles.visual} ${active && styles.active}`}>
        <img src={completePNG} width={15} height={15} alt="complete icon" />
      </span>
    </label>
  );
};

export default CheckBox;
