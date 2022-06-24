import React from "react";
import { useState } from "react";
import styles from "../DashboardMenuComponents/dashboard.module.css";
import {
  AiOutlineMenu,
  AiOutlineCloseCircle,
  AiFillSetting,
  AiOutlineFundView,
  AiFillPieChart,
  AiFillHome,
} from "react-icons/ai";

export default function Menu() {
  const [openMenu, setOpenMenu] = useState();

  const hamburberIcon = <AiOutlineMenu onClick={() => setOpenMenu(true)} />;
  const closeIcon = <AiOutlineCloseCircle onClick={() => setOpenMenu(false)} />;
  const elements = (
    <div className={styles.dashboard_elements}>
      <div className="flex flex-row space-x-2 items-center">
        <AiFillHome />
        <p>Dashboard</p>
      </div>
      <div className="flex flex-row space-x-2 items-center">
        <AiFillPieChart />
        <p>Estadisticas</p>
      </div>
      <div className="flex flex-row space-x-2 items-center">
        <AiOutlineFundView />
        <p>Vision general</p>
      </div>
      <div className="flex flex-row space-x-2 items-center">
        <AiFillSetting />
        <p>Ajustes</p>
      </div>
    </div>
  );

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard_menu}>
        <img src="https://hub.fastbilling.app/uploads/-/system/appearance/logo/1/LOGO-SISTEMA-FACTURACION-2.png" />
        {elements}
      </div>
      <div className={styles.dashboard_burger}>
        {openMenu ? closeIcon : hamburberIcon}
      </div>
      {openMenu ? elements : ""}
    </div>
  );
}
