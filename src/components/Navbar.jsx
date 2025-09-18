import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow">
      {/* Left: Logo */}
      <Link to="/" className="text-2xl font-bold text-brand">
        PathakOnline
      </Link>

      {/* Center: Links */}
      <ul className="flex gap-8 font-medium">
        <li>
          <Link to="/" className="hover:text-brand">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-brand">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-brand">
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-brand">
            Contact
          </Link>
        </li>
      </ul>

      {/* Right: Language switch */}
      <div className="flex gap-3">
        <button
          onClick={() => changeLanguage("en")}
          className="hover:text-brand"
        >
          GB
        </button>
        <button
          onClick={() => changeLanguage("ne")}
          className="hover:text-brand"
        >
          NP
        </button>
      </div>
    </nav>
  );
}
