import react from "react";
import styles from "../TopBar/TopBar.module.css";

export default function TopBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.topbar_searchbar}>
        <input placeholder="Search bar" type="search" />
      </div>
      <div className={styles.topbar_icons}>
        <div>Hola</div>
      </div>
    </div>
  );
}
