import React from "react";
import{ FaBitcoin, FaEthereum } from "react-icons/fa";
import{ SiLitecoin, SiCardano } from "react-icons/Si"
import Crypto from "./Crypto"

const SummaryCards = () => {
    
    const cryptoData = [
        {
            bgColor: "bg-yellow-400",
            icon: <FaBitcoin className="text-white text-xl" />,
            price: "$40,291",
            name: "Bitcoin - BTC",
            change: "+0.25%",
            isPositive: true,
        },
        {
            bgColor: "bg-purple-500",
            icon: <FaEthereum className="text-white text-xl" />,
            price: "$18,291",
            name: "Ethereum - ETH",
            change: "+0.25%",
            isPositive: true,
        },
        {
            bgColor: "bg-blue-400",
            icon: <SiLitecoin className="text-white text-xl" />,
            price: "$8,291",
            name: "Litecoin - LTC",
            change: "+0.25%",
            isPositive: true,
        },
        {
            bgColor: "bg-green-400",
            icon: <SiCardano className="text-white text-xl" />,
            price: "$40,291",
            name: "Cardano - ADA",
            change: "-2.05%",
            isPositive: false,
        },
    ];
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cryptoData.map((coin, index) => (
            <Crypto 
            key={index}
            bgColor={coin.bgColor}
            icon={coin.icon}
            price={coin.price}
            name={coin.name}
            change={coin.change}
            isPositive={coin.isPositive}
            />
            ))}
        </div>
    )
}

export default SummaryCards