import styles from "./styles.module.css";
import emptyPNG from "../../../../../assets/images/empty.png";
const EmptyList = () => {
  return (
    <div className={styles.container}>
      <img src={emptyPNG} alt="empty list image" />
      <div>Empty...</div>
    </div>
  );
};

export default EmptyList;
