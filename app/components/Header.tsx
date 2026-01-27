'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItem = (href: string, label: string) => (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className={`block py-3 text-lg font-semibold ${
        pathname === href
          ? 'text-blue-600'
          : 'text-black hover:text-blue-600'
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="fixed top-0 w-full bg-white z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* LOGO */}
          <Link
            href="/"
            className="text-lg md:text-2xl font-extrabold tracking-wide text-black"
          >
            ESSEMVEE TECHNOLOGY SERVICES
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-lg font-semibold text-black">
              Home
            </Link>
            <Link href="/services" className="text-lg font-semibold text-black">
              Services
            </Link>
            <Link href="/about" className="text-lg font-semibold text-black">
              About
            </Link>
            <Link href="/contact" className="text-lg font-semibold text-black">
              Contact
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-black"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
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
        <div className="md:hidden bg-white border-t px-6 pb-6">
          {navItem('/', 'Home')}
          {navItem('/services', 'Services')}
          {navItem('/about', 'About')}
          {navItem('/contact', 'Contact')}
        </div>
      )}
    </header>
  );
}
