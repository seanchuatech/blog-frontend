import { useState, useEffect } from 'react'; // For dynamic header
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavBar = () => {

const links = [
    { label: "Home", href: "/" },
    { label: "Register", href: "/register" },
    { label: "Login", href: "/login" },
];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <nav className="w-screen border-b fixed top-0 border-slate-700 bg-slate-700/30">
        <div className="flex flex-wrap justify-center container mx-auto p-4">

            {/* Desktop Menu */}
            <ul className="hidden sm:flex gap-5">
                {links.map((link) => (
                    <li key={link.href} className="text-base hover:text-zinc-300 transition duration-500">
                        <Link to={link.href}>{link.label}</Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Button */}
            <button className="sm:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <IoClose className="h-6 w-6" /> : <IoMenu className="h-6 w-6" />}
            </button>

            {/* Mobile Menu */}
            <ul className={`sm:hidden absolute top-full left-0 w-full bg-slate-800 z-10 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                {links.map((link) => (
                    <li key={link.href} className="text-base text-right py-2 pr-5 hover:bg-slate-900">
                        <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default NavBar