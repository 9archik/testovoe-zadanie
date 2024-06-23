import { useEffect, useState } from "react";
import UserListLoading from "./loading/loading";
import UserListError from "./error/error";
import UserItem from "./userItem/userItem";
import styles from "./style.module.css";

const UserList = () => {
  const [userList, setUserList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUserList(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <UserListLoading />;
  }

  if (error) {
    return <UserListError />;
  }

  return (
    <div className={styles.list}>
      {userList &&
        userList.map((el) => {
          return <UserItem id={el.id} username={el.username} key={el.id} />;
        })}
    </div>
  );
};

export default UserList;
