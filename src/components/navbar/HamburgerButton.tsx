// components/AnimatedHamburger.tsx
import { motion } from "framer-motion";
import React from "react";

interface AnimatedHamburgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const HamburgerButton: React.FC<AnimatedHamburgerProps> = ({
  isOpen,
  toggleMenu,
}) => {
  const lineVariants = {
    openTop: { rotate: 45, y: 5 },
    closed: { rotate: 0, y: 0 },
    openBottom: { rotate: -45, y: -5 },
    hide: { width: 0 },
  };

  return (
    <button
      onClick={toggleMenu}
      className="focus:outline-none flex justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center">
        <motion.div
          className="bg-white w-6 h-[1px] mb-1"
          variants={lineVariants}
          animate={isOpen ? "openTop" : "closed"}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="bg-white w-6 h-[1px] mb-1"
          variants={lineVariants}
          animate={isOpen ? "hide" : "closed"}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="bg-white w-6 h-[1px]"
          variants={lineVariants}
          animate={isOpen ? "openBottom" : "closed"}
          transition={{ duration: 0.3 }}
        />
      </div>
    </button>
  );
};

export default HamburgerButton;
