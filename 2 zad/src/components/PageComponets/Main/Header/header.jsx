
import styles from "./style.module.css";
import Button from "../../../UI/Button/Button";
const Header = ({clickAdd}) => {

  return (
    <div className={`${styles.container}`}>
      <span>TO DO LIST</span>

      <Button onClick={clickAdd}>
        <span>Add note</span>
      </Button>
    </div>
  );
};

export default Header;
