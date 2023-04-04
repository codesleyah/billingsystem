import React, { useState } from "react";

interface ModalProps {
    onClose : () => void;
}

const NewUser = ({onClose}: ModalProps) => {


    return (
        <div className="absolute bg-transparent-white flex flex-col items-center justify-center p-32 top-0 z-10 h-screen w-screen">
            <div className="bg-white shadow rounded w-full h-full flex flex-col p-4 gap-4">
                <div className="flex flex-row justify-end ">
                    <button  className="border-2 border-gray-200 text-black p-2 rounded" onClick={onClose}>
                        Close
                    </button>
                </div>
                <div className="flex flex-col gap-4 p-4 h-full items-center justify-center">
                     <div className="grid grid-cols-4 w-full p-4 gap-4">
                            <input placeholder="First Name" type="text" className="p-2 border-2 border-gray-200 rounded"/> 
                            <input placeholder="Last Name" type="text" className="p-2 border-2 border-gray-200 rounded"/> 
                            <input placeholder="Employee number" type="text" className="p-2 border-2 border-gray-200 rounded"/> 
                            <input placeholder="Position" type="text" className="p-2 border-2 border-gray-200 rounded"/>
                    </div>
                    <div className='flex flex-row justify-center p-4'>
                        <button  className="bg-green-900 text-white p-2 rounded">
                            Add User
                        </button>   
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}
export default NewUser