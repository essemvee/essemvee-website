'use client';

import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white p-6 z-50 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-sm text-gray-300">
          We use cookies to improve your experience, analyze traffic, and enhance security.
          By clicking “Accept”, you consent to our use of cookies.
        </p>

        <div className="flex gap-4">
          <button
            onClick={rejectCookies}
            className="px-4 py-2 border border-gray-500 rounded-lg text-sm"
          >
            Reject
          </button>

          <button
            onClick={acceptCookies}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-semibold"
          >
            Accept
          </button>
        </div>

      </div>
    </div>
  );
}