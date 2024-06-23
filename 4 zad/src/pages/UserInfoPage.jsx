import styles from "./styles.module.css";
import Header from "../components/header/header.jsx";
import UserInfo from "../components/userInfo/userInfo.jsx";
const UserInfoPage = () => {
  return (
    <div className={`container ${styles.container}`}>
      <Header text={"User info"} />
      <UserInfo />
    </div>
  );
};

export default UserInfoPage;
