import { useState } from "react";
import { AiFillExclamationCircle, AiFillFileExclamation, AiOutlineExclamation, AiOutlineExclamationCircle, AiOutlineWarning } from "react-icons/ai";
import styles from '../ProductsComponents/Product_Popup.module.css'

export default function ProductPopUp() {
  return (
    <form className={styles.form}>
      <h1 className="text-lg">Products</h1>
      <div className={styles.form_row}>
        {/* name */}
        <div className={styles.container__input}>
          <label className={styles.label}>
            Nombre
            <AiFillExclamationCircle className={styles.label_icon} />
          </label>
          <input
            className={styles.form__input}
            placeholder="product name"
          ></input>
        </div>
      </div>
      {/* description */}
      <div className={styles.form_row}>
        {/* description */}
        <div className={styles.container__input}>
          <label className={styles.label}>
            Descripcion
          </label>
          <input
            className={styles.form__input}
            placeholder="mi descripcion"
          ></input>
        </div>
      </div>
      <div className={styles.form_row}>
        {/* price */}
        <div className={styles.container__input}>
          <label className=" flex-auto">Precio</label>
          <input
            className={styles.form__input}
            type="number"
            placeholder="$10.20"
          ></input>
        </div>
        {/* cost */}
        <div className={styles.container__input}>
          <label className=" flex-auto">Costo</label>
          <input
            className={styles.form__input}
            type="number"
            placeholder="$12.25"
          ></input>
        </div>
        {/* benefit */}
        <div className={styles.container__input}>
          <label className=" flex-auto">Beneficio</label>
          <input
            className={styles.form__input}
            type="number"
            placeholder="$2.05"
          ></input>
        </div>
      </div>
    </form>
  );
}
