import Link from 'next/link'
import { useState } from 'react'
import NewPayment from '../components/modals/newpayment';

export default function Home() {

    let payments = [
        {
            "date": "12 January 2023",
            "address": "1068 mbavazuva",
            "amount": "RTGS 240 000",
        },
        {
            "date": "14 January 2023",
            "address": "10 Mudzo street",
            "amount": "RTGS 8 000",
        },
        {
            "date": "1 February 2023",
            "address": "171 malta braeside",
            "amount": "RTGS 50 000",
        },
        {
            "date": "2 May 2023",
            "address": "10 king george",
            "amount": "RTGS 20 500",
        },
        {
            "date": "1 January 2023",
            "address": "18 mbira street",
            "amount": "RTGS 10 000",
        },
        {
            "date": "12 May 2023",
            "address": "1 Gondo road",
            "amount": "RTGS 250 060",
        },
           {
            "date": "12 February 2023",
            "address": "8 nhindi street",
            "amount": "RTGS 210 840",
        }
    ]

  const [showmodal, setShowmodal] = useState(false)

  return (
 
      <div className="w-screen h-screen bg-gray-100 flex flex-col pb-16 pt-32">
        {showmodal && <NewPayment onClose={()=> setShowmodal(false)}/>}
        {/* header start */}
        <div className="flex row w-full h-16 bg-green-900 items-center justify-between px-32 absolute  top-0">
           <h1 className="text-3xl text-white font-bold">CITY OF HARARE WATER BILLING SYSTEM</h1>
        </div>
        {/* header end */}
       <div className="w-full h-full px-32 flex flex-col items-center justify-center">
         <div className="shadow  flex flex-col gap-4 p-4 h-full  w-full bg-gray-200">
         <div className="flex flex-row items-center justify-between bg-white p-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex flex-row items-center gap-4">
                <Link href="/dashboard">
                    <text className="text-base font-semibold">Payments</text>
                </Link>
                <Link href="/readings">
                    <text className="text-base font-semibold">Meter Readings</text>
                </Link>
                <Link href="/statements">
                    <text className="text-base font-semibold">Water statements</text>
                </Link>
                <Link href="/faults">
                    <text className="text-base font-semibold">Faults</text>
                </Link>
                <Link href="/users">
                    <text className="text-base font-semibold">Users</text>
                </Link>
                <Link href="/">
                    <text className="text-base font-semibold">Logout</text>
                </Link>
            </div>  
         </div>
         <div className="flex flex-col w-full h-full w-full bg-white justify-between">
            <table>
                <thead className="bg-green-100">
                    <tr>
                        <td className="p-2 font-bold">Date</td>
                        <td className="p-2 font-bold">Address</td>
                        <td className="p-2 font-bold">Amount</td>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment,i) => (
                        <tr className="bg-gray-100" key={i}>
                            <td className="p-2">{payment.date}</td>
                            <td className="p-2">{payment.address}</td>
                            <td className="p-2">{payment.amount}</td>   
                        </tr>
                    ))}                      
                </tbody>
            </table>
            <div className='flex flex-row justify-end p-4'>
                <button  className="bg-green-900 text-white p-2 rounded" onClick={() => setShowmodal(true)}>
                    Add New Payment
                </button>   
            </div>
         </div>
        </div>
       </div>
      </div>
   
  )
}
