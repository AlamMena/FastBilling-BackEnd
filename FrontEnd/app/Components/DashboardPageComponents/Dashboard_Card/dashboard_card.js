import {
  AiFillEye,
  AiOutlineRight,
  AiOutlineDropbox,
  AiOutlineUsergroupAdd,
  AiOutlineDollarCircle,
} from "react-icons/ai";
import styles from "../Dashboard_Card/dashboard_card.module.css";

export default function () {
  // Card Data
  const card_Data = [
    { title: "Total views", numbers: "3,956K", icon: <AiFillEye /> },
    {
      title: "Total Profit",
      numbers: "10,923K",
      icon: <AiOutlineDollarCircle />,
    },
    { title: "Total Users", numbers: "32", icon: <AiOutlineUsergroupAdd /> },
    { title: "Total product", numbers: "925", icon: <AiOutlineDropbox /> },
  ];

  // Card Rendering
  const card = card_Data.map((item, index) => {
    return (
      <div key={index} className={styles.card}>
        <div className={styles.card_elements}>
          <div className={styles.card_icon}>{item.icon}</div>
          <div className={styles.card_title_container}>
            <div className={styles.card_title}>{item.numbers}</div>
            <div className={styles.card_text}>{item.title}</div>
          </div>
        </div>
        <div className={styles.card_arrow}>
          <AiOutlineRight />
        </div>
      </div>
    );
  });

  return <div className=" overflow-auto flex lg:flex-wrap">{card}</div>;
}
