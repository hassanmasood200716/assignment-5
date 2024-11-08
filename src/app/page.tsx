import Header from "@/components/header";
import Main from "@/components/main";

import Link from "next/link";

import React from "react";
const Homepage = () => {
  return (
    <div>
      <Header></Header>
      <main className="flex">
        <div className="m-[10%] p-2 w-1/2">
          <div className="border-0 font-bold font-serif text-[28px] w-[400px] p-4">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </div>
          <div className="border-0 font-medium font-serif p-4 w-[550px] text-[#787054] font-sans">
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </div>
          <div>
            <button className="bg-[#A29875;] text-white p-2 m-4">EXPLORE NOW</button>
          </div>
        </div>
        <div>
          <div className="my-[35%]">
            <img
              className="h-[425px] object-contain border-1 rounded-tl-[31%] rounded-tr-[0%] rounded-bl-[0%] rounded-br-[25%] overflow-hidden"
              src="/images/images.jpeg"
              alt=""
            />
          </div>
        </div>
      </main>
    </div >
  );
}
export default Homepage;
<a href="./about" className="about">about</a>