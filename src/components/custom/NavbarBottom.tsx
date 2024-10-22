"use client"
import { cn } from "@/lib/utils";


import {
  Briefcase,
  FolderGit2,
  GraduationCap,
  HomeIcon,
  Mail,
  MoreHorizontal,
 
  User,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/animation/DockAnimation';

import Link from "next/link";
import { useEffect, useState } from "react";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";

const NavbarBottom = () => {
  // const items = [
  //   { name: "Home", icon: <Home />, link: "/" },
  //   { name: "About", icon: <User />, link: "/about" },
  //   { name: "Skills", icon: <Briefcase />, link: "/skills" },
  //   { name: "Education", icon: <GraduationCap />, link: "/education" },
  //   { name: "Projects", icon: <FolderGit2 />, link: "/projects" },
  //   { name: "Contact", icon: <Mail />, link: "/contact" },
  //   { name: "More", icon: <MoreHorizontal />, link: "/more" },
  // ]
  const data = [
    {
      title: 'Home',
      icon: (
        <HomeIcon className='h-full w-full ' />
      ),
      href: '/',
    },
    {
      title: 'About',
      icon: (
        <User className='h-full w-full ' />
      ),
      href: '/about',
    },
    {
      title: 'Experience and Skills',
      icon: (
        <Briefcase className='h-full w-full ' />
      ),
      href: '/experience-skills',
    },
    {
      title: 'Education',
      icon: (
        <GraduationCap className='h-full w-full ' />
      ),
      href: '/education',
    },
    // {
    //   title: 'Projects',
    //   icon: (
    //     <FolderGit2 className='h-full w-full ' />
    //   ),
    //   href: '/projects',
    // },
   
    {
      title: 'Contact us',
      icon: (
        <Mail className='h-full w-full ' />
      ),
      href: '/contact',
    },
    // {
    //   title: 'More',
    //   icon: (
    //     <MoreHorizontal className='h-full w-full ' />
    //   ),
    //   href: '/more',
    // },
  ];
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname()
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
 
    <div className={`flex  gap-3 items-center justify-center fixed bottom-0 left-0 right-0  px-0 sm:px-5 m-auto w-full sm:w-fit bg-transparent z-[+9999999] ${scrolling ? "hidden":"block"}`}>
    <div className="md:flex items-center md:ml-[-100px]">
    <div className="hidden md:block"> <ThemeToggle/></div>
    <Dock className='items-end pb-3 rounded-full'>
      {data.map((item, idx) => (
        <Link href={item.href} key={idx}>

        <DockItem
          className={cn("aspect-square rounded-full bg-gray-200 dark:bg-neutral-800",pathname === item.href && " bg-gray-100 border border-primary}")}
          >
          <DockLabel >{item.title}</DockLabel>
          <DockIcon className={cn(pathname === item.href && "text-[#2f7df4]")}>{item.icon}</DockIcon>
        </DockItem>
          </Link>
      ))}
     
    </Dock>
    </div>
    
    </div>
  );
};

export default NavbarBottom;