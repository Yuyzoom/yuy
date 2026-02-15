"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import YesButton from "./components/YesButton";
import NoButton from "./components/NoButton";

export default function Home() {
  const router = useRouter();
  const [noClickCount, setNoClickCount] = useState(0);
  const [yesButtonScale, setYesButtonScale] = useState(1);

  const handleNoClick = () => {
    setNoClickCount((prev) => prev + 1);
    setYesButtonScale((prev) => Math.min(prev * 1.4, 5.5));
  };

  const handleYesClick = () => {
    router.push("/success");
  };

  // Hide "No" button after 6 clicks
  const showNoButton = noClickCount < 6;

  return (
    <main className="flex min-h-screen items-center justify-center p-4 overflow-hidden">
      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 max-w-2xl w-full text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-valentine-600 mb-6 sm:mb-8">
          ເຈົ້າຮັກຂ້ອຍບໍ່?
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12">
          ເລືອກໃຫ້ດີນໍ... 💝
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center min-h-[120px]">
          <YesButton scale={yesButtonScale} onClick={handleYesClick} />
          <NoButton onClick={handleNoClick} visible={showNoButton} />
        </div>

        {noClickCount > 0 && showNoButton && (
          <p className="mt-8 text-sm text-gray-500 italic">
            ກົດ "ບໍ່": {noClickCount} ຄັ້ງ {noClickCount >= 4 && "😏"}
          </p>
        )}

        {!showNoButton && (
          <p className="mt-8 text-lg text-valentine-500 font-semibold animate-pulse">
            ຂ້ອຍຄິດວ່າການເລືອກຊັດເຈນແລ້ວ... 😊
          </p>
        )}
      </div>
    </main>
  );
}
