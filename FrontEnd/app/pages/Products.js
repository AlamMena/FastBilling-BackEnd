import { useEffect, useMemo, useState } from "react";
import ProductPopUp from "../Components/ProductsComponents/Product_PopUp";
import useAxios from "../Axios/axios";
import Alert from "../Components/AlertsComponents/Alert";
import Table from "../Components/ProductsComponents/Table";
import Chart from "../Components/ProductsComponents/Brand_chart";
import BrandPopUp from "../Components/BrandsComponents/Brand_popup";

export default function Products() {
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);
  const [popUpIsOpen, setPopUpIsOpen] = useState(false);
  const [brandPopUp, setBrandPopUp] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [alertType, setAlertType] = useState();
  const [alertDescription, setAlertDescription] = useState();
  const [alertOpen, setAlertOpen] = useState(false);
  const { axiosInstance } = useAxios();

  const getProductsAsync = async () => {
    try {
      const { data } = await axiosInstance.get("v1/products?page=1&limit=200");
      setProducts(data.filter((item) => item.IsDeleted === false));
    } catch (error) {
      console.log(error);
    }
  };

  const getBrandsAsync = async () => {
    try {
      const { data } = await axiosInstance.get("v1/brands?page=1&limit=20");
      console.log(data);
      setBrands(data.filter((item) => item.IsDeleted === false));
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

  const deleteBrandAsync = async (id) => {
    try {
      await axiosInstance.delete(`v1/brand?id=${id}`);
      await getBrandsAsync();
      handleAlert("Marca eliminada exitosamente", "Success");
    } catch (error) {
      handleAlert("Ha ocurrido un error eliminando la marca", "Error");
      console.log(error);
    }
  };

  useEffect(() => {
    getProductsAsync();
    getBrandsAsync();
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

  const handleBrandPopUp = () => {
    if (brandPopUp) {
      setBrandPopUp(false);
    } else {
      setBrandPopUp(true);
    }
  };
  return (
    <>
      <div className="grid grid-cols-12">
        <div className=" col-span-12 md:col-span-7">
          <Table
            columns={columns}
            data={products}
            setObject={setSelectedItem}
            deleteObject={deleteObjectAsync}
            setPopUpIsOpen={handleOpenPupOp}
          />
        </div>
        <div className=" col-span-12 md:col-span-5">
          <Chart
            marcas={brands}
            setBrandPopUp={handleBrandPopUp}
            deleteBrand={deleteBrandAsync}
          />
        </div>
      </div>
      <div className={`${!popUpIsOpen && "hidden"} flex`}>
        <ProductPopUp
          getData={getProductsAsync}
          defaultData={selectedItem}
          setPopUpIsOpen={handleOpenPupOp}
          handleAlert={handleAlert}
        />
      </div>
      <div className={`${!brandPopUp && "hidden"} flex`}>
        <BrandPopUp
          getData={getBrandsAsync}
          defaultData={selectedItem}
          setBrandPopUp={handleBrandPopUp}
          setAlertOpen={setAlertOpen}
          handleAlert={handleAlert}
        />
      </div>

      {alertOpen && <Alert description={alertDescription} type={alertType} />}
    </>
  );
}
