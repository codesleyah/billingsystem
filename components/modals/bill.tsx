import React, { useState } from "react";

interface ModalProps {
    onClose : () => void;
    address: string;
    reading: string;
    date: string;
}

const Bill = ({onClose, address,reading, date}: ModalProps) => {


    return (
        <div className="absolute bg-transparent-white flex flex-col items-center justify-center p-32 top-0 z-10 h-screen w-screen">
            <div className="bg-white shadow rounded w-96 h-full flex flex-col p-4 gap-4">
                <div className="flex flex-row justify-end ">
                    <button  className="border-2 border-gray-200 text-black p-2 rounded" onClick={onClose}>
                        Close
                    </button>
                </div>
                <div className="flex flex-col items-center justify-between h-full">
                    <div>
                        <div className="flex flex-col gap-4 p-4 h-full ">
                            <h1 className="text-xl font-bold">Water Statement</h1>
                            <h1 className="text-xs font-bold -mt-4">{date}</h1>
                            <div className="flex flex-row">
                            <h1 className="text-base font-bold">Address : </h1> 
                            <h1 className="text-base">{address}</h1> 
                            </div>
                            <div className="flex flex-row">
                            <h1 className="text-base font-bold">Last Meter Reading : </h1> 
                            <h1 className="text-base">{reading} </h1> 
                            </div>
                            <div className="flex flex-row">
                            <h1 className="text-base font-bold">Balance Due : </h1> 
                            <h1 className="text-base">RTGS 345 000</h1> 
                            </div>
                            <div className="flex flex-row">
                            <h1 className="text-base font-bold">VAT: </h1> 
                            <h1 className="text-base">2%</h1> 
                            </div>
                            <div className="flex flex-row">
                            <h1 className="text-base font-bold">Rates: </h1> 
                            <h1 className="text-base">5%</h1> 
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center">
                        <button  className="bg-green-900 text-white p-2 rounded" onClick={() => {}}>
                            Print Statement
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Bill