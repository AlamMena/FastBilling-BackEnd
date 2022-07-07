import { useEffect, useMemo, useState } from "react";
import ProductPopUp from "../Components/ProductsComponents/Product_PopUp";
import useAxios from "../Axios/axios";
import Alert from "../Components/AlertsComponents/Alert";
import Table from "../Components/ProductsComponents/Table";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [popUpIsOpen, setPopUpIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [alertType, setAlertType] = useState();
  const [alertDescription, setAlertDescription] = useState();
  const [alertOpen, setAlertOpen] = useState(false);
  const { axiosInstance } = useAxios();

  const getProductsAsync = async () => {
    try {
      const { data } = await axiosInstance.get("v1/products?page=1&limit=200");
      console.log(data);
      setProducts(data.filter((item) => item.IsDeleted === false));
    } catch (error) {
      console.log(error);
    }
  };

  const handleAlert = (description, type) => {
    setAlertType(type);
    setAlertDescription(description);
    setAlertOpen(true);
    setTimeout(() => {
      setAlertOpen(false);
    }, 2000);
  };
  const deleteObjectAsync = async (id) => {
    try {
      await axiosInstance.delete(`v1/product?id=${id}`);
      await getProductsAsync();
      handleAlert("Producto eliminado exitosamente", "Success");
    } catch (error) {
      handleAlert("Ha ocurrido un error eliminando un producto", "Error");
      console.log(error);
    }
  };

  useEffect(() => {
    getProductsAsync();
  }, []);

  const columns = useMemo(() => [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "Image",
      accessor: "images",
    },
    {
      Header: "Nombre",
      accessor: "name",
    },
    {
      Header: "Comprado",
      accessor: "bought",
    },
    {
      Header: "Vendido",
      accessor: "sold",
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
    {
      Header: "Estatus",
      accessor: "IsDeleted",
    },
  ]);

  const handleOpenPupOp = () => {
    if (popUpIsOpen) {
      setPopUpIsOpen(false);
    } else {
      setPopUpIsOpen(true);
    }
  };
  return (
    <>
      <Table
        columns={columns}
        data={products}
        setObject={setSelectedItem}
        deleteObject={deleteObjectAsync}
        setPopUpIsOpen={handleOpenPupOp}
      />
      <div className={`${!popUpIsOpen && "hidden"} flex`}>
        <ProductPopUp
          getData={getProductsAsync}
          defaultData={selectedItem}
          setPopUpIsOpen={handleOpenPupOp}
          handleAlert={handleAlert}
        />
      </div>
      {alertOpen && <Alert description={alertDescription} type={alertType} />}
    </>
  );
}
