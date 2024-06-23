import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { useParams } from "react-router-dom";
const UserInfo = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [info, setInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );

        setLoading(false);

        if (response.ok) {
          const data = await response.json();
          setInfo(data);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  if (loading) {
    return (
      <div className={`${styles.container} ${styles.center}`}>
        <svg
          width={30}
          height={30}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 150"
        >
          <path
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray="300 385"
            strokeDashoffset="0"
            d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
          >
            <animate
              attributeName="stroke-dashoffset"
              calcMode="spline"
              dur="2"
              values="685;-685"
              keySplines="0 0 1 1"
              repeatCount="indefinite"
            ></animate>
          </path>
        </svg>
      </div>
    );
  }

  if (error) {
    return <div className={`${styles.container} ${styles.center}`}>Error</div>;
  }

  if (!info) {
    return (
      <div className={`${styles.container} ${styles.center}`}>Unknown user</div>
    );
  }

  return (
    <div className={`${styles.container} ${styles.grid}`}>
      <div className={styles.block}>
        <header>Contacts</header>

        <div className={styles.itemInfo}>
          name: <span>{info?.name ? info?.name : "unknown"}</span>
        </div>

        {info?.email && (
          <div className={styles.itemInfo}>
            email: <a href={`mailto:${info?.email}`}>{info?.email}</a>
          </div>
        )}

        {info?.phone && (
          <div className={styles.itemInfo}>
            phone: <span>{info?.phone}</span>
          </div>
        )}

        {info?.website && (
          <div className={styles.itemInfo}>
            site:{" "}
            <a target="__blank" href={info?.website}>
              {info?.website}
            </a>
          </div>
        )}
      </div>

      <div className={styles.block}>
        <header>Company</header>

        {info?.company?.name && (
          <div className={styles.itemInfo}>
            name: <span>{info?.company?.name}</span>
          </div>
        )}

        {info?.company?.catchPhrase && (
          <div className={styles.itemInfo}>
            catch phrase: <span>{info?.phone}</span>
          </div>
        )}

        {info?.company?.bs && (
          <div className={styles.itemInfo}>
            bs: <span>{info?.company?.bs}</span>
          </div>
        )}
      </div>

      <div className={styles.block}>
        <header>Address</header>

        {info?.address?.street && (
          <div className={styles.itemInfo}>
            street: <span>{info?.address?.street}</span>
          </div>
        )}

        {info?.address?.suite && (
          <div className={styles.itemInfo}>
            suite: <span>{info?.address?.suite}</span>
          </div>
        )}

        {info?.address?.city && (
          <div className={styles.itemInfo}>
            city: <span>{info?.address?.city}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
