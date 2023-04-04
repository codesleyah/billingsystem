import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router';
import Bill from '../components/modals/bill';


export default function Faults() {

    const [showbillmodal, setShowBillmodal] = useState(false)
    const [billdate, setBillDate] = useState("")
    const [billaddress, setBillAdress] = useState("")
    const [billreading, setBillReading] = useState("")


   

  return (
 
      <div className="w-screen h-screen bg-gray-100 flex flex-col pb-16 pt-32">
        {showbillmodal && <Bill reading={billreading} address={billaddress} date={billdate} onClose={()=> setShowBillmodal(false)}/>}
        {/* header start */}
        <div className="flex row w-full h-16 bg-green-900 items-center justify-between px-32 absolute  top-0">
           <h1 className="text-3xl text-white font-bold">CITY OF HARARE WATER BILLING SYSTEM</h1>
        </div>
        {/* header end */}
       <div className="w-full h-full px-32 flex flex-col items-center justify-center">
         <div className="shadow  flex flex-col gap-4 p-4 h-full  w-full bg-gray-200">
         <div className="flex flex-row items-center justify-between bg-white p-4">

            <h1 className="text-2xl font-bold">Statements</h1>
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
         <div className="flex flex-col w-full h-full w-full bg-white justify-center gap-8">
           <div className="grid grid-cols-3 w-full p-4 gap-4">
                <input placeholder="Address" type="text" className="p-2 border-2 border-gray-200 rounded" onChange={e => setBillAdress(e.target.value)}/> 
                <input placeholder="Last Meter Reading" type="text" className="p-2 border-2 border-gray-200 rounded"  onChange={e => setBillReading(e.target.value)}/> 
                <input placeholder="Date" type="text" className="p-2 border-2 border-gray-200 rounded"  onChange={e => setBillDate(e.target.value)}/> 
           </div>
            <div className='flex flex-row justify-center p-4'>
                <button  className="bg-green-900 text-white p-2 rounded" onClick={() => setShowBillmodal(true)}>
                    Generate Statement
                </button>   
            </div>
         </div>
        </div>
       </div>
      </div>
   
  )
}
