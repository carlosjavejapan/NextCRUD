"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {

  const currentPath = usePathname();

  return (
    <nav className="shadow-lg sticky left-0 top-0 right-0 z-20 bg-slate-100 dark:bg-slate-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h3 className="font-bold text-3xl text-slate-800 dark:text-slate-300">
          <Link href="/">
            CJD<span className="text-rose-700 font-light">NextCRUD</span>
          </Link>
        </h3>
        <div className="flex gap-10 items-center w-full md:w-auto justify-between">
          <ul className="flex gap-x-4 text-slate-900 dark:text-slate-100">
            <li
              className={
                currentPath == "/new"
                  ? "border-b border-rose-700 py-2"
                  : "border-b border-transparent hover:text-slate-950 py-2"
              }
            >
              <Link href="/new">New Task</Link>
            </li>
            <li
              className={
                currentPath == "/about"
                  ? "border-b border-rose-700 py-2"
                  : "hover:text-slate-950 py-2"
              }
            >
              <Link href="/about">About</Link>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar