import React from 'react'
import SidebarItem from "./SidebarItem";

const menuItems = [
    { name: 'Overview', icon: <span>📊</span>, active: true },
    { name: 'Chart', icon: <span>📈</span> },
    { name: 'Wallet', icon: <span>👛</span> },
    { name: 'Mailbox', icon: <span>✉️</span> },
    { name: 'Settings', icon: <span>⚙️</span> },
    { name: 'Logout', icon: <span>🚪</span> }
];

const Sidebar = () => {
    return (
        <div className="w-64 bg-gray-50 flex flex-col justify-between px-8 py-8 border-r border-gray-200">

            {/* Logo */}
            <div>
                <div className="flex items-center space-x-3 mb-12">
                    <span className="text-purple-600 text-2xl">🔗</span>
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