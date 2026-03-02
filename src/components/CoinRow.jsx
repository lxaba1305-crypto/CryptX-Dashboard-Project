import React from "react";

const CoinRow = ({
    icon,
    name,
    symbol,
    price,
    change,
    marketCap, 
    isPositive,
}) => {
    return (
        <div className="grid grid-cols-6 items-center py-4 border-b border-gray-100 text-sm">

            {/* Coin information */}
        <div className="flex items-center space-x-3">
            <img src={icon} alt={name} className="w-8 h-8" />
            <div>
                <p className="font-semibold text-gray-800">
                    {name}
                </p>
                <p className="text-xs text-gray-400">
                    {symbol}
                </p>
            </div>
        </div>

        {/* Price */}
        <p className="text-gray-800 font-medium">
            {price}
        </p>

        <p className={`font-medium ${
            isPositive ? "text-green-500" : "text-red-500"
        }`}>
            {change}
        </p>

        <p className="text-gray-600">
            {marketCap}
        </p>

        <div className="h-8 bg-gray-100 rounded-lg col-span-2"></div>
        </div>
    );
};

export default CoinRow