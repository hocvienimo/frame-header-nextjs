"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import welcome from "@/public/images/wellcome-imo-vn.png";
import { CiMenuFries } from "react-icons/ci";
import SearchForm from "@/components/SearchForm";


const linksMenu = [
    { name: "Trang chủ", path: "/"},
    { name: "Giới thiệu", path: "/about" },
    { name: "Dịch vụ", path: "/services"},
    { name: "Blog", path: "/blog"},
    { name: "Liên hệ", path: "/contact"}
]

const MobileNav = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const closeMenu = () => {
      setIsOpen(false);
    };

  return (
    <section>
      <div className="flex items-center">
        <SearchForm />
        <button onClick={toggleMenu}>
          <CiMenuFries className="text-[28px] text-primary" />
        </button>
      </div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <div className="hidden" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          {/* logo brand iMovn */}
          <div className="mt-32 mb-20 m-auto">
            <Link href='/' onClick={closeMenu}>
              <Image
                src={welcome}
                width={180}
                alt="imo-vn"
                priority
              />
            </Link>
          </div>

          {/* nav */}
          <nav className="flex flex-col items-center justify-center gap-8">
            {linksMenu.map((link, index) => (
              <Link
                href={link.path}
                key={index}
                onClick={closeMenu}
                className={`${link.path === pathname ? 'text-accent' : ''} text-lg font-secondary capitalize font-medium hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav