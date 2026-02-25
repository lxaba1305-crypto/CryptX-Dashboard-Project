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
        <div className="w-64 bg-gray-900 text-white h-screen flex flex-col justify-between p-6">

            {/* Logo */}
            <div className="flex items-center space-x-2 mb-10">
                <div className="w-10 h-10 bg-purple-600 flex items-center justify-center rounded">
                   <GiChainlink className="text-purple-600 w-6 h-6"/> 
                </div>
                <span className="text-xl font-bold">CryptX</span>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col space-y-4">
                {menuItems.map((item, idx) => (
                    <div key={idx} className={`flex items-center justify-between p-2 rounded hover:bg-gray-700 cursor-pointer ${item.active ? "bg-purple-700" : ""}`}>
                        <div className="flex items-center space-x-3">
                            <span className={`text-lg ${item.active ? "text-white" : "text-gray-400"}`}>
                                {item.icon}</span>
                            <span className={`${item.active ? "text-white" : "text-gray-400"} `}>
                             {item.name}
                            </span>
                            </div>
                            {item.active && <span className="w-2 h-2 bg-purple-400 rounded-full"></span>}
                            </div>
                ))}

                            </nav>
                            </div>
    );
};

export default Sidebar