import React from "react";
import TransactionItem from "./TransactionItem"

const Transactions = () => {

    const transactions = [
        {
            name: "Ethereum",
            type: "Received",
            amount: "$24,102",
            time: "Today, 19:30",
            isPositive: true,
        },
        {
            name: "Bitcoin",
            type: "Buy",
            amount: "$4,157",
            time: "Today, 14:32",
            isPositive: false,
        },
          {
            name: "Bitcoin",
            type: "Buy",
            amount: "$64,784",
            time: "Today, 13:50",
            isPositive: false,
        },
          {
            name: "Litecoin",
            type: "Buy",
            amount: "$14,265",
            time: "Today, 09:38",
            isPositive: false,
        },
    ];
    return (
       <div className="bg-white p-6 rounded-2xl shadow-sm">

        <h2 className="text-xl font-semibold text-gray-800 mb-4">Transactions</h2>

        <div className="space-y-6">
            {transactions.map((tx, index) => (
                <TransactionItem key={index} {...tx} />
            ))}
        </div>

        </div>
    );
};

export default Transactions