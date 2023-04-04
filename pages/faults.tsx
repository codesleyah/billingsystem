import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router';
import NewFault from '../components/modals/newfault';


export default function Faults() {

      const [showmodal, setShowmodal] = useState(false)



  return (
 
      <div className="w-screen h-screen bg-gray-100 flex flex-col pb-16 pt-32">
        {showmodal && <NewFault  onClose={()=> setShowmodal(false)}/>}
        {/* header start */}
        <div className="flex row w-full h-16 bg-green-900 items-center justify-between px-32 absolute  top-0">
           <h1 className="text-3xl text-white font-bold">CITY OF HARARE WATER BILLING SYSTEM</h1>
        </div>
        {/* header end */}
       <div className="w-full h-full px-32 flex flex-col items-center justify-center">
         <div className="shadow  flex flex-col gap-4 p-4 h-full  w-full bg-gray-200">
         <div className="flex flex-row items-center justify-between bg-white p-4">

            <h1 className="text-2xl font-bold">Faults</h1>
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
                        <td className="p-2 font-bold">Location / Adress</td>
                        <td className="p-2 font-bold">Fault/Issue</td>
                        <td className="p-2 font-bold">Case number</td>
                        <td className="p-2 font-bold">Status</td>
                        <td className="p-2 font-bold">Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-gray-100">
                        <td className="p-2">1481 Washington avenues waterfalls</td>
                        <td className="p-2">Burst water pipe</td>
                        <td className="p-2">C12XYTM42</td>
                        <td className="p-2 bg-yellow-500">In progress</td>
                        <td className="p-2">Delete</td>
                    </tr>
                      <tr className="bg-green-100">
                        <td className="p-2">5387 Mufakose 2</td>
                        <td className="p-2">Blocked sewer pipe</td>
                        <td className="p-2">C12XHGYM42</td>
                        <td className="p-2 bg-red-500">Pending</td>
                        <td className="p-2">Delete</td>
                    </tr>
                      <tr className="bg-gray-100">
                        <td className="p-2">Selous Avenues CBD</td>
                        <td className="p-2">No piped water</td>
                        <td className="p-2">C12XPKJ42</td>
                        <td className="p-2 bg-green-500">Solved</td>
                        <td className="p-2">Delete</td>
                    </tr>
                </tbody>
            </table>
            <div className='flex flex-row justify-end p-4'>
                <button  className="bg-green-900 text-white p-2 rounded" onClick={() => setShowmodal(true)}>
                    Add New Case
                </button>   
            </div>
         </div>
        </div>
       </div>
      </div>
   
  )
}
