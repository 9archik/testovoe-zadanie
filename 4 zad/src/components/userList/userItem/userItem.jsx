import styles from "./style.module.css";
import { Link } from "react-router-dom";

const UserItem = ({ username, id }) => {
  return (
    <Link to={`/${id}`} className={styles.link}>
      {username}
    </Link>
  );
};

export default UserItem;
