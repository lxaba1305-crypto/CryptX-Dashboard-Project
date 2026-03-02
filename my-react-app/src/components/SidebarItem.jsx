import React from "react";

// eslint-disable-next-line no-unused-vars
const SidebarItem = ({ icon: Icon, label, active}) => {
    return(

    <div className={`flex items-center justify-between cursor-pointer ${
        active
        ? "text-purple-600 font-medium"
        : "text-gray-400 hover:text-gray-600"
    }`} >

       <div className="flex items-center space-x-4">
        <Icon className="text-lg" />
        <span className="text-sm">
            {label}
        </span>
        </div>

        {active && (
            <span className="w-2 h-2 bg-purple-600 rounded-full" />
        )}
    </div>
    );
};

export default SidebarItem