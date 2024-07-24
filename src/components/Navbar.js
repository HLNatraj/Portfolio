// src/components/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-10">
        {[
          { to: "/", label: "Home" },
          { to: "/aboutme", label: "About Me" },
          { to: "/work-experience", label: "Work Experience" },
          { to: "/education", label: "Education" },
          { to: "/projects", label: "Projects" },
          { to: "/skills", label: "Skills" },
          { to: "/contact", label: "Contact" },
          { to: "/resume", label: "Resume" },
        ].map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              className={`hover:underline ${
                location.pathname === to ? 'text-yellow-400 font-bold' : ''
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
