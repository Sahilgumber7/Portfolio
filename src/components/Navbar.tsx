"use client"
import { cn } from "@/lib/utils";


import {
  Briefcase,
  FolderGit2,
  GraduationCap,
  HomeIcon,
  LightbulbIcon,
  Mail,
  MoreHorizontal,

  User,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/animation/DockAnimation';

import Link from "next/link";
import { useEffect, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import FramerWrapper from "./animation/FramerWrapper";
import { usePathname } from "next/navigation";

const Navbar = () => {

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
      title: 'Skills',
      icon: (
        <LightbulbIcon className='h-full w-full ' />
      ),
      href: '/skills',
    },
    {
      title: 'Education',
      icon: (
        <GraduationCap className='h-full w-full ' />
      ),
      href: '/education',
    },
    {
      title: 'Experience',
      icon: (
        <Briefcase className='h-full w-full ' />
      ),
      href: '/experience',
    },

    {
      title: 'Projects',
      icon: (
        <FolderGit2 className='h-full w-full ' />
      ),
      href: '/projects',
    },

    {
      title: 'Contact Me',
      icon: (
        <Mail className='h-full w-full ' />
      ),
      href: '/contact',
    },
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

    <div className={`fixed top-5 right-0 left-0 px-0 sm:px-5 m-auto w-full sm:w-fit bg-transparent z-[+9999999] ${scrolling ? "hidden" : "block"}`}>
      <Dock className='items-end pb-3 rounded-full'>
        {data.map((item, idx) => (
          <Link href={item.href} key={idx}>

            <DockItem
              className={cn("aspect-square rounded-full backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/10", pathname === item.href && " bg-white/60 dark:bg-black/60 !border-2 !border-black dark:border-white shadow-lg")}
            >
              <DockLabel >{item.title}</DockLabel>
              <DockIcon className={cn(pathname === item.href && "text-black dark:text-white")}>{item.icon}</DockIcon>
            </DockItem>
          </Link>
        ))}
        <DockItem
          className={cn("aspect-square rounded-full backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/10")}
        >
          <DarkModeToggle />
          <DockLabel>Dark Mode</DockLabel>
        </DockItem>

      </Dock>

    </div>
  );
};

export default Navbar;
