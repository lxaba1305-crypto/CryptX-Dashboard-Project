import React from "react";
import {FaBitcoin, FaEthereum} from "react-icons/fa";
import{ SiLitecoin, SiCardano } from "react-icons/si";

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
            change: "-2.05%",
            isPositive: false,
        },
    ];

    return (
        <div className="bg-white rounded-2xl shadow-md p-6 h-full flex flex-col">
        
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Live Market</h2>

        <div className="space-y-4">
            {marketData.map((coin,index) => (
                <div key={index} className="grid grid-cols-4 items-center py-3 border-b border-gray-100">

  <div className="flex items-center space-x-3">
    {coin.icon}
    <div>
      <p className="text-sm font-semibold text-gray-800">
        {coin.name}
      </p>
      <p className="text-xs text-gray-400">
        ETH / USDT
      </p>
    </div>
  </div>

  <p className={`text-sm font-semibold ${
    coin.isPositive ? "text-green-500" : "text-red-500"
  }`}>
    {coin.change}
  </p>

  <p className="text-sm font-semibold text-gray-800">
    {coin.price}
  </p>

  <div className="h-6 bg-gray-100 rounded-lg"></div>
</div>
                
            ))}
        </div>
        </div>
    );
}

export default LiveMarket 