import Link from "next/link";

const Footer = () => {
  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Terms And Conditions", href: "/terms" },
    { name: "Booking", href: "/booking" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-2xl font-lora font-light text-white tracking-wider">
              Wang Shi China Palace
            </h2>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <section className="flex items-center justify-center gap-5">
              <div className="text-gray-400 font-lora font-light text-sm">
                © {new Date().getFullYear()}. All Rights Reserved{" "}
                <Link
                  href={"/"}
                  className="text-white hover:text-secondary transition-colors duration-200"
                >
                  Wang Shi China Palace
                </Link>
              </div>
              <div className="w-[0.2px] h-8 bg-white" />
              <div className="text-gray-400 font-lora font-light text-sm">
                Developed By{" "}
                <Link
                  href="https://bmymarketer.com"
                  target="_blank"
                  className="text-white hover:text-secondary transition-colors duration-200"
                >
                  B My Marketer
                </Link>
              </div>
            </section>
            {/* Navigation Links */}
            <div className="flex flex-col lg:flex-row items-center gap-1">
              {footerLinks.map((link, index) => (
                <div key={link.name} className="flex items-center">
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white font-lora font-light text-sm transition-colors duration-200 px-3 py-3 lg:py-1"
                  >
                    {link.name}
                  </Link>
                  {index < footerLinks.length - 1 && (
                    <span className="text-gray-500 text-sm hidden lg:inline-block">
                      -
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
