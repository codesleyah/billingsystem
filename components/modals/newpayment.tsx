import React, { useState } from "react";

interface ModalProps {
    onClose : () => void;
}

const NewPayment = ({onClose}: ModalProps) => {

    const [date, setDate] = useState("");
    const [address, setAddress] = useState("");
    const [amount, setAmount] = useState("");
    const [amountpaid, setAmountPaid] = useState("");
    const [showreceipt,setShowReceipt] = useState(false);
    return (
        <div className="absolute bg-transparent-white flex flex-col items-center justify-center p-32 top-0 z-10 h-screen w-screen">
            <div className="bg-white shadow rounded w-full h-full flex flex-col p-4 gap-4">
                <div className="flex flex-row justify-end ">
                    <button  className="border-2 border-gray-200 text-black p-2 rounded" onClick={onClose}>
                        Close
                    </button>
                </div>
                <div className="grid grid-cols-2 gap-4 p-4">
                    <div className="flex flex-col gap-2 border-2 border-gray-200 p-8">
                        <h1 className="text-2xl font-bold">Record Payment</h1>
                        <input placeholder="Date" type="text" className="p-2 border-2 border-gray-200 rounded" onChange={e => setDate(e.target.value)}/> 
                        <input placeholder="physical Address" type="text" className="p-2 border-2 border-gray-200 rounded" onChange={e => setAddress(e.target.value)}/> 
                        <input placeholder="Amount" type="text" className="p-2 border-2 border-gray-200 rounded" onChange={e => setAmount(e.target.value)}/> 
                        <input placeholder="Amount Paid" type="text" className="p-2 border-2 border-gray-200 rounded" onChange={e => setAmountPaid(e.target.value)}/> 
                         <div className='flex flex-row justify-end p-4'>
                            <button  className="bg-green-900 text-white p-2 rounded" onClick={() => {setShowReceipt(true)}}>
                                Submit Payment
                            </button>   
                        </div>
                    </div>
                    { showreceipt && <div className="flex flex-col gap-4  p-8">
                        <h1 className="text-2xl font-bold">Payment Recorded Successfully</h1>
                        <text className="text-sm font-bold">12 January 2024</text>
                        <text className="text-base font-semibold">Address : {address}</text>
                        <text className="text-base font-semibold">Amount : {amount}</text>
                        <text className="text-base font-semibold">Amount Paid : {amountpaid}</text>
                         <div className='flex flex-row justify-end p-4'>
                            <button  className="bg-green-900 text-white p-2 rounded" onClick={() => {}}>
                                Print Receipt
                            </button>   
                        </div>
                    </div>}
                    
                </div>
                
            </div>
        </div>
    )
}
export default NewPayment