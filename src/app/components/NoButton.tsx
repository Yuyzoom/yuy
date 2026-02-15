"use client";

import { motion, AnimatePresence } from "framer-motion";

interface NoButtonProps {
  onClick: () => void;
  visible: boolean;
}

export default function NoButton({ onClick, visible }: NoButtonProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={onClick}
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gray-400 hover:bg-gray-500 active:bg-gray-600 text-white font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg shadow-lg transition-colors duration-200 text-sm sm:text-base touch-manipulation"
          style={{ minWidth: "100px" }}
          aria-label="No button"
        >
          ບໍ່
        </motion.button>
      )}
    </AnimatePresence>
  );
}
