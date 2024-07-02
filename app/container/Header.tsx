"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/imo-vn-co-ltd.png";
import SearchForm from "@/components/SearchForm";

// containars
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import HotlineButton2 from "@/components/HotlineButton2";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    handleScroll(); // Initialize state based on current scroll position

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <header className={`${isSticky ? 'py-1 bg-[rgba(255,255,255,0.9)] shadow-md dark:bg-[rgba(255,255,255,0.9)]' : 'py-1 md:py-2 shadow-md dark:bg-transparent'} sticky top-0 z-30 transition-all`}>
        <div className="container mx-auto flex justify-between items-center">
            {/* logo */}
            <Link href='/'>
                <Image
                    src={Logo}
                    alt="imo-vn"
                    priority
                    className="w-36 md:w-48"
                />
            </Link>
            
            {/* desktop Nav */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav/>
                <SearchForm/>
                <motion.div
                  variants = {fadeIn('left', 0.1)}
                  initial = 'hidden'
                  whileInView={'show'}
                  viewport={{ once:false, amount: 0.2 }}
                >
                  <HotlineButton2 text="Hotline: 0902 226 119" containerStyles="block items-center bg-primary" />
                </motion.div>
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