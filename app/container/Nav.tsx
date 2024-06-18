"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const linksMenu = [
    {
        name: "Trang chủ",
        path: "/",
    },

    {
        name: "Giới thiệu",
        path: "/about",
    },

    {
        name: "Dịch vụ",
        path: "/services",
    },

    {
        name: "Blog",
        path: "/blog",
    },

    {
        name: "Liên hệ",
        path: "/contact",
    },
];

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex gap-8">
        {linksMenu.map((link, index) => {
            return (
                <Link 
                href={link.path} 
                key={index} 
                className={`${link.path === pathname && "text-accent"} text-lg font-secondary capitalize font-semibold hover:text-accent transition-all`}>
                    {link.name}
                </Link>
            );
        })}
    </nav>
  );
}

export default Nav