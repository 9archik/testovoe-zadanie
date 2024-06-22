import CheckBox from "../../../../UI/Checkbox/checkbox";
import styles from "./style.module.css";
import Button from "../../../../UI/Button/Button";
import EditSVG from "../../../../Icons/editSVG";
import DeleteSVG from "../../../../Icons/deleteSVG";
const NoteItem = ({
  complete,
  text,
  completeClick,
  editClick,
  deleteClick,
}) => {
  return (
    <div className={styles.container}>
      <CheckBox onChange={completeClick} active={complete} />
      <div className={styles.text}>
        <span className={complete && styles.complete}>{text}</span>
      </div>

      <Button onClick={editClick} className={`${styles.btn} ${styles.edit}`}>
        <EditSVG />
      </Button>

      <Button
        onClick={deleteClick}
        className={`${styles.btn} ${styles.delete}`}
      >
        <DeleteSVG />
      </Button>
    </div>
  );
};

export default NoteItem;
