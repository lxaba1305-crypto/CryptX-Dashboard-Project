import React from 'react'
import {FaBell, FaQuestionCircle} from "react-icons/fa"

const TopNavbar = () => {
    return (
        <div className="flex justify-between items-center p-6 bg-white shadow">

{/* Search bar */}
<div className="w-96">
    <input type="text" placeholder="Search..." className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600"/>
</div>

{/* Profile icon */}
<div className="flex items-center space-x-4">

  <FaBell className="text-gray-500 w-5 h-5 cursor-pointer" />
  <FaQuestionCircle className="text-gray-500 w-5 h-5 cursor-pointer" />

  {/* Avatar */}
  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>

  {/* Name */}
  <div className="flex flex-col leading-tight">
    <span className="text-sm font-semibold text-gray-800">
      Laurice
    </span>
    <span className="text-xs text-gray-400">
      @laurice22
    </span>
  </div>

  <span className="text-gray-400 text-lg">⌄</span>
</div>
    </div>
    )
}

export default TopNavbar
