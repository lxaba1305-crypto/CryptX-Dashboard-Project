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
}