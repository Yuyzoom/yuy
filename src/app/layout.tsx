import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ເຈົ້າຮັກຂ້ອຍບໍ່? ❤️",
  description: "ຂອງຂວັນວັນວາເລນໄທທີ່ຫນ້າຮັກ",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-red-200">
        {children}
      </body>
    </html>
  );
}
