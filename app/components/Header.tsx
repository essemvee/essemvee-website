'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLink = (href: string, label: string) => {
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        onClick={() => setOpen(false)}
        className={`text-base md:text-lg font-semibold transition ${
          isActive
            ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
            : 'text-black hover:text-blue-600'
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 w-full bg-white z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            {/* SMV ICON */}
            <img
              src="/branding/logo/smv-color.png"
              alt="ESSEMVEE logo"
              className="h-8 w-auto"
            />

            {/* COMPANY NAME (SEO SAFE) */}
            <span className="hidden sm:block text-lg md:text-xl font-extrabold tracking-wide text-black">
              ESSEMVEE TECHNOLOGY SERVICES
            </span>
          </Link>

          {/* DESKTOP NAV */}
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
        <div className="md:hidden bg-white border-t px-6 py-6 space-y-4">
          {navLink('/', 'Home')}
          {navLink('/services', 'Services')}
          {navLink('/about', 'About')}
          {navLink('/contact', 'Contact')}
        </div>
      )}
    </header>
  );
}
