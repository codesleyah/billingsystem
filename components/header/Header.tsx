import Topbar from "./topbar/Topbar"
import Navbar from "./navbar/Navbar"

export default function Header(){
    return(
        <div className="w-screen flex flex-col gap-1">
            <Topbar />
            <Navbar />
        </div>
    )
}