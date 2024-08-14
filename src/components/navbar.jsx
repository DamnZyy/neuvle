'use client'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Fade as Hamburger } from 'hamburger-react'

export default function Navbar({logo}) {
    const [showNavbar, setShowNavbar] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const pathname = usePathname();

    function MenuBar() {
        setShowNavbar(!showNavbar);
        setOpen(!isOpen);
    }
  return (
    <>
        <nav className='w-full py-1 px-2 z-30 fixed bg-[#faf5ee] almost:shadow-darks'>
            <div className="flex justify-between max-w-7xl m-auto p-3">
                <div className='flex gap-11'>

                    <span className='font-semibold flex items-center'>
                        <div onClick={MenuBar}>
                            <Hamburger size={20} direction="right" distance="sm" toggled={isOpen} />
                        </div>
                        <Image src={logo} alt='logo' className='absolute hidden almost:block' width={100} height={100}></Image>
                    </span>

                    <ul className={`justify-center items-center gap-7 font-semibold ml-20 hidden almost:flex`}>
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/menu">Menu</NavLink>
                        <NavLink href="/delivery" dynamicMatch={pathname.startsWith("/delivery")}>Delivery</NavLink>
                        <NavLink href="/promos">Promos</NavLink>
                        <NavLink href="/franchising">Franchising</NavLink>
                        <NavLink href="/news">News</NavLink>
                    </ul>

                </div>

                <div className='flex items-center justify-center gap-5 text-sm'>
                    <Link href="/menu" className='text-white bg-green-600 px-4 py-2 rounded-xl hover:bg-green-800 transition-colors font-bold tracking-wide'>ORDER NOW</Link>
                </div>
            </div>
        </nav>
{/*         bg-default z-10 fixed flex justify-center items-center flex-col shadow-xl gap-11 py-10 mt-14 left-0 w-full md:hidden transition-all */}
        <ul className={`bg-[#faf5ee] z-10 fixed flex justify-center items-center flex-col shadow-darks gap-11 py-10 mt-16 left-0 w-full almost:hidden transition-all  ${showNavbar ? "-translate-y-0 " : "-translate-y-[500px]"}`}>
            <ResponsiveLink onClick={MenuBar} href="/">Home</ResponsiveLink>
            <ResponsiveLink onClick={MenuBar} href="/menu">Menu</ResponsiveLink>
            <ResponsiveLink onClick={MenuBar} href="/delivery" dynamicMatch={pathname.startsWith("/delivery")}>Delivery</ResponsiveLink>
            <ResponsiveLink onClick={MenuBar} href="/promos">Promos</ResponsiveLink>
            <ResponsiveLink onClick={MenuBar} href="/franchising">Franchising</ResponsiveLink>
            <ResponsiveLink onClick={MenuBar} href="/news">News</ResponsiveLink>
        </ul>
    </>
  )
}

export function NavLink({children, href, dynamicMatch}) {
    const pathname = usePathname();
    const isActive = dynamicMatch ? pathname.startsWith(href) : pathname === href;
    return (
        <li className={`cursor-pointer transition-colors ${isActive ? 'text-[#2d9751]' : 'text-black'}`}>
            <Link href={href}>{children}</Link>
        </li>
    )
}

export function ResponsiveLink({children, href, dynamicMatch, onClick}) {
    const pathname = usePathname();
    const isActive = dynamicMatch ? pathname.startsWith(href) : pathname === href;
    return (
        <li className={`font-semibold ${isActive ? 'text-[#2d9751]' : 'text-black'}`}>
            <Link onClick={onClick} href={href}>{children}</Link>
        </li>
    )
}
