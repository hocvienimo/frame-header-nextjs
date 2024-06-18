"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/imo-vn-co-ltd.png";
import { Button } from "@/components/ui/button";

// containars
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 20 ? setHeader(true) : setHeader (false);
    });

    //remove Evants
    return () => window.removeEventListener('scroll', scrollYPos);
  });

  return (
    <header className={`${header ? 'py-1 bg-[rgba(255,255,255,0.9)] shadow-sm dark:bg-[rgba(255,255,255,0.9)]' : 'py-3 dark:bg-transparent'} sticky top-0 z-30 transition-all`}>
        <div className="container mx-auto flex justify-between items-center">
            {/* logo */}
            <Link href='/'>
                <Image
                    src={Logo}
                    alt="imo-vn"
                    priority="true"
                    className="w-40 xl:w-48"
                />
            </Link>

            {/* desktop Nav */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav/>
                <Button className="text-[#fff]">0902 226 119</Button>
            </div>

            {/* mobile nav */}
            <div className="xl:hidden">
                <MobileNav/>
            </div>
        </div>
    </header>
  )
}

export default Header