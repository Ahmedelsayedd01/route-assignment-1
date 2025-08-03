import React, { useEffect, useState } from 'react';
import { IoCloseOutline, IoMenu } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
       // Corrected typo from loaction to location
       const location = useLocation();
       const path = location.pathname;

       // State to handle the mobile menu's open/close status
       const [isMenuOpen, setIsMenuOpen] = useState(false);
       // State to store the active link path, initialized from the current path
       const [activeLink, setActiveLink] = useState(path);

       // Function to toggle the mobile menu
       const toggleMenu = () => {
              setIsMenuOpen(!isMenuOpen);
       };

       // Effect to update the activeLink state whenever the URL path changes
       useEffect(() => {
              setActiveLink(location.pathname);
              console.log('Current Path:', location.pathname);
       }, [location.pathname]);

       const Links = [
              {
                     id: 1,
                     path: '/',
                     nameLink: 'home',
              },
              {
                     id: 2,
                     path: '/about',
                     nameLink: 'about',
              },
              {
                     id: 3,
                     path: '/portfolio',
                     nameLink: 'portfolio',
              },
              {
                     id: 4,
                     path: '/contact',
                     nameLink: 'contact',
              },
       ];

       return (
              // Main container for the fixed navbar
              <nav className="fixed top-0 left-0 right-0 z-50 bg-primary text-white shadow-lg font-sans">
                     <div className="w-full sm:px-5 lg:px-28 sm:py-8 lg:py-6 flex justify-between items-center">

                            {/* Logo and Branding section */}
                            <div className="sm:py-1 lg:py-3">
                                   <Link
                                          to={'/'}
                                          className="text-3xl lg:text-3xl font-black tracking-tighter uppercase"
                                   >
                                          START FRAMEWORK
                                   </Link>
                            </div>

                            {/* Desktop navigation links, hidden on small screens */}
                            <ul className="hidden lg:flex items-center space-x-2 text-sm lg:text-base font-bold">
                                   {Links.map((link) => (
                                          <li key={link.id}>
                                                 <Link
                                                        to={link.path}
                                                        className={`
                  px-4 py-2 rounded-md transition-colors duration-300 uppercase
                  ${activeLink === link.path ? 'bg-secondary text-white' : 'hover:bg-secondary/50'}
                `}
                                                 >
                                                        {link.nameLink}
                                                 </Link>
                                          </li>
                                   ))}
                            </ul>

                            {/* Mobile menu button, visible on small screens */}
                            <button
                                   onClick={toggleMenu}
                                   className="cursor-pointer lg:hidden text-white focus:outline-none transition-transform duration-300 transform-gpu active:scale-95"
                                   aria-label="Toggle mobile menu"
                            >
                                   {isMenuOpen ? <IoCloseOutline size={45} /> : <IoMenu size={45} />}
                            </button>
                     </div>

                     {/* Animated Mobile menu, conditionally styled with Tailwind classes */}
                     <div
                            className={`
          lg:hidden bg-primary border-t border-gray-700 py-0 px-4 transition-all duration-500 ease-in-out overflow-hidden
          ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
                     >
                            <ul className="flex flex-col space-y-6 text-start font-semibold text-base py-4">
                                   {Links.map((link) => (
                                          <li key={link.id}>
                                                 <Link
                                                        to={link.path}
                                                        onClick={toggleMenu} // Close the menu on click
                                                        className={`
                  px-4 py-3 rounded-md transition-colors duration-500 uppercase
                  ${activeLink === link.path ? 'bg-secondary text-white' : 'hover:bg-secondary/50'}
                `}
                                                 >
                                                        {link.nameLink}
                                                 </Link>
                                          </li>
                                   ))}
                            </ul>
                     </div>
              </nav>
       );
};

export default Navbar;
