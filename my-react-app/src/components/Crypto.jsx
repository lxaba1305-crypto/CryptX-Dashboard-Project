import React from 'react'
import {FaArrowUp, FaArrowDown} from "react-icons/fa"

const Crypto = ({bgColor, icon, price, name, change, isPositive}) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between">

{/* Top row */}
<div className="flex justify-between items-center mb-6">
    <div className={`w-12 h-12 ${bgColor} flex items-center justify-centert rounded-lg`}>
        {icon}
    </div>

    <div className="flex items-center space-x-2">
        {isPositive ? (
            <FaArrowUp className="text-green-500 text-sm" />
        ) : (
            <FaArrowDown className="text-orange-400 text-sm" />
        )}

        <span className={`text-sm font-semibold ${isPositive ? "text-green-500" : "text-orange-400"}`}>
            {change}
        </span>
    </div>
</div>

{/* Price */}
<div>
<h2 className="text-2xl font-bold mb-1">{price}</h2>
<p className="text-gray-400 text-sm"> {name} </p>
</div>
        </div>
    )
}

export default Crypto