import React from "react";
import useAxios from "../Axios/axios";
import { useState, useEffect, useMemo } from "react";
import BrandPopUp from "../Components/BrandsComponents/Brand_popup";
import BrandTable from "../Components/BrandsComponents/Brand_table";
import Alert from "../Components/AlertsComponents/Alert";

export default function Brands() {
  const [brands, setBrands] = useState([]);

  const [popUpIsOpen, setPopUpIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [alertOpen, setAlertOpen] = useState(false);
  const { axiosInstance } = useAxios();

  const getBrandsAsync = async () => {
    try {
      const { data } = await axiosInstance.get("v1/brands?page=1&limit=20");
      console.log(data);

      setBrands(data.filter((item) => item.IsDeleted === false));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteObjectAsync = async (id) => {
    try {
      await axiosInstance.delete(`v1/brand?id=${id}`);
      await getBrandsAsync();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBrandsAsync();
  }, []);

  const handleOpenPupOp = () => {
    if (popUpIsOpen) {
      setPopUpIsOpen(false);
    } else {
      setPopUpIsOpen(true);
    }
  };

  const columns = useMemo(() => [
    {
      Header: "Nombre de la marca",
      accessor: "name",
    },
    {
      Header: "Descripcion",
      accessor: "description",
    },
  ]);

  return (
    <>
      <BrandTable
        columns={columns}
        data={brands}
        setObject={setSelectedItem}
        deleteObject={deleteObjectAsync}
        setPopUpIsOpen={handleOpenPupOp}
      />
      <div className={`${!popUpIsOpen && "hidden"} flex`}>
        <BrandPopUp
          getData={getBrandsAsync}
          defaultData={selectedItem}
          setPopUpIsOpen={handleOpenPupOp}
          setAlertOpen={setAlertOpen}
        />
      </div>
      {alertOpen && <Alert />}
    </>
  );
}