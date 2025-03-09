import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-20 flex-none backdrop-blur-md bg-[linear-gradient(270deg,_rgba(111,118,141,0.29)_0%,_rgba(227,171,148,0.29)_100%),_linear-gradient(90deg,_#3C4155_21.1%,_#AD8979_100%)] opacity-90 text-white px-6 md:px-12 lg:px-20 flex items-center justify-between z-50">
      <div className="text-xl md:text-2xl font-bold">TravelAgency</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-lg">
        <li><a href="#" className="hover:text-gray-300">Home</a></li>
        <li><a href="#" className="hover:text-gray-300">Tour Packages</a></li>
        <li><a href="#" className="hover:text-gray-300">Blog</a></li>
        <li><a href="#" className="hover:text-gray-300">Enquire Now</a></li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-black bg-opacity-50 flex flex-col items-center py-4 space-y-4">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">Tour Packages</a></li>
          <li><a href="#" className="hover:text-gray-300">Blog</a></li>
          <li><a href="#" className="hover:text-gray-300">Enquire Now</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
