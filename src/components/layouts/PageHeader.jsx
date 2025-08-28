"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const PageHeader = ({ backgroundImage, title, breadcrumb }) => {
  const pathname = usePathname();
  console.log("Current Pathname:", pathname);

  return (
    <section
      className="relative h-[400px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/35 bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start">
        <div className="container mx-auto px-6">
          {/* Page Title */}
          <h1 className="text-5xl lg:text-6xl font-lora font-light text-white leading-tight mb-6">
            {title}
          </h1>
          {/* Breadcrumb Navigation */}
          <nav className="mb-4">
            <div className="flex items-center space-x-2 text-white text-sm font-lora font-light">
              <Link
                href="/"
                className="hover:text-secondary transition-colors duration-200"
              >
                Home
              </Link>
              <span className="mx-2">-</span>
              <span className="text-gray-300">
                {breadcrumb ||
                  pathname
                    .substring(1)
                    .split("/")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
              </span>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
