"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";

const navElements = [
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Rooms",
    href: "/rooms",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Promotions",
    href: "/promotions",
  },
  {
    title: "Attractions & Restaurants",
    href: "/attractions",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
  },
  {
    title: "More",
    dropdownElements: [
      {
        title: "Pet Policy",
        href: "/pet-policy",
      },
      {
        title: "Limo Policy",
        href: "/limo-policy",
      },
      {
        title: "Wangshi Rules",
        href: "/wangshi-rules",
      },
      {
        title: "Events At Facility",
        href: "/events-at-facility",
      },
    ],
  },
];

function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props} className="list-none">
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

function MobileNavItem({
  element,
  onItemClick,
  expandedItem,
  setExpandedItem,
}) {
  const isExpanded = expandedItem === element.title;

  if (element.dropdownElements) {
    return (
      <div className="border-b border-gray-200">
        <button
          onClick={() => setExpandedItem(isExpanded ? null : element.title)}
          className="w-full flex items-center justify-between py-4 px-6 text-left hover:bg-gray-50 transition-colors"
        >
          <span className="text-[#777777] font-roboto text-sm sm:text-base">
            {element.title}
          </span>
          <FaChevronDown
            className={`text-secondary transition-transform duration-200 flex-shrink-0 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
        {isExpanded && (
          <div className="bg-gray-50">
            {element.dropdownElements.map((dropdownElement, index) => (
              <Link
                key={index}
                href={dropdownElement.href}
                onClick={onItemClick}
                className="block py-3 px-8 text-[#777777] hover:text-secondary transition-colors border-b border-gray-100 last:border-b-0 text-sm"
              >
                {dropdownElement.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <Link
        href={element.href}
        onClick={onItemClick}
        className="block py-4 px-6 text-[#777777] hover:text-secondary transition-colors border-b border-gray-200 text-sm sm:text-base"
      >
        {element.title}
      </Link>
    );
  }
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState("");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setExpandedItem(null);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setExpandedItem(null);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      if (isMobileMenuOpen && !target.closest(".mobile-menu-container")) {
        closeMobileMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Desktop Navigation */}
      <NavigationMenu
        viewport={false}
        className="hidden lg:flex lg:h-28 bg-background font-roboto font-normal list-none text-[#777777] space-x-2 lg:space-x-4 xl:space-x-6"
      >
        <NavigationMenuList className="flex items-center space-x-2 lg:space-x-4">
          {navElements.map((element, index) => {
            if (element.dropdownElements) {
              return (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger className="text-[#777777] hover:text-secondary relative after:absolute after:bottom-0 after:left-1/4 after:w-1/2 after:h-0.5 after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:transition-transform duration-300 text-sm lg:text-base">
                    {element.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-2">
                      {element.dropdownElements.map(
                        (dropdownElement, index) => (
                          <ListItem
                            key={index}
                            title={dropdownElement.title}
                            href={dropdownElement.href}
                          />
                        )
                      )}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            } else {
              return (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={element.href}
                      className="text-[#777777] hover:text-secondary relative after:absolute after:bottom-0 after:left-1/4 after:w-1/2 after:h-0.5 after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:transition-transform duration-300 px-2 py-2 text-sm lg:text-base whitespace-nowrap"
                    >
                      {element.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            }
          })}
          <NavigationMenuItem>
            <a
              href="https://direct-book.com/properties/wangshichinapalacedirect?locale=en&referrer=canvas&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&checkInDate=2025-07-10&checkOutDate=2025-07-11&trackPage=yes"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-background px-4 lg:px-6 py-2 lg:py-3 hover:bg-black transition-colors duration-500 hover:shadow-lg shadow-secondary/20 hover:shadow-secondary/30 text-sm lg:text-base whitespace-nowrap ml-2"
            >
              Book Now
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Tablet Navigation (simplified) */}
      <div className="hidden lg:flex xl:hidden items-center space-x-4">
        <Link
          href="/about-us"
          className="text-[#777777] hover:text-secondary transition-colors text-sm"
        >
          About
        </Link>
        <Link
          href="/rooms"
          className="text-[#777777] hover:text-secondary transition-colors text-sm"
        >
          Rooms
        </Link>
        <Link
          href="/contact-us"
          className="text-[#777777] hover:text-secondary transition-colors text-sm"
        >
          Contact
        </Link>
        <a
          href="https://direct-book.com/properties/wangshichinapalacedirect?locale=en&referrer=canvas&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&checkInDate=2025-07-10&checkOutDate=2025-07-11&trackPage=yes"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-secondary text-background px-4 py-2 hover:bg-black transition-colors duration-500 text-sm whitespace-nowrap"
        >
          Book Now
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden p-2 text-secondary hover:text-black transition-colors"
        aria-label="Toggle mobile menu"
      >
        <FaBars size={20} className="sm:w-6 sm:h-6" />
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 bg-opacity-50"
            onClick={closeMobileMenu}
          />

          {/* Mobile Menu */}
          <div className="mobile-menu-container absolute right-0 top-0 h-full w-72 sm:w-80 max-w-[85vw] sm:max-w-[75vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
              <span className="text-secondary font-medium font-lora text-lg sm:text-xl">
                Menu
              </span>
              <button
                onClick={closeMobileMenu}
                className="p-2 text-gray-500 hover:text-black transition-colors"
                aria-label="Close mobile menu"
              >
                <FaTimes size={18} className="sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col h-full">
              <nav className="flex-1 overflow-y-auto">
                {navElements.map((element, index) => (
                  <MobileNavItem
                    key={index}
                    element={element}
                    onItemClick={closeMobileMenu}
                    expandedItem={expandedItem}
                    setExpandedItem={setExpandedItem}
                  />
                ))}
              </nav>

              {/* Book Now Button */}
              <div className="p-4 sm:p-6 border-t border-gray-200">
                <a
                  href="https://direct-book.com/properties/wangshichinapalacedirect?locale=en&referrer=canvas&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&checkInDate=2025-07-10&checkOutDate=2025-07-11&trackPage=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="block w-full text-center bg-secondary text-background px-6 py-3 sm:py-4 hover:bg-black transition-colors duration-500 rounded-md hover:shadow-lg shadow-secondary/20 hover:shadow-secondary/30"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
