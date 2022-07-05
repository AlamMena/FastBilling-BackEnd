import { useEffect, useState } from "react";
import {
  AiFillExclamationCircle,
  AiFillFileExclamation,
  AiOutlineExclamation,
  AiOutlineExclamationCircle,
  AiOutlineWarning,
  AiOutlineClose,
} from "react-icons/ai";
import styles from "../Globals/Styling/Product_Popup.module.css";
import { useForm } from "react-hook-form";
import useAxios from "../../Axios/axios";
import ImagePoster from "../Globals/ImagePoster";

export default function ProductPopUp({
  getData,
  defaultData,
  setPopUpIsOpen,
  setAlertOpen,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const { axiosInstance } = useAxios();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    reset,
  } = useForm();

  useEffect(() => {
    reset(defaultData);
  }, [defaultData]);

  const calculateBenefit = () => {
    const data = getValues();
    const benefit = data.price - data.cost;
    setValue("benefit", benefit);
  };

  const upsertProductAsync = async (data) => {
    setIsLoading(true);

    try {
      if (data._id) {
        await axiosInstance.put("v1/product", data);
      } else {
        await axiosInstance.post("v1/product", data);
      }
      // setPopUpIsOpen(false);
      setTimeout(() => {
        setIsLoading(false);
        resetForm();
        setPopUpIsOpen(false);
        getData();
        setAlertOpen(true);
        setTimeout(() => {
          setAlertOpen(false);
        }, 2000);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  const resetForm = () => {
    reset({ name: "", price: 0, cost: 0, benefit: 0, description: "", images: ['url 1', 'url 2'] });
  };
  const onSubmit = (data) => {
    upsertProductAsync(data);
  };
  return (
    <div className={styles.form_container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.title}>Products</h1>
        <div className={styles.form_row}>
          {/* name */}
          <div className={styles.container__input}>
            <label className={styles.label}>
              Nombre
              <AiFillExclamationCircle className={styles.label_icon} />
            </label>
            <input
              {...register("name", { required: true })}
              className={`${styles["form__input"]} ${errors.name && styles["input_error"]
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
            <label className={styles.label_p}>Costo</label>
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
            <label className={styles.label_p}>Beneficio</label>
            <input
              {...register("benefit")}
              className={styles.form__input}
              type="number"
              placeholder="$2.05"
            ></input>
          </div>
        </div>
        <ImagePoster images={images} setImages={setImages} />
        <div className={styles.loading_container}>
          {!isLoading && (
            <button
              value="Crear"
              type="submit"
              className={styles.create_button}
            >
              Crear producto
            </button>
          )}

          {isLoading && (
            <button disabled type="button" className={styles.loading}>
              <svg
                role="status"
                className={styles.loading_svg}
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="#1C64F2"
                />
              </svg>
              Loading...
            </button>
          )}

          <button
            value="Cancelar"
            type="button"
            onClick={() => {
              resetForm(), setPopUpIsOpen(false);
            }}
            className={styles.cancel_button}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
