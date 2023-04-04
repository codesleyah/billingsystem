import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router';


export default function Home() {

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Login = () => {
    if(email === "linda@gmail.com" && password === "linda123"){
      router.push("/dashboard");
    }
  }

  return (
 
      <div className="w-screen h-screen bg-gray-100 flex flex-col items-center justify-center">
        {/* header start */}
        <div className="flex row w-full h-16 bg-green-900 items-center justify-between px-32 absolute top-0">
           <h1 className="text-3xl text-white font-bold">CITY OF HARARE WATER BILLING SYSTEM</h1>
           <div className="hidden md:flex gap-4 items-center">
                <Link href="#"><text className="text-white">Client</text></Link>
                <Link href="/#"><text className="text-white">Admin</text></Link>
           </div>
        </div>
        {/* header end */}
        <div className="bg-white shadow rounded flex flex-col gap-4 p-4 w-96">
          <h1 className="text-black text-2xl font-bold">Login</h1>
          <input placeholder="email" type="email" className="p-2 border-2 border-gray-200 rounded" onChange={e => setEmail(e.target.value)}/> 
          <input placeholder="password" type="password" className="p-2 border-2 border-gray-200 rounded" onChange={e => setPassword(e.target.value)}/> 
          <button  className="bg-green-900 text-white p-4 rounded" onClick={Login}>
            Login
          </button>
        </div>
      </div>
   
  )
}
