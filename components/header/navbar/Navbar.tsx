import Link from "next/link"


export default function Navbar() {
    return(
        <div className="flex row w-full h-16 bg-black items-center justify-between px-32">
           <img src="/images/logo.png" alt="logo" />
           <div className="hidden md:flex gap-4 items-center">
                <Link href="/"><text className="text-white">Trade</text></Link>
                <Link href="/about"><text className="text-white">Learn</text></Link>
                <Link href="/contact"><text className="text-white">Markest</text></Link>
                <Link href="/login"><text className="text-white">Signals</text></Link>
                <Link href="/login"><text className="text-white">Brokers</text></Link>
                <Link href="/login"><text className="text-white">Mentors</text></Link>
           </div>
        </div>
    )
} 
