"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Success() {
  const router = useRouter();

  const hearts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <main className="flex min-h-screen items-center justify-center p-4 overflow-hidden">
      {/* Floating hearts background */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-3xl sm:text-4xl md:text-6xl pointer-events-none"
          style={{ left: `${heart.x}%` }}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{
            y: "-100vh",
            opacity: [0, 1, 1, 0],
            rotate: 360
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ❤️
        </motion.div>
      ))}

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay: 0.2
        }}
        className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 max-w-2xl w-full text-center relative z-10"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-valentine-600 mb-4 sm:mb-6"
        >
          ຂ້ອຍຮູ້ແລ້ວ! ❤️
        </motion.h1>

        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8"
        >
          ຂອບໃຈທີ່ເວົ້າວ່າຮັກ! 💕
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="text-7xl sm:text-8xl md:text-9xl mb-6 sm:mb-8"
        >
          😍
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={() => router.push("/")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-valentine-500 hover:bg-valentine-600 active:bg-valentine-700 text-white font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg shadow-lg transition-colors duration-200 text-sm sm:text-base touch-manipulation"
        >
          ກັບຄືນ
        </motion.button>
      </motion.div>
    </main>
  );
}
