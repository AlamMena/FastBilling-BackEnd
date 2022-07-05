import { useEffect, useState } from "react";
import { AiFillDelete, AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";

export default function ({ images, setImages }) {
    const handleImageInput = (e) => {
        const url = URL.createObjectURL(e.target.files[0]);
        setImages([...images, url]);
    }

    return <div className="bg-white rounded-lg my-3 mx-3">
        <div className="relative cursor-pointer outline outline-1 outline-neutral-300 shadow-sm px-4 py-2 rounded-lg">
            <input type="file" onChange={handleImageInput} className="bg-black cursor-pointer  absolute inset-0 opacity-0 z-10"></input>
            <span className="cursor-pointer">Select an image</span>
        </div>
        <div className="relative  mx-auto grid grid-cols-12 outline-dashed outline-neutral-200 space-y-2 md:space-y-0 bg-gray-100  rounded-lg px-4 py-8 my-4">
            <span className="text-sm text-neutral-400 absolute w-full flex justify-center h-full items-center">Listado de imagenes</span>
            {images && images.map((url) => {
                return (<div className="col-span-12 md:col-span-3  m-3">
                    <div className="relative">
                        <img className="w-full h-24 cursor-pointer shadow-md rounded-lg" src={url}>
                        </img>
                        <AiOutlineCloseCircle onClick={() => { setImages(images.filter(item => item !== url)), console.log(url) }} className="text-neutral-400 text-lg absolute top-0 right-0 -mt-2" />
                    </div>
                </div>);
            })}

        </div>
    </div>
}