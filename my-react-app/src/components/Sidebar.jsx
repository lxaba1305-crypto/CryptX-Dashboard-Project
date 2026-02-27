import React from 'react'
import {
    FaTh,
    FaChartPie,
    FaWallet,
    FaEnvelope,
    FaCog,
    FaSignOutAlt,
    GiChainlink
} from 'react-icons/fa';

const menuItems = [
    { name: 'Overview', icon: <FaTh />, active: true },
    { name: 'Chart' , icon: <FaChartPie />},
    { name: 'Wallet', icon: <FaWallet />},
    { name: 'Mailbox', icon: <FaEnvelope />},
    { name: 'Settings', icon: <FaCog />},
    { name: 'Logout', icon: <FaSignOutAlt />}
];

const Sidebar = () => {
    return (
        <div className="w-64 bg-gray-100 text-gray-700 h-screen flex flex-col justify-between p-6">

            {/* Logo */}
            <div className="flex items-center space-x-2 mb-10">
                <div className="w-10 h-10 flex items-center justify-center">
                   <GiChainlink className="text-purple-600 w-7 h-7"/> 
                </div>
                <span className="text-xl font-bold">CryptX</span>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col space-y-4">
                {menuItems.map((item, idx) => (
                    <div key={idx} className={`flex items-center justify-between p-2 rounded-lg hover:bg-gray-200 cursor-pointer ${item.active ? "text-purple-600 font-medium" : "text-gray-500"}`}>
                        <div className="flex items-center space-x-3">
                            <span className={`text-lg ${item.active ? "text-purple-600" : "text-gray-400"}`}>
                                {item.icon}</span>
                            <span className={`${item.active ? "text-purple-600" : "text-gray-500"}`}>
                             {item.name}
                            </span>
                            </div>
                            {item.active && <span className="w-2 h-2 bg-purple-500 rounded-full"></span>}
                            </div>
                ))}

                            </nav>
                            </div>
    );
};

export default Sidebar