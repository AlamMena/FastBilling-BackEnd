import { useEffect, useState } from "react";
import {
  AiFillExclamationCircle,
  AiFillFileExclamation,
  AiOutlineExclamation,
  AiOutlineExclamationCircle,
  AiOutlineWarning,
} from "react-icons/ai";
import styles from "../ProductsComponents/Product_Popup.module.css";
import { useForm } from "react-hook-form";
import useAxios from "../../Axios/axios";

export default function ProductPopUp({ getProducts, defaultData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    reset,
  } = useForm({
  });

  useEffect(() => {
    reset(defaultData);
  }, [defaultData]);

  const calculateBenefit = () => {
    const data = getValues();
    const benefit = data.price - data.cost;
    setValue("benefit", benefit);
  };
  const { axiosInstance } = useAxios();
  const upsertProductAsync = async (data) => {
    try {
      if (data._id) {
        await axiosInstance.put("v1/product", data);
      } else {
        await axiosInstance.post("v1/product", data);
      }
      await getProducts();
    } catch (error) {
      console.log(error);
    }
  };
  const handleCancel = () => {
    reset({ name: "", price: 0, cost: 0,benefit:0,description:'' });
  };
  const onSubmit = (data) => {
    upsertProductAsync(data);
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
            {...register("price", {
              onChange: (e) => {
                calculateBenefit();
              },
            })}
            className={styles.form__input}
            type="number"
            placeholder="$10.20"
          ></input>
        </div>
        {/* cost */}
        <div className={styles.container__input}>
          <label className=" flex-auto">Costo</label>
          <input
            {...register("cost", {
              onChange: (e) => {
                calculateBenefit();
              },
            })}
            className={styles.form__input}
            type="number"
            placeholder="$12.25"
          ></input>
        </div>
        {/* benefit */}
        <div className={styles.container__input}>
          <label className=" flex-auto">Beneficio</label>
          <input
            {...register("benefit")}
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
          value="Cancelar"
          type="button"
          onClick={handleCancel}
          className="bg-red-500 text-white px-4 py-2 rounded-lg "
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
