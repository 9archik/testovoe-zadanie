import styles from "./style.module.css";
const Header = ({ text }) => {
  return <header className={styles.header}>{text}</header>;
};

export default Header;
