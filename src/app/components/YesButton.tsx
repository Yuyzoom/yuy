"use client";

import { motion } from "framer-motion";

interface YesButtonProps {
  scale: number;
  onClick: () => void;
}

export default function YesButton({ scale, onClick }: YesButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      animate={{ scale: scale }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      whileHover={{ scale: scale * 1.05 }}
      whileTap={{ scale: scale * 0.95 }}
      className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg shadow-lg transition-colors duration-200 text-sm sm:text-base touch-manipulation"
      style={{
        minWidth: "100px",
        maxWidth: "90vw",
      }}
      aria-label="Yes button"
    >
      ຮັກ! ❤️
    </motion.button>
  );
}
