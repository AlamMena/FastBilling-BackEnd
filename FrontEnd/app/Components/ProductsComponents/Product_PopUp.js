import { useState } from "react";
import {
  AiFillExclamationCircle,
  AiFillFileExclamation,
  AiOutlineExclamation,
  AiOutlineExclamationCircle,
  AiOutlineWarning,
} from "react-icons/ai";
import styles from "../ProductsComponents/Product_Popup.module.css";
import { useForm } from "react-hook-form";

export default function ProductPopUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({
    defaultValues: { name:'product',price: 0, cost: 0, benefit: 0 },
  });

  const calculateBenefit = () => {
    const data = getValues();
    const benefit = data.price - data.cost;
    setValue("Benefit", benefit);
  };
  const onSubmit = (e) => {
    const data = JSON.stringify(e);
    console.log(data);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-lg">Products</h1>
      <div className={styles.form_row}>
        {/* name */}
        <div className={styles.container__input}>
          <label className={styles.label}>
            Nombre
            <AiFillExclamationCircle className={styles.label_icon} />
          </label>
          <input
            {...register("name", { required: true })}
            className={`${styles["form__input"]} ${
              errors.name && styles["input_error"]
            }`}
            placeholder="product name"
          ></input>
          <label className={styles.label_error}>
            {errors.name?.type === "required" && "El nombre es obligatorio"}
          </label>
        </div>
      </div>
      {/* description */}
      <div className={styles.form_row}>
        {/* description */}
        <div className={styles.container__input}>
          <label className={styles.label}>Descripcion</label>
          <input
            {...register("description")}
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
            {...register("price")}
            onChange={() => {
              calculateBenefit();
            }}
            className={styles.form__input}
            type="number"
            placeholder="$10.20"
          ></input>
        </div>
        {/* cost */}
        <div className={styles.container__input}>
          <label className=" flex-auto">Costo</label>
          <input
            {...register("cost")}
            onChange={() => {
              calculateBenefit();
            }}
            className={styles.form__input}
            type="number"
            placeholder="$12.25"
          ></input>
        </div>
        {/* benefit */}
        <div className={styles.container__input}>
          <label className=" flex-auto">Beneficio</label>
          <input
            {...register("Beneficio")}
            className={styles.form__input}
            type="number"
            placeholder="$2.05"
          ></input>
        </div>
      </div>
      <div className="flex space-x-2 justify-end mt-4">
        <button
          value="Crear"
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg "
        >
          Crear producto
        </button>
        <button
          value="Crear"
          className="bg-red-500 text-white px-4 py-2 rounded-lg "
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
