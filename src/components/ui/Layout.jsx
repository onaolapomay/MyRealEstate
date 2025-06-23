import React from "react";

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-white shadow px-4 py-3 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <h1 className="text-xl font-bold text-gray-800 font-montserrat">MayorH</h1>
                    <nav className="space-x-2 lg:space-x-7">
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-raleway">Buy</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-raleway">Rent</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-raleway">Sell</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-raleway">Contact</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-raleway">Find an Agent</a>
                        <a href="#" className="text-pink-800">AirBnB</a>
                    </nav>
                </div>
            </header>

            


            <main className="p-4">{children}</main>
        </div>
    )
}

export default Layout;