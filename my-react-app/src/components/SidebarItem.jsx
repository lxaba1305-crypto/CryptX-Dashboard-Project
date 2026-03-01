import React from "react";

const SidebarItem = ({ icon: Icon, label, active}) => {
    return(

    <div className={`flex items-center space-x-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${
        active
        ? "bg-purple-600 text-white"
        : "text-gray-400 hover:bg-gray-100 hover:text-gray-700"
    }`} >

        <Icon className="text-lg" />
        <span className="text-sm font-medium">
            {label}
        </span>
    </div>
    );
};

export default SidebarItem