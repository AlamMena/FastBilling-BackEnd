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
  // SideBar Data
  const SideBarData = [
    {
      title: "Dashboard",
      path: "/",
      icon: <AiFillHome />,
    },
    {
      title: "Estadisticas",
      path: "/",
      icon: <AiFillPieChart />,
    },
    {
      title: "Vision general",
      path: "/",
      icon: <AiOutlineFundView />,
    },
    {
      title: "Ajustes",
      path: "/",
      icon: <AiFillSetting />,
    },
  ];

  // SideBar Data Mapping
  const elements = SideBarData.map((item, index) => {
    return (
      <div key={index} className={styles.dashboard__element}>
        {item.icon}
        <p className={styles.dashboard_elements_p}>{item.title}</p>
      </div>
    );
  });

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard_img_container}>
        <div className={styles.dashboard_img}>
          <img src="https://hub.fastbilling.app/uploads/-/system/appearance/logo/1/LOGO-SISTEMA-FACTURACION-2.png" />
        </div>
      </div>
      <div className={styles.dashboard_menu}> {elements}</div>
    </div>
  );
}
