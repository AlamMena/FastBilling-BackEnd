import React from "react";
import Contacts from "./Contacts";

export default function Activity() {
  return (
    <div className=" bg-white mt-3 rounded-lg h-44 p-2 px-4">
      <div className="flex justify-between items-center">
        <div className=" tracking-wide font-semibold">Contactos</div>
        <div className=" text-xs text-blue-600 font-semibold">See more</div>
      </div>
      <div className="mt-2 overflow-y-auto h-3/4">
        <Contacts />
        <Contacts />
        <Contacts />
        <Contacts />
      </div>
    </div>
  );
}
