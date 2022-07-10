import react from "react";
import {
  AiOutlineEllipsis,
  AiOutlineUser,
  AiOutlineHeatMap,
  AiOutlineDelete,
} from "react-icons/ai";
import { useEffect } from "react";

export default function Dashboard_Brands({
  marcas,
  getData,
  deleteBrand,
  setBrandPopUp,
  handleAlert,
}) {
  const Marca = marcas.map((item, index) => {
    return (
      <div
        className="flex justify-between p-3 odd:bg-gray-100 items-center"
        key={index}
      >
        <div className="flex items-center">
          <div className=" text-3xl">
            <AiOutlineHeatMap />
          </div>
          <div className="font-bold text-sm p-1 px-4 ">
            <div>{item.name}</div>
          </div>
        </div>
        <div className="text-gray-400 text-xs hidden md:block ">
          {item.description}
        </div>
        <div className=" p-2" onClick={() => deleteBrand(item._id)}>
          <AiOutlineDelete />
        </div>
      </div>
    );
  });

  return (
    <div className=" h-80 w-full  bg-white rounded-lg p-3 flex flex-col md:mx-3 mt-2 md:mt-0 mx-0">
      <div className="p-1 mb-3">
        <div className="text-lg font-semibold tracking-wide">Marcas</div>
      </div>
      <div className=" overflow-auto ">{Marca}</div>
      <div className="mt-auto">
        <button
          className=" border-2 border-gray-400 p-2 w-full rounded-lg = text-gray-700 tracking-wide font-semibold mt-2"
          onClick={() => setBrandPopUp(true)}
        >
          Nueva Marca
        </button>
      </div>
    </div>
  );
}
