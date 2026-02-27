import React from "react";

const Transactions = () => {

    const transactionData = [
        {
            name: "Ethereum",
            type: "Received",
            amount: "$24,102",
            time: "Today, 19:30",
            isPositve: true,
        },
        {
            name: "Bitcoin",
            type: "Buy",
            amount: "$4,157",
            time: "Today, 14:32",
            isPositve: false,
        },
          {
            name: "Bitcoin",
            type: "Buy",
            amount: "$64,784",
            time: "Today, 13:50",
            isPositve: false,
        },
          {
            name: "Litecoin",
            type: "Buy",
            amount: "$14,265",
            time: "Today, 09:38",
            isPositve: false,
        },
    ];
    return (
        <div className="mt-10">

            <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Transactions
            </h2>

            <div className="space-y-6">
                {transactionData.map((tx, index) => (
             <div key={index} className="flex items-center justify-between">

                <div className="flex items-center space-x-4">

                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        tx.isPositive
                        ? "bg-green-100"
                        : "bg-orange-100"
                    }`}>
                        {tx.isPositve ? (
                            <FaArrowUp className="text-green-500 text-sm" />
                        ) : (
                            <FaArrowDown className="text-orange-400 text-sm" />
                        )}
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-gray-800">
                            {tx.name}
                        </p>
                        <p className="text-xs text-gray-400">
                            {tx.type}
                        </p>
                    </div>
                </div>

                <div className="text-right">
                    <p className="text-sm font-semibold text-gray-800">
                            {tx.amount}
                        </p>
                        <p className="text-xs text-gray-400">
                            {tx.time}
                        </p>
                </div>
             </div>
                ))}
            </div>

        </div>
    )
};

export default Transactions