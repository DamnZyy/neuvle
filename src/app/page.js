'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Fade as Hamburger } from 'hamburger-react'
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck } from "react-icons/fa6";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { NavAccordion, NavAccordionContent, NavAccordionItem, NavAccordionTrigger } from "@/components/ui/nav-accordion"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export default function Page() {
  const [showShadow, setShowShadow] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
  function handleScroll() {
      if (window.scrollY > 0) {
          setShowShadow(true);
      } else {
          setShowShadow(false);
      }
  }
      window.addEventListener('scroll', handleScroll);
  return () => {
      window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  const Menubar = () => {
      setShowNavbar(!showNavbar);
      setOpen(!isOpen)
  }

  const Colleges = [
    { name: "College of Accountancy", link: "https://meet.google.com/ree-xcya-sis" },
    { name: "College of Agriculture", link: "https://meet.google.com/noz-odzt-iih" },
    { name: "College of Arts and Sciences", link: "https://meet.google.com/pja-jxzt-ocp" },
    { name: "College of Business Administration", link: "https://meet.google.com/foa-egug-yfd"},
    { name: "College of Communication", link: "https://meet.google.com/mqa-mfuz-bpe" },
    { name: "College of Informatics and Computing Studies", link: "https://meet.google.com/orf-owbe-gef" },
    { name: "College of Criminology", link: "https://meet.google.com/vxo-xjdp-cjj" },
    { name: "College of Education", link: "https://meet.google.com/qur-vwxp-vmb" },
    { name: "College of Engineering & Architecture", link: "https://meet.google.com/evu-xpbm-psv" },
    { name: "College of Law", link: "https://meet.google.com/xsn-jtnn-xjq" },
    { name: "College of Medical Technology", link: "https://meet.google.com/jxw-chrh-kph" },
    { name: "College of Medicine", link: "https://meet.google.com/cst-mqtn-nps" },
    { name: "College of Midwifery", link: "https://meet.google.com/jah-diue-ufr" },
    { name: "College of Music", link: "https://meet.google.com/weh-grje-dvq" },
    { name: "College of Nursing", link: "https://meet.google.com/ndx-hggm-jdp" },
    { name: "College of Physical Therapy", link: "https://meet.google.com/ggy-deww-ptz" },
    { name: "College of Respiratory Therapy", link: "https://meet.google.com/pxv-hqyw-qpc" },
    { name: "School of International Relations", link: "https://meet.google.com/byg-cfea-jcd" },
  ];

  return (
    <div>
              <nav className={`w-full z-30 fixed bg-white transition-all ${showShadow ? (showNavbar ? "" : "shadow-xl") : ''}`}>
                <div className="flex relative justify-between max-w-7xl m-auto p-2">
                    <span className='text-lg font-semibold flex items-center'>
                      <Image src="/logo.jpg" alt='logo' width={100} height={100} className='rounded-full h-auto w-12' ></Image>
                    </span>
                    <ul className='bg-transparent justify-center items-center gap-7 text-sm hidden xlarge:flex'>
                        <li className='hover:text-primary cursor-pointer transition-colors'><Link href="https://is2425.neu.edu.ph/login/index.php">K to 12 Integrated School</Link></li>
                        <li className='hover:text-primary cursor-pointer transition-colors'><Link href="https://college2425.neu.edu.ph/login/index.php?">Undergraduate Programs</Link></li>
                        <li className='hover:text-primary cursor-pointer transition-colors'><Link href="https://college2425.neu.edu.ph/login/index.php?">Graduate Programs</Link></li>
                        <NavigationMenu>
                          <NavigationMenuList>
                            <NavigationMenuItem>
                              <NavigationMenuTrigger>Virtual Offices</NavigationMenuTrigger>
                              <NavigationMenuContent>
                                <ul className="w-60 p-3 flex flex-col items-start gap-y-2 justify-start">
                                  <li className='hover:text-primary cursor-pointer'><Link href="https://meet.google.com/vdy-enbt-xyo" target='_blank'>Computer Services Department</Link></li>
                                  <li className='hover:text-primary cursor-pointer'><Link href="https://meet.google.com/dzv-pmbk-ivp" target='_blank'>Guidance Office</Link></li>
                                  <li className='hover:text-primary cursor-pointer'><Link href="https://meet.google.com/mxo-kyxn-yxs" target='_blank'>Library Department</Link></li>
                                </ul>
                              </NavigationMenuContent>
                            </NavigationMenuItem>
                          </NavigationMenuList>
                        </NavigationMenu>
                        <NavigationMenu>
                          <NavigationMenuList>
                            <NavigationMenuItem>
                              <NavigationMenuTrigger>Contact Us</NavigationMenuTrigger>
                              <NavigationMenuContent>
                                <ul className="w-40 p-3 flex flex-col items-start gap-y-2 justify-start">
                                  <li className='hover:text-primary cursor-pointer'><Link href="https://forms.gle/XtWPEuzSEHMyaUP69" target='_blank'>CSD Help Desk</Link></li>
                                  <li className='hover:text-primary cursor-pointer'><Link href="https://meet.google.com/vdy-enbt-xyo" target='_blank'>CSD Virtual Office</Link></li>
                                </ul>
                              </NavigationMenuContent>
                            </NavigationMenuItem>
                          </NavigationMenuList>
                        </NavigationMenu>
                        <NavigationMenu>
                          <NavigationMenuList>
                            <NavigationMenuItem>
                              <NavigationMenuTrigger>ID Processing Form</NavigationMenuTrigger>
                              <NavigationMenuContent>
                                <ul className="w-[200px] p-3 flex flex-col items-start gap-y-2 justify-start">
                                  <li className='hover:text-primary cursor-pointer'><Link href="https://forms.gle/GWbM8zGHHFhC6CPw7" target='_blank'>IS (K-12) Processing Form</Link></li>
                                  <li className='hover:text-primary cursor-pointer'><Link href="https://forms.gle/GWbM8zGHHFhC6CPw7" target='_blank'>Tertiary (Undergraduate and Graduate Studies) Processing Form</Link></li>
                                </ul>
                              </NavigationMenuContent>
                            </NavigationMenuItem>
                          </NavigationMenuList>
                        </NavigationMenu>
                        <li className='hover:text-primary cursor-pointer transition-colors'><Link href="https://neu.edu.ph/main/datapriv.html">Privacy Notice</Link></li>
                    </ul>
                    <div className='flex justify-center items-center'>
                        <button className="block xlarge:hidden z-50" onClick={Menubar}>
                          <Hamburger size={20} direction="left" distance="sm" toggled={isOpen} />
                        </button>
                    </div>
                </div>
            </nav>

{/*             <ul className={`bg-white z-10 fixed flex justify-center items-center flex-col shadow-xl gap-11 py-10 mt-14 left-0 w-full xlarge:hidden transition-all  ${showNavbar ? "-translate-y-0 " : "-translate-y-[26rem]"}`}>
                <li onClick={() => {Menubar(); window.scrollTo({ top: 0, behavior: 'smooth' })}}>Home</li>
                <li onClick={() => {Menubar(); const element = aboutRef.current;if (element) {const scrollPosition = element.getBoundingClientRect().top + window.scrollY - 50;window.scrollTo({top: scrollPosition, behavior: 'smooth'});}}}>About</li>
                <li onClick={() => {Menubar(); const element = serviceRef.current;if (element) {const scrollPosition = element.getBoundingClientRect().top + window.scrollY - 80;window.scrollTo({top: scrollPosition, behavior: 'smooth'});}}}>Services</li>
                <li onClick={() => {Menubar(); const element = portfolioRef.current;if (element) {const scrollPosition = element.getBoundingClientRect().top + window.scrollY - 100;window.scrollTo({top: scrollPosition, behavior: 'smooth'});}}}>Portfolio</li>
                <li onClick={() => {Menubar(); contactRef.current?.scrollIntoView({ bottom: 0, behavior: 'smooth'})}}>Contact</li>
            </ul> */}

            <ul className={`bg-white z-50 fixed py-10 pt-0 right-0 h-full w-64 xlarge:hidden transition-all ${showNavbar ? "translate-x-0" : "translate-x-64"}`}>
              <div className='flex justify-end items-end p-2 '>
                  <button className="block xlarge:hidden z-50" onClick={Menubar}>
                    <Hamburger size={20} direction="left" distance="sm" toggled={isOpen} />
                  </button>
              </div>
              <div className='flex justify-start items-start flex-col gap-y-5 p-5'>
                <div className='w-[100%] hover:text-primary cursor-pointer transition-colors'>
                  <Link href="https://is2425.neu.edu.ph/login/index.php">K to 12 Integrated School</Link>
                  <div className='pb-3'></div>
                  <hr/>
                </div>
                <div className='w-[100%] hover:text-primary cursor-pointer transition-colors'>
                  <Link href="https://college2425.neu.edu.ph/login/index.php?">Undergraduate Programs</Link>
                  <div className='pb-3'></div>
                  <hr/>
                </div>
                <div className='w-[100%] hover:text-primary cursor-pointer transition-colors'>
                  <Link href="https://college2425.neu.edu.ph/login/index.php?">Graduate Programs</Link>
                  <div className='pb-3'></div>
                  <hr/>
                </div>
                <NavAccordion type="single" collapsible className='w-full'>
                  <NavAccordionItem value="nav-3">
                    <NavAccordionTrigger className="text-start w-full">Virtual Offices</NavAccordionTrigger>
                    <NavAccordionContent className="text-gray-500 hover:text-black transition-colors cursor-pointer pb-1"><Link href="https://meet.google.com/vdy-enbt-xyo">Computer Services Department</Link></NavAccordionContent>
                    <NavAccordionContent className="text-gray-500 hover:text-black transition-colors cursor-pointer pb-1"><Link href="https://meet.google.com/dzv-pmbk-ivp">Guidance Office</Link></NavAccordionContent>
                    <NavAccordionContent className="text-gray-500 hover:text-black transition-colors cursor-pointer"><Link href="https://meet.google.com/mxo-kyxn-yxs">Library Department</Link></NavAccordionContent>
                  </NavAccordionItem>
                </NavAccordion>
                <NavAccordion type="single" collapsible className='w-full'>
                  <NavAccordionItem value="nav-3">
                    <NavAccordionTrigger className="text-start w-full">Contact Us</NavAccordionTrigger>
                    <NavAccordionContent className="text-gray-500 hover:text-black transition-colors cursor-pointer pb-1"><Link href="https://forms.gle/XtWPEuzSEHMyaUP69">CSD Help Desk</Link></NavAccordionContent>
                    <NavAccordionContent className="text-gray-500 hover:text-black transition-colors cursor-pointer"><Link href="https://meet.google.com/vdy-enbt-xyo">CSD Virtual Office</Link></NavAccordionContent>
                  </NavAccordionItem>
                </NavAccordion>
                <NavAccordion type="single" collapsible className='w-full'>
                  <NavAccordionItem value="nav-3">
                    <NavAccordionTrigger className="text-start w-full">ID Processing Form</NavAccordionTrigger>
                    <NavAccordionContent className="text-gray-500 hover:text-black transition-colors cursor-pointer pb-1"><Link href="https://forms.gle/GWbM8zGHHFhC6CPw7">IS (K-12) Processing Form</Link></NavAccordionContent>
                    <NavAccordionContent className="text-gray-500 hover:text-black transition-colors cursor-pointer"><Link href="https://forms.gle/GWbM8zGHHFhC6CPw7">Tertiary (Undergraduate and Graduate Studies) Processing Form</Link></NavAccordionContent>
                  </NavAccordionItem>
                </NavAccordion>
                <div className='w-[100%] hover:text-primary cursor-pointer transition-colors'>
                  <Link href="https://neu.edu.ph/main/datapriv.html">Privacy Notice</Link>
                  <div className='pb-3'></div>
                  <hr/>
                </div>
              </div>
            </ul>

            <section  className={`bg-black/75 h-full w-full fixed z-[30] transition-colors backdrop-blur-[7px] xlarge:hidden ${showNavbar ? "-translate-x-[0%]" : "-translate-x-[100%]"}`}></section>

            <section className='max-w-full m-auto'>
              <div className='relative w-full h-[550px] bg-primary bg-no-repeat bg-cover bg-center bg-fixed bg-[url("/Backgroud.jpg")]'>
                <div className='text-[#098ef1] z-30 pt-[6rem] flex flex-col max-w-7xl m-auto text-center'>
                  <p className='text-5xl sm:text-6xl base:text-7xl xlarge:text-8xl font-bold relative'>NEUVLE</p>
                  <p className='text-base sm:text-xl font-semibold'>We innovate to make things easier for you.</p>
                </div>
              </div>
            </section>

            <section className='max-w-[1340px] m-auto p-5 pt-16'>
              <div className='relative pt-12 h-[470px] medium:h-[550px] large:h-[670px] m-auto bg-[#f0f4fb] rounded-3xl'>
                <div className='text-center max-w-[880px] sm:pb-10 px-4 m-auto'>
                  <p className=' text-3xl sm:text-[45px] font-bold text-[#302f40] pb-4'>Overview</p>
                  <p className='text-gray-500'>NEUVLE (New Era University Virtual Learning Environment) serves as a learning resource. It encompasses all online settings that serve as course supplements, including virtual classrooms, reading materials, educational websites with independent skill tests, and informational resources.</p>
                </div>
                <div className='max-w-[1075px] absolute m-auto inset-x-0 '>
                  <div className='relative p-2 sm:p-4 large:p-6 linear -bottom-16 rounded-2xl mx-5'>
                    <Image src="/Overview.jpg" alt='Overview' width={1050} height={1050} className='rounded-xl'></Image>
                  </div>
                </div>
              </div>
            </section>

            <section className='max-w-[1340px] m-auto p-5 mt-40 medium:flex'>
              <div className='basis-2/4'>
                <p className='text-[#302f40] text-[26px] font-bold mb-8'>Face-to-Face</p>
                <p className='max-w-[400px] text-gray-500'>NEUVLE will also be used as a centralized platform to supplement face-to-face time and facilitate the delivery of course content.</p>
                <Image src="/NEU.jpg" alt='NEU' width={630} height={100} className='mt-14'></Image>
              </div>

              <div className='basis-1/2 mt-10 medium:mt-0'>
                <div className='flex gap-4'>
                  <div>
                    <Image src="/Creativity1.png" alt='icon1' width={45} height={45} className='min-w-10'></Image>
                  </div>
                  <div className='max-w-[560px] pb-10'>
                    <p className='text-xl font-bold pb-3'>Discover</p>
                    <p className='pb-10 text-gray-500'>Many of the online digital tools and features can help foster peer engagement and reflective learning outside classroom time, such as discussion boards and blogs.</p>
                    <p className='text-gray-500 pb-10'>NEUVLE serves as a repository for online learning resources such as video guides, podcasts, study aids, quizzes. This allows students to revisit concepts and information any time they need.</p>
                    <hr/>
                  </div>
                </div>

                <div className='flex gap-4'>
                  <div>
                    <Image src="/Creativity2.png" alt='icon2' width={45} height={45} className='min-w-10'></Image>
                  </div>
                  <div className='max-w-[560px] pb-10'>
                    <p className='text-xl font-bold pb-3'>Virtual Offices</p>
                    <p className='pb-5 text-gray-500'>NEUVLE will continue to host open office hours so that students and parents can connect to someone &lsquo;face-to-face&rsquo; throughout the work day.</p>
                    <p className='text-gray-500 pb-10'>We recommend that if you want to inquire from a specific department, you contact them directly by selecting &lsquo;Virtual Office&rsquo; as indicated.</p>
                    <hr/>
                  </div>
                </div>

                <div className='text-gray-500 flex flex-col gap-y-3  pl-5 '>
                  <div className='flex items-center justify-start gap-3'>
                    <FaCheck className='text-black' />
                    <p className='flex'>Log-in using your @neu email</p>
                  </div>
                  <div className='flex items-center justify-start gap-3'>
                    <FaCheck className='text-black' />
                    <p className='flex'>Must open your camera</p>
                  </div>
                  <div className='flex items-center justify-start gap-3'>
                    <FaCheck className='text-black' />
                    <p className='flex'>Mute your microphone</p>
                  </div>
                  <div className='flex items-center justify-start gap-3'>
                    <FaCheck className='text-black' />
                    <p className='flex'>Fill-up the online form</p>
                  </div>
                  <div className='flex items-center justify-start gap-3'>
                    <FaCheck className='text-black' />
                    <p className='flex'>Wait for your turn, the staff will call you</p>
                  </div>
                </div>

              </div>
            </section>

            <section className='max-w-[1340px] m-auto p-5 pt-20 base:flex justify-between'>
              <div className='basis-[40%]'>
                <div>
                  <p className='text-xl sm:text-2xl medium:text-3xl font-semibold mb-5'>Virtual Offices</p>
                </div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-primary text-start">College Virtual Offices</AccordionTrigger>
                    {Colleges.map((College, index) => <AccordionContent className="text-gray-500 hover:text-black transition-colors cursor-pointer" key={index}><Link href={College.link}>{College.name}</Link></AccordionContent>)}
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-primary text-start">Integrated School</AccordionTrigger>
                    <AccordionContent className="text-gray-500 hover:text-black transition-colors cursor-pointer"><Link href="https://meet.google.com/piv-nxzb-hcq">Integrated School</Link></AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-primary text-start">Department Virtual Offices</AccordionTrigger>
                    <AccordionContent className="text-gray-500 hover:text-black transition-colors cursor-pointer"><Link href="https://meet.google.com/vdy-enbt-xyo">Computer Services Department</Link></AccordionContent>
                    <AccordionContent className="text-gray-500 hover:text-black transition-colors cursor-pointer"><Link href="https://meet.google.com/dzv-pmbk-ivp">Guidance Office</Link></AccordionContent>
                    <AccordionContent className="text-gray-500 hover:text-black transition-colors cursor-pointer"><Link href="https://meet.google.com/mxo-kyxn-yxs">Library Department</Link></AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className='basis-[55%] pt-16 base:pt-0'>
                <Image src="/Meet.png" alt='Google Meet' width={1000} height={1000}></Image>
              </div>

            </section>

            <section className='max-w-7xl m-auto pt-20'>
              <div className='flex flex-col items-center justify-center text-center'>
                <Image src="/School.png" alt='school' width={950} height={950} className='hidden base:flex'></Image>
                <p className='pt-20 max-w-[1100px] italic px-7'>&quot;For serving our fellowmen should be the essence od education. To seek the well-being of other is one ofe the loftiest goals of learning... In NEU, your education was reinforced with love of fellowmen, of country, and above all, of God...&quot;</p>
              </div>
            </section>

            <section className='max-w-7xl m-auto flex flex-col items-center justify-center pb-28 pt-32'>
              <Image src="/Arena.png" alt='Arena' width={210} height={210}></Image>
              <p className='text-gray-500 max-w-[620px] text-center px-7'>Brother EDUARDO V. MANALO, Executive Minister of the Iglesia Ni Cristo, on his message to the NEU Graduates 2018 & 2019, Philippine Arena.</p>
            </section>

            <footer className='bg-[#171717] text-white'>
              <p className='text-sm py-8 text-right pr-5'>© 2024 New Era University. All Rights Reserved Designed By CSD</p>
            </footer>
    </div>
  )
}
