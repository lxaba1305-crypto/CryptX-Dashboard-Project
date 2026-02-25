import React from 'react'
import {FaBell, FaQuestionCircle} from "react-icons/fa"

const TopNavbar = () => {
    return (
        <div className="flex justify-between items-center p-6 bg-white shadow">

{/* Search bar */}
<div className="flex-1 mr-4">
    <input type="text" placeholder="Search..." className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600"/>
</div>

{/* Profile icon */}
<div className="flex items-center space-x-6">
    <FaBell className="text-gray-600 w-5 h-5 cursor-pointer" />
    <FaQuestionCircle className="text-gray-600 w-5 h-5 cursor-pointer" />

    {/* Profile */}
    <div className="flex items-center space-x-3 cursor-pointer">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <div className="flex flex-col leading-tight">
            <span className="font-semibold">John Doe</span>
            <span className="text-gray-400 text-sm">@johndoe</span>
        </div>
        <span className="text-gray-400 text-lg">⌄</span>
    </div>
</div>
            </div>
    )
}

export default TopNavbar