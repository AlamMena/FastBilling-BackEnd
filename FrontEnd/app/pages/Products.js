import ProductList from "../Components/ProductsComponents/Product_List";
import { useEffect, useMemo, useState } from "react";
import ProductPopUp from "../Components/ProductsComponents/Product_PopUp";
import Table from "../Components/Globals/Tables/Table";
import useAxios from "../Axios/axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const { axiosInstance } = useAxios();

  const getProductsAsync = async () => {
    try {
      const { data } = await axiosInstance.get("v1/products?page=1&limit=20");
      console.log(data);

      setProducts(data.filter((item) => item.IsDeleted === false));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteObjectAsync = async (id) => {
    try {
      await axiosInstance.delete(`v1/product?id=${id}`);
      await getProductsAsync();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductsAsync();
  }, []);

  const columns = useMemo(() => [
    {
      Header: "Nombre",
      accessor: "name",
    },
    {
      Header: "Precio",
      accessor: "price",
    },
    {
      Header: "Costo",
      accessor: "cost",
    },
    {
      Header: "Beneficio",
      accessor: "benefit",
    },
  ]);

  return (
    <>
      <Table
        columns={columns}
        data={products}
        setObject={setSelectedItem}
        deleteObject={deleteObjectAsync}
      />
      <ProductPopUp getProducts={getProductsAsync} defaultData={selectedItem} />
    </>
  );
}
