import styles from "../../styles/Home.module.css";

import { useRouter } from "next/router";

export default function BannerText() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-8 py-4">
      <div
        className="grid grid-cols-2 items-center  gap-4 px-4 py-8 text-white "
      >
        <div className="flex flex-col  col-span-2 md:col-span-1 md:px-32 justify-start gap-4">
        <text className="font-sans text-3xl md:text-7xl font-bold ">
          Trust. Knowledge. Experience.
        </text>
        <text className="items-center  md:text-2xl font-sans text-xl">
          No more VIP Fees . Just Open account Using our Patner Broker, Boom you
          welcome to the Blue Roof Trading Group Just Signup Below
        </text>
       <div className=" md:w-1/2">
       
       </div>
        </div>

      </div>
    </div>
  );
}
