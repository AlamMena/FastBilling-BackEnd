import { AiFillAlert, AiOutlineClose } from "react-icons/ai";

export default function () {
    return (<div className="fixed bottom-10 right-4">
        <div className="flex">
            <div className=" min-h-full w-1 rounded-lg bg-green-500"></div>
            <div className="bg-white w-96 px-4 py-4 flex items-center space-x-4 rounded-r-lg">
                <img src="https://cdn-icons.flaticon.com/png/512/4436/premium/4436481.png?token=exp=1656951698~hmac=299da585715b908576f6375ae7e81b9b" className="w-8 h-8"></img>
                <div className="flex w-full justify-between items-center">
                    <div className="flex flex-col">
                        <h1 className="font-semibold">Success!</h1>
                        <span className="text-sm">Product succesfully saved!.</span>
                    </div>
                    <AiOutlineClose />
                </div>


            </div>
        </div>

    </div>)
}