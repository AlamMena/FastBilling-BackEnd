import React from "react";
import { useState } from "react";
import styles from "../DashboardMenuComponents/dashboard.module.css";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillSetting,
  AiOutlineFundView,
  AiOutlinePieChart,
  AiOutlineHome,
} from "react-icons/ai";

export default function Menu() {
  const [openMenu, setOpenMenu] = useState(false);

  // Menu Icons which you can close and open the sidebar when the screen is on phone
  const burguerMenu = (
    <div>
      <AiOutlineMenu
        className=" text-gray-500"
        onClick={() => setOpenMenu(true)}
      />
    </div>
  );
  const closeMenu = (
    <div>
      <AiOutlineClose
        className="text-gray-500"
        onClick={() => setOpenMenu(false)}
      />
    </div>
  );

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

  // SideBar Data Mapping
  const elements = SideBarData.map((item, index) => {
    return (
      <div key={index} className={styles.dashboard__element}>
        {item.icon}
        <p className={styles.dashboard_elements_p}>{item.title}</p>
      </div>
    );
  });

  const elementsSM = (
    <div>
      <div>{elements}</div>
    </div>
  );

  return (
    <div>
      <div className="md:hidden">
        {openMenu ? closeMenu : burguerMenu}
        {openMenu ? elementsSM : ""}
      </div>
      <div className={styles.dashboard}>
        <div className={styles.dashboard_img_container}>
          <div className={styles.dashboard_img}>
            <img src="https://hub.fastbilling.app/uploads/-/system/appearance/logo/1/LOGO-SISTEMA-FACTURACION-2.png" />
          </div>
        </div>
        <div className={styles.dashboard_menu}> {elements}</div>
      </div>
    </div>
  );
}
