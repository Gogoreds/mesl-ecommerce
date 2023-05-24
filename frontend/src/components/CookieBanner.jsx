import { useState } from 'react';

const isLocalStorageAvailable = typeof window !== 'undefined' && window.localStorage;

const getCookieConsentFromLocalStorage = () => {
  return isLocalStorageAvailable ? localStorage.getItem('cookieConsent') : null;
};

const setCookieConsentInLocalStorage = (value) => {
  if (isLocalStorageAvailable) {
    localStorage.setItem('cookieConsent', value);
  }
};

const CookieBanner = () => {
  const [cookieConsent, setCookieConsent] = useState(getCookieConsentFromLocalStorage());

  const handleAcceptCookies = () => {
    setCookieConsent('accepted');
    setCookieConsentInLocalStorage('accepted');
  };

  const handleDeclineCookies = () => {
    setCookieConsent('declined');
    setCookieConsentInLocalStorage('declined');
  };

  if (cookieConsent === 'accepted' || cookieConsent === 'declined') {
    return null; // If cookies are already accepted or declined, hide the banner
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p>We use cookies to improve your experience on our website.</p>
        <button onClick={handleAcceptCookies} className="ml-4 bg-gray-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Accept
        </button>
        <button onClick={handleDeclineCookies} className="ml-4 bg-black hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
