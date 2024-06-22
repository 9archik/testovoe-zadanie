import styles from "./style.module.css";
import { createPortal } from "react-dom";
const Modal = ({ active, children }) => {
  return createPortal(
    <div className={`${styles.container} ${active && styles.active}`}>
      {children}
    </div>, document.body
  );
};

export default Modal;
