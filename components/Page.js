import styles from "../styles/Page.module.css";

export default function Page(props) {
  return <div className={styles.page}>{...props.children}</div>;
}
