'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLink = (href: string, label: string) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        onClick={() => setOpen(false)}
        className={`block py-2 text-base md:text-lg font-semibold transition ${
          isActive
            ? 'text-blue-600 border-b-2 border-blue-600 md:pb-1'
            : 'text-black hover:text-blue-600'
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 w-full bg-white z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/branding/logo/smv-color.png"
              alt="ESSEMVEE logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="hidden sm:block text-lg md:text-xl font-extrabold tracking-wide text-black">
              ESSEMVEE TECHNOLOGY SERVICES
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-10">
            {navLink('/', 'Home')}
            {navLink('/services', 'Services')}
            {navLink('/about', 'About')}
            {navLink('/contact', 'Contact')}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-black"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-6">
          <nav className="flex flex-col gap-6 text-lg">
            {navLink('/', 'Home')}
            {navLink('/services', 'Services')}
            {navLink('/about', 'About')}
            {navLink('/contact', 'Contact')}
          </nav>
        </div>
      )}
    </header>
  );
}
