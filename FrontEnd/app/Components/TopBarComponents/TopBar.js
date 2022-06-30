import react from "react";
import styles from "./TopBar.module.css";
import {
  AiOutlineBell,
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
  AiFillSetting,
  AiOutlineFundView,
  AiOutlinePieChart,
  AiOutlineHome,
  AiOutlineLogout,
} from "react-icons/ai";
import { useState } from "react";
import SideMenuPopUp from "./Sidemenu_popup";

export default function TopBar() {
  const setOpenMenu = () => {
    <SideMenuPopUp />;
  };
  // Menu Icons which you can close and open the sidebar when the screen size is sm
  const burguerMenu = (
    <div className=" block md:hidden  text-gray-500 ml-2">
      <AiOutlineMenu onClick={() => setOpenMenu()} />
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

  // // Side Bar button
  // const button = (
  //   <div className="flex justify-center">
  //     <button className={styles.dashboard_button}>
  //       <p className="hidden lg:block">Log Out</p>
  //       <AiOutlineLogout className="lg:hidden" />
  //     </button>
  //   </div>
  // );

  // // Elements used when the screen size is sm
  // const elementsSM = (
  //   <div className="flex flex-row ">
  //     <div>{elements}</div>
  //     <div>{button}</div>
  //   </div>
  // );

  return (
    <div className={styles.bar}>
      {burguerMenu}
      <SideMenuPopUp />
      <div className={styles.img_container}>
        <div className={styles.img}>
          <img src="https://1000logos.net/wp-content/uploads/2016/11/meta-logo.png" />
        </div>
        <div className={styles.img_company_name}>Fast Billing</div>
      </div>
      <div className="flex ml-auto items-center">
        <div className={styles.topbar_searchbar}>
          <AiOutlineSearch className="mt-1 mr-3 text-gray-500" />
          <input
            placeholder="Search bar"
            className="lg:w-60 md:w-40 w-28 bg-slate-200 outline-none text-gray-400 "
            type="search"
          />
        </div>
        <div className={styles.topbar_icons}>
          <AiOutlineBell />
          <AiOutlineUser className="hidden md:block" />
          <AiOutlineSearch className=" md:hidden" />
        </div>
      </div>
    </div>
  );
}
