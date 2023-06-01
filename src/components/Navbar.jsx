import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png"; // Import your logo image
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  const [navIsShown, setNavIsShown] = useState(false);
  const [dropdownIsShown, setDropdownIsShown] = useState(false);
  const navbarRef = useRef(null);

  const toggleNavIsShown = () => {
    setNavIsShown((navIsShown) => !navIsShown);
  };

  const toggleDropdownIsShown = () => {
    setDropdownIsShown((dropdownIsShown) => !dropdownIsShown);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setNavIsShown(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <nav
      className="flex justify-between items-center h-20 px-4 md:px-8 lg:px-16 xl:px-24 absolute top-0 left-0 z-10 w-full text-white bg-black"
      ref={navbarRef}
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <img src={logo} alt="Logo" className="h-10" />{" "}
      {/* Use the imported logo */}
      <ul className="hidden md:flex space-x-4">
        <li>
          <Link to="/" onClick={() => setNavIsShown(false)}>
            Halaman Utama
          </Link>
        </li>
        <li
          className={`relative ${dropdownIsShown ? "dropdown-expanded" : ""}`}
          onMouseEnter={toggleDropdownIsShown}
          onMouseLeave={toggleDropdownIsShown}
        >
          <a
            href="/destinasi"
            aria-expanded={dropdownIsShown ? "true" : "false"}
          >
            Destinasi
          </a>
          {dropdownIsShown && (
            <ul className="absolute bg-white text-black mt-2 py-2 rounded shadow">
              <li>
                <Link to="/destinasi/tempatwisata">Tempat Wisata</Link>
              </li>
              <li>
                <Link to="/destinasi/bangunanbersejarah">
                  Bangunan Bersejarah
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/aboutus" onClick={() => setNavIsShown(false)}>
            Tentang Kami
          </Link>
        </li>
        <li>
          <Link to="/galeri" onClick={() => setNavIsShown(false)}>
            Galeri
          </Link>
        </li>
        <li>
          <Link to="/team" onClick={() => setNavIsShown(false)}>
            Tim
          </Link>
        </li>
      </ul>
      <div className="hidden md:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-2"
        >
          {/* Search icon */}
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          {/* Account icon */}
        </svg>
      </div>
      {!navIsShown && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 md:hidden cursor-pointer bg-gray-400 rounded-md p-1 ${
            navIsShown ? "open" : ""
          }`}
          aria-expanded={navIsShown ? "true" : "false"}
          onClick={toggleNavIsShown}
        >
          {/* Hamburger menu icon */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
      {navIsShown && (
        <div className="md:hidden absolute z-10 top-0 left-0 w-full bg-gray-200 text-black px-4 py-6">
          {/* Dropdown menu content */}
          <ul className="space-y-4">
            <li>
              <Link to="/" onClick={() => setNavIsShown(false)}>
                Halaman Utama
              </Link>
            </li>
            <li
              onMouseEnter={toggleDropdownIsShown}
              onMouseLeave={toggleDropdownIsShown}
            >
              <a
                href="/destinasi"
                aria-expanded={dropdownIsShown ? "true" : "false"}
              >
                Destinasi
              </a>
              {dropdownIsShown && (
                <ul className="ml-4 space-y-2">
                  <li>
                    <Link
                      to="/destinasi/tempatwisata"
                      onClick={() => setNavIsShown(false)}
                    >
                      Tempat Wisata
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/destinasi/bangunanbersejarah"
                      onClick={() => setNavIsShown(false)}
                    >
                      Bangunan Bersejarah
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/aboutus" onClick={() => setNavIsShown(false)}>
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link to="/galeri" onClick={() => setNavIsShown(false)}>
                Galeri
              </Link>
            </li>
            <li>
              <Link to="/team" onClick={() => setNavIsShown(false)}>
                Tim
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
