import React from "react";
import { useState } from "react";
import styles from "../DashboardMenuComponents/dashboard.module.css";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";

export default function Menu() {
  const [openMenu, setOpenMenu] = useState();

  const hamburberIcon = <AiOutlineMenu onClick={() => setOpenMenu(true)} />;
  const closeIcon = <AiOutlineCloseCircle onClick={() => setOpenMenu(false)} />;

  return (
    <div className={styles.dashboard_menu}>
      <div className={styles.dashboard_burger}>
        {openMenu ? closeIcon : hamburberIcon}
      </div>
      <div className={styles.dashboard_elements}>
        <p>Dashboard</p>
        <p>Estadisticas</p>
        <p>Vision general</p>
        <p>Ajustes</p>
      </div>
    </div>
  );
}
