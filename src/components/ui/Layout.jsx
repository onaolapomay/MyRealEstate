import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";





    
const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () =>setIsMenuOpen(!isMenuOpen);
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-white shadow px-4 py-3 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between relative">
                    <h1 className="text-xl font-bold text-gray-800 font-montserrat absolute left-1/2 -translate-x-1/2 sm:static sm:translate-x-0">MayorH</h1>
                    <nav className="hidden sm:flex space-x-2 lg:space-x-7">
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-raleway">Buy</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-raleway">Rent</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-raleway">Sell</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-raleway">Contact</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-raleway">Find an Agent</a>
                        <a href="#" className="text-pink-800">AirBnB</a>
                    </nav>

            
                    <button className="block sm:hidden text-2xl text-gray-700" onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes/> : <FaBars />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="sm:hidden mt-2 bg-white px-6 pb-5 space-y-3">
                        <a href="#" className="block text-gray-600 hover:text-blue-600">Buy</a>
                        <a href="#" className="block text-gray-600 hover:text-blue-600">Rent</a>
                        <a href="#" className="block text-gray-600 hover:text-blue-600">Sell</a>
                        <a href="#" className="block text-gray-600 hover:text-blue-600">Contact</a>
                        <a href="#" className="block text-gray-600 hover:text-blue-600">Find an Agent</a>
                        <a href="#" className="text-pink-800">AirBnB</a>
                    </div>
                )}
            </header>

            


            <main className="p-4">{children}</main>
        </div>
    )
}

export default Layout;