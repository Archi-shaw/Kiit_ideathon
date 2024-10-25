import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="px-10 font-poppins border-b-1 border-white flex items-center justify-start gap-10 py-3 bg-[#0a0a0a] text-white">
      <Image src="/icons/kiit-logo.png" width={40} height={40} alt="logo" />
      <h1 className="text-2xl">KIIT</h1>
    </header>
  );
};

export default Header;
