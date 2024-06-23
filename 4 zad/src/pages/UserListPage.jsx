import Header from "../components/header/header.jsx";
import UserList from "../components/userList/userList.jsx";
import styles from "./styles.module.css";

const UserListPage = () => {
  return (
    <div className={`container ${styles.container}`}>
      <Header text={"User list"} />
      <UserList />
    </div>
  );
};

export default UserListPage;
