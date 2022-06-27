import react from "react";
import styles from "../TopBar/TopBar.module.css";
import { AiOutlineBell, AiOutlineUser, AiOutlineSearch } from "react-icons/ai";

export default function TopBar() {
  return (
    <div className={styles.bar}>
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
        <AiOutlineUser />
      </div>
    </div>
  );
}
