import React from "react";
import { useState } from "react";
import styles from "./sidebar.module.css";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillSetting,
  AiOutlineFundView,
  AiOutlinePieChart,
  AiOutlineHome,
  AiOutlineLogout,
} from "react-icons/ai";

export default function Menu() {
  const [openMenu, setOpenMenu] = useState(false);

  // SideBar Data
  const SideBarData = [
    {
      title: "Dashboard",
      path: "/",
      icon: <AiOutlineHome />,
    },
    {
      title: "Estadisticas",
      path: "/",
      icon: <AiOutlinePieChart />,
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

  // SideBar Data rendering
  const elements = SideBarData.map((item, index) => {
    return (
      <div key={index} className={`${styles["dashboard__element"]}`}>
        <div className={styles.dashboard_icons}>{item.icon}</div>
        <p className={styles.dashboard_elements_p}>{item.title}</p>
      </div>
    );
  });

  // Side Bar button
  const button = (
    <div className="flex justify-center">
      <button className={styles.dashboard_button}>
        <p className="hidden lg:block">Log Out</p>
        <AiOutlineLogout className="lg:hidden" />
      </button>
    </div>
  );

  return (
    <div>
      {/* Menu used when the screen size is either md or lg */}
      <div className={styles.dashboard}>
        <div className={styles.dashboard_menu}>{elements}</div>
        <div className="mt-auto">{button}</div>
      </div>
    </div>
  );
}
