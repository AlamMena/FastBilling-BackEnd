import axios from "../../Axios/axios";
import { AiOutlineArrowDown, AiOutlinePlus } from "react-icons/ai";
import styles from "../ProductsComponents/Product_List.module.css";
import { useEffect, useState } from "react";
import useAxios from "../../Axios/axios";
import auth from "../../Firebase/FirebaseAppConfig";
import ProductPopUp from "./ProductPopUp";

const headers = [
  "No",
  "Imagen",
  "Nombre",
  "Precio",
  "Costo",
  "Estado",
  "Ventas",
  "Ganancias",
];

const Products = [
  {
    _id: 1,
    ImageUrl: "",
    Name: "T-SHIRT BLACK LIVES MATTERS",
    Price: 29.92,
    Cost: 12.34,
    Status: "Active",
    Sells: 200,
    Earnings: 2000,
  },
  {
    _id: 2,
    ImageUrl: "",
    Name: "T-SHIRT BLACK LIVES MATTERS",
    Price: 29.92,
    Cost: 12.34,
    Status: "Active",
    Sells: 200,
    Earnings: 2000,
  },
];

const TableHeader = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.header_title}>Products</h1>
      <div className="flex space-x-4">
        <div className="relative flex items-center">
          <button className={styles.header_button_group}>Mas Vendido</button>
          <AiOutlineArrowDown className="absolute text-black right-0 mr-2" />
        </div>
        <div className="relative flex items-center">
          <AiOutlinePlus className="absolute text-white ml-2" />
          <button className={styles.header_button_create}>
            Crear producto
          </button>
        </div>
      </div>
    </div>
  );
};

const Table = () => {
  const [products, setProducts] = useState([]);
  const { axiosInstance } = useAxios();

  const getProductsAsync = async () => {
    try {
      const { data } = await axiosInstance.get(
        "api/v1/companies?page=1&limit=2"
      );
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handle=() => {
    console.log('alam')
  }
  useEffect(() => {
    getProductsAsync();
  }, []);
  return (
    <>
    {/* <div className={!popUpOpen ? 'hidden':'block'}>
        <ProductPopUp setOpen={setPoUpOpen} />
      </div> */}

      {/* <button onClick={handle}>Alam</button> */}
      <TableHeader />
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((header) => {
              return <th className={styles.table_header}>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {Products.map((product) => {
            return (
              <tr>
                <td className={styles.table_data}> {product.Id}</td>
                <td className={styles.table_data}>
                  <img
                    className={styles.table__image}
                    src="https://cdn.shopify.com/s/files/1/1415/3994/products/PXL_20211014_144743088_1100x.jpg?v=1638575773"
                  ></img>
                </td>
                <td className={styles.table_data}>{product.Name}</td>
                <td className={styles.table_data}> ${product.Price}</td>
                <td className={styles.table_data}>${product.Cost}</td>
                <td className={styles.table_data}>
                  <span className={styles.table__status}>{product.Status}</span>
                </td>
                <td className={styles.table_data}> {product.Sells}</td>
                <td className={styles.table_data}>$8{product.Earnings}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default function ProductList() {
  return (
    <div className={styles.product_list}>
      <Table />
    </div>
  );
}
