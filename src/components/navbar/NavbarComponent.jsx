"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HamburgerButton from "./HamburgerButton";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    hidden: { opacity: 0, y: -256 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="z-30 relative font-poppins">
      <nav
        className="flex justify-between items-center p-4 shadow-lg shadow-[#a7f000] z-40 relative bg-black lg:px-10 "
        style={{ boxShadow: "0px 4px 6px rgba(167, 240, 0, 0.12)" }}
      >
        <div className="flex flex-row gap-2">
          <Image src="/icons/kiit-logo.png" width={45} height={40} alt="logo" />
          <h1 className="text-3xl">
            Alumni <span className="text-[#a7f000]">Network</span>
          </h1>
        </div>
        <div className="hidden md:flex md:gap-9">
          <Link
            href="/"
            className="hover:scale-110 hover:text-[#a7f000] transition-all"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:scale-110 hover:text-[#a7f000] transition-all"
          >
            About
          </Link>
          <Link
            href="/resources"
            className="hover:scale-110 hover:text-[#a7f000] transition-all"
          >
            Resources
          </Link>
          <Link
            href="/chat"
            className="hover:scale-110 hover:text-[#a7f000] transition-all"
          >
            Chats
          </Link>
          <Link
            href="/about/#contact"
            className="hover:scale-110 hover:text-[#a7f000] transition-all"
          >
            Contact
          </Link>
        </div>
        <div
          className="hidden md:block relative"
          onMouseEnter={() => setIsHovered(!isHovered)}
          onMouseLeave={() => setIsHovered(!isHovered)}
        >
          <motion.div
            initial={{ width: "100%" }}
            animate={isHovered ? { width: 0 } : { width: "100%" }}
            transition={{ duration: 0.5, ease: [0.17, 0.55, 0.55, 1] }}
            className="absolute w-full h-full bg-[#a7f000]"
          ></motion.div>
          <motion.button
            transition={{ duration: 0.5, ease: [0.17, 0.55, 0.55, 1] }}
            whileHover={{ color: "#a7f000", borderColor: "#a7f000" }}
            className="w-full h-full relative z-10 py-2 px-5 border border-background"
            style={{ color: "#000000" }}
          >
            Premium
          </motion.button>
        </div>
        <div className="md:hidden flex justify-center items-center">
          <HamburgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <div className={`relative`}>
            <motion.div
              key={"hamburger"}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
              transition={{ duration: 0.5 }}
              className="w-full bg-black flex flex-col gap-4 p-4 md:hidden absolute"
            >
              <Link
                href="/"
                className="hover:text-lg hover:text-[#a7f000] transition-all"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-lg hover:text-[#a7f000] transition-all"
              >
                About
              </Link>
              <Link
                href="/resources"
                className="hover:text-lg hover:text-[#a7f000] transition-all"
              >
                Resources
              </Link>
              <Link
                href="/chat"
                className="hover:text-lg hover:text-[#a7f000] transition-all"
              >
                Chats
              </Link>
              <Link
                href="/contact"
                className="hover:text-lg hover:text-[#a7f000] transition-all"
              >
                Contact
              </Link>
              <div>
                <button className="py-2 px-5 border border-foreground hover:text-lg hover:text-[#a7f000] hover:border-[#a7f000] transition-all">
                  Premium
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}