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
      active: true
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
      <div key={index} className={`${item.active && styles["dashboard__element_active"]} ${styles["dashboard__element"]}`}>
        <div className={styles.dashboard_icons}>{item.icon}</div>
        <p className={styles.dashboard_elements_p}>{item.title}</p>
      </div>
    );
  });

  // SideBar card
  const SideBarCard = () => {
    return (<div className=" flex flex-col items-center bg-opacity-30 bg-neutral-400 rounded-lg p-4 mt-auto">
      <img className="w-16 h-16" src="https://cdn-icons-png.flaticon.com/512/560/560216.png"></img>
      <span className="text-xs font-semibold text-neutral-600 my-2 text-center">Bienvenido a fast-billing Aristoteles</span>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-full">Update!</button>

    </div>)
  }

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
        <SideBarCard />
        {/* <div className="mt-auto">{button}</div> */}
      </div>
    </div>
  );
}
