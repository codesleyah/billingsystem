import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router';
import NewReading from '../components/modals/newreading';
import Bill from '../components/modals/bill';


export default function Faults() {

      let readings = [
        {
            "date": "12 January 2023",
            "address": "1068 mbavazuva",
            "reading": "85764846476",
        },
        {
            "date": "14 January 2023",
             "address": "1 Mutohwe",
            "reading": "18564653380",
        },
        {
            "date": "1 February 2023",
            "address": "171 malta braeside",
            "reading": "74647337363",
        },
        {
            "date": "2 May 2023",
            "address": "10 king george",
            "reading": "76497376536",
        },
        {
            "date": "1 January 2023",
            "address": "18 mbira street",
            "reading": "84767356377",
        },
        {
            "date": "12 May 2023",
            "address": "1 Gondo road",
            "reading": "87567458373",
        },
           {
            "date": "12 February 2023",
            "address": "8 nhindi street",
            "reading": "84646576536",
        }
    ]
    const [showmodal, setShowmodal] = useState(false)
    const [showbillmodal, setShowBillmodal] = useState(false)
    const [billdate, setBillDate] = useState("")
    const [billaddress, setBillAdress] = useState("")
    const [billreading, setBillReading] = useState("")

    const showBill = (reading:string, address: string, date:string) => {
        setBillAdress(address);
        setBillDate(date);
        setBillReading(reading)
        setShowBillmodal(true)
    }

  return (
 
      <div className="w-screen h-screen bg-gray-100 flex flex-col pb-16 pt-32">
        {showmodal && <NewReading onClose={()=> setShowmodal(false)}/>}
        {showbillmodal && <Bill reading={billreading} address={billaddress} date={billdate} onClose={()=> setShowBillmodal(false)}/>}
        {/* header start */}
        <div className="flex row w-full h-16 bg-green-900 items-center justify-between px-32 absolute  top-0">
           <h1 className="text-3xl text-white font-bold">CITY OF HARARE WATER BILLING SYSTEM</h1>
        </div>
        {/* header end */}
       <div className="w-full h-full px-32 flex flex-col items-center justify-center">
         <div className="shadow  flex flex-col gap-4 p-4 h-full  w-full bg-gray-200">
         <div className="flex flex-row items-center justify-between bg-white p-4">

            <h1 className="text-2xl font-bold">Readings</h1>
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
                        <td className="p-2 font-bold">Meter Reading</td>
                        <td className="p-2 font-bold">Action</td>
                    </tr>
                </thead>
                <tbody>
                    {readings.map((reading, i) => (
                        <tr className="bg-gray-100" key={i}>
                        <td className="p-2">{reading.date}</td>
                        <td className="p-2">{reading.address}</td>
                        <td className="p-2">{reading.reading}</td>
                        <td className="p-2">
                            <button  className="bg-green-900 text-white p-2 rounded" onClick={() => showBill(reading.reading,reading.address,reading.date)}>
                                Generate Statement
                            </button>   
                        </td>
                    </tr>    
                    ))}                  
                </tbody>
            </table>
            <div className='flex flex-row justify-end p-4'>
                <button  className="bg-green-900 text-white p-2 rounded"  onClick={() => setShowmodal(true)}>
                    Add New Reading
                </button>   
            </div>
         </div>
        </div>
       </div>
      </div>
   
  )
}
