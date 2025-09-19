import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow relative">
      {/* Left: Logo */}
      <Link to="/" className="text-2xl font-bold text-brand">
        PathakOnline
      </Link>

      {/* Center: Links (desktop only) */}
      <ul className="hidden md:flex gap-8 font-medium">
        <li>
          <Link to="/" className="hover:text-brand">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-brand">About Us</Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-brand">Services</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-brand">Contact</Link>
        </li>
      </ul>

      {/* Right: Language (desktop only) */}
      <div className="hidden md:flex gap-3">
        <button onClick={() => changeLanguage("en")} className="hover:text-brand">GB</button>
        <button onClick={() => changeLanguage("ne")} className="hover:text-brand">NP</button>
      </div>

      {/* Mobile hamburger button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-50">
          <ul className="flex flex-col items-center gap-4 py-4 font-medium">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
            <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            <div className="flex gap-3">
              <button onClick={() => changeLanguage("en")}>GB</button>
              <button onClick={() => changeLanguage("ne")}>NP</button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
