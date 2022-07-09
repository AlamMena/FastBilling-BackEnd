import DashboardCard from "../Components/DashboardPageComponents/Dashboard_Card/Dashboard_card";
import React, { useContext } from "react";
import AuthContext from "../Auth/AuthContext";
import Chart from "../Components/DashboardPageComponents/Dashboard_brand";
import BigChart from "../Components/DashboardPageComponents/Dashboard_big_chart";
import Activity from "../Components/DashboardPageComponents/Contacts/Dasboard_activity";
import Brands from "./Brands";
import useAxios from "../Axios/axios";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [brands, setBrands] = useState([]);
  const { axiosInstance } = useAxios();

  const getBrandsAsync = async () => {
    try {
      const response = await axiosInstance.get("v1/brands?page=1&limit=20");
      console.log(response);
      setBrands(data.filter((item) => item.IsDeleted === false));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBrandsAsync();
    console.log(brands);
  }, []);

  return (
    <div className="p-4">
      <div className="grid grid-cols-12">
        <div className=" col-span-12 md:col-span-7 p-2 ">
          <DashboardCard />
          <BigChart />
        </div>
        <div className=" col-span-12 md:col-span-5 p-4">
          <Chart data={brands} />
          <Activity />
        </div>
      </div>
    </div>
  );
}
