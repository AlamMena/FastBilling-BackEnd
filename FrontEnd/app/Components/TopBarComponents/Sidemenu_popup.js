import react from "react";
import styles from "../TopBarComponents/Sidemenu_popup.module.css";
import {
  AiOutlineHome,
  AiOutlinePieChart,
  AiOutlineFundView,
  AiFillSetting,
  AiOutlineLogout,
} from "react-icons/ai";

export default function SideMenuPopUp({ setOpenMenu }) {
  // Side Bar Data
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
  // Button
  const button = (
    <div className="flex justify-center">
      <button className={styles.dashboard_button}>
        <p className="hidden lg:block">Log Out</p>
        <AiOutlineLogout className="lg:hidden" />
      </button>
    </div>
  );

  return (
    <div className="flex flex-row absolute h-screen w-screen top-0 bottom-0 left-0 md:hidden">
      <div className={styles.menu}>
        <div className={styles.img}>
          <img src="https://1000logos.net/wp-content/uploads/2016/11/meta-logo.png" />
        </div>
        <div>{elements}</div>
        <div className="mt-auto mb-3">{button}</div>
      </div>
      <div
        className=" bg-opacity-40 bg-black w-2/4 backdrop-blur-sm"
        onClick={() => setOpenMenu(false)}
      ></div>
    </div>
  );
}
