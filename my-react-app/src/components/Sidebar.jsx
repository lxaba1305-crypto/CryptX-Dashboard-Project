import React from 'react'
import SidebarItem from "./SidebarItem";
import {
    FaTh,
    FaChartPie,
    FaWallet,
    FaEnvelope,
    FaCog,
    FaSignOutAlt
} from 'react-icons/fa';
import { GiChainlink } from 'react-icons/gi';

const menuItems = [
    { name: 'Overview', icon: FaTh, active: true },
    { name: 'Chart', icon: FaChartPie },
    { name: 'Wallet', icon: FaWallet },
    { name: 'Mailbox', icon: FaEnvelope },
    { name: 'Settings', icon: FaCog },
    { name: 'Logout', icon: FaSignOutAlt }
];

const Sidebar = () => {
    return (
        <div className="w-64 bg-gray-50 h-screen flex flex-col justify-between px-8 py-8 border-r border-gray-200">

            {/* Logo */}
            <div>
                <div className="flex items-center space-x-3 mb-12">
                    <GiChainlink className="text-purple-600 w-8 h-8" />
                    <span className="text-2xl font-semibold text-gray-900">CryptX</span>
                </div>

                {/* Menu Items */}
                <nav className="flex flex-col space-y-6">
                    {menuItems.map((item, idx) => (
                        <SidebarItem 
                        key={idx} icon={item.icon} label={item.name} active={item.active} />
                    ))}
                </nav>
            </div>

        </div>
    );
};

export default Sidebar;