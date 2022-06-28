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
  AiOutlineLogout,
} from "react-icons/ai";

export default function Menu() {
  const [openMenu, setOpenMenu] = useState(false);

  // Menu Icons which you can close and open the sidebar when the screen size is sm
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

  // Elements used when the screen size is sm
  const elementsSM = (
    <div className="flex flex-row ">
      <div>{elements}</div>
      <div>{button}</div>
    </div>
  );

  return (
    <div>
      {/* Menu used when the screen size is either md or lg */}
      <div className={styles.dashboard}>
        {/* Menu used when the screen size is either sm */}
        <div className={styles.dashboard_small_bar}>
          {openMenu ? closeMenu : burguerMenu}
          {openMenu ? elementsSM : ""}
        </div>
        {/* -------------------------------------------- */}
        <div className={styles.dashboard_img_container}>
          <div className={styles.dashboard_img}>
            <img src="https://1000logos.net/wp-content/uploads/2016/11/meta-logo.png" />
          </div>
          <div className={styles.dashboard_img_company_name}>Fast Billing</div>
        </div>
        <div className={styles.dashboard_menu}>{elements}</div>
        <div className="mt-auto">{button}</div>
      </div>
    </div>
  );
}
