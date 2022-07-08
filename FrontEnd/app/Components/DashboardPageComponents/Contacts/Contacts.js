import React from "react";
import { AiOutlineUser } from "react-icons/ai";

export default function Contact() {
  return (
    <div className="flex justify-between items-center mt-2">
      <div className="flex">
        <div className=" text-3xl p-2">
          <AiOutlineUser />
        </div>
        <div className="font-bold text-sm p-1">
          <div>Alexito</div>
          <div className=" text-green-400 text-xs">12.9%</div>
        </div>
      </div>
      <div className="flex flex-col items-end text-xs">
        <div className="text-gray-400 mb-1">Ganancias</div>
        <div className="font-bold">$12,430</div>
      </div>
    </div>
  );
}
