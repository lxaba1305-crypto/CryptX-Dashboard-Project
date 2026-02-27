import React from "react";
import {FaBitcoin, FaEthereum} from "react-icons/fa";
import{ SiLitecoin, SiCardano } from "react-icons/Si";

const LiveMarket = () => {

    const marketData = [
        {
            icon: <FaBitcoin className="text-yellow-400 text-lg" />,
            name: "Bitcoin",
            price: "$40,291",
            change: "+0.25%",
            isPositive: true,
        },
         {
            icon: <FaEthereum className="text-purple-500 text-lg" />,
            name: "Ethereum",
            price: "$18,291",
            change: "+0.25%",
            isPositive: true,
        },
         {
            icon: <SiLitecoin className="text-blue-500 text-lg" />,
            name: "Litecoin",
            price: "$8,291",
            change: "+0.25%",
            isPositive: true,
        },
         {
            icon: <SiCardano className="text-green-500 text-lg" />,
            name: "Cardano",
            price: "$3,291",
            change: "+0.25%",
            isPositive: false,
        },
    ];

    return (
        <div className="bg-white rounded-2x1 shadow-md p-6 h-full flex flex-col">
        
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Live Market</h2>

        <div className="space-y-4">
            {marketData.map((coin,index) => (
                <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        {coin.icon}
                        <span className="text-sm font-medium text-gray-700">
                            {coin.name}
                        </span>
                    </div>

                    <div className="text-right">
                        <p className="text-sm font-semibold text-gray-800">
                            {coin.price}
                        </p>
                        <p className={`text-xs font-medium ${
                            coin.isPositive 
                            ? "text-green-500"
                            : "text-orange-400"
                        }`} >
                            {coin.change}
                        </p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}

export default LiveMarket 