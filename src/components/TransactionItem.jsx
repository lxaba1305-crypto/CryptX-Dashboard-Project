import React from "react";

const TransactionItem = ({ name, type, amount, time, isPositive }) => {
    return (
        <div className="flex items-center justify-between">

            {/* Left */}

            <div className="flex items-center space-x-4">

                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isPositive ? "bg-green-100" : "bg-orange-100"}`}>
                    {isPositive ? (
                        <span className="text-green-500 text-sm">▲</span>
                    ) : (
                        <span className="text-orange-400 text-sm">▼</span>
                    )}
                </div>

                <div>
                    <p className="text-sm font-semibold text-gray-800">
                        {name}
                    </p>
                    <p className="text-xs text-gray-400">
                        {type}
                    </p>
                </div>
            </div>

            {/* Right */}
            <div className="text-right">
                <p className="text-sm font-semibold text-gray-800">
                    {amount}
                </p>
                <p className="text-xs text-gray-400">
                    {time}
                </p>
            </div>
        </div>
    );
};

export default TransactionItem