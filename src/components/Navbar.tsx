import { NavLink } from "react-router-dom";
import { Menu,X } from "lucide-react";
import { useState } from "react";

const NavLinks: React.FC =()=>{
    return <>
        <NavLink className={(e)=>{return e.isActive?"yellow":"text-white hover:text-gray-300"}} to="/">Home</NavLink>
        <NavLink className={(e)=>{return e.isActive?"yellow":"text-white hover:text-gray-300"}} to="/Tour_packages">Tour_packages</NavLink>
        <NavLink className={(e)=>{return e.isActive?"yellow":"text-white hover:text-gray-300"}} to="/Blog">Blog</NavLink>
        <NavLink className={(e)=>{return e.isActive?"yellow":"text-white hover:text-gray-300"}} to="/Enquire_Now">Enquire_Now</NavLink>
    </>
};

const Nav: React.FC =()=>{
    const [isOpen,setIsOpen]=useState<boolean>(false);

    const toggleNavbar = ()=>{
        setIsOpen(!isOpen);
    }

   return (
        <>

        <nav className="w-1/3 flex justify-end filter-none text-white">
            <div className="hidden md:flex w-full justify-between">
                <NavLinks/>
            </div>
            <div className="md:hidden">
                <button onClick={toggleNavbar}>
                    {isOpen ? <X/>:<Menu/>}
                </button>
            </div>
        </nav>
        {isOpen && (
            <div className="flex flex-col items-center basis-full text-white">
            <NavLinks/>
            </div>
        )} 

        </>
    );
};

export default Nav;