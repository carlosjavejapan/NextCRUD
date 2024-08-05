import {Navbar} from "@/components";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CarlosJave Next CRUD",
  description: "nextjs 使って APP作成",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-gray-950`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
