import React from "react";
import {
    LineChart,
    Line,
    ResponsiveContainer
} from "recharts";

const LiveMarket = () => {

    const marketData = [
  {
  icon: "₿",
  name: "Bitcoin",
  price: "$40,291",
  change: "+0.25%",
  stroke: "#FACC15",
  chart: [40,20,45,25,50,30],
   isPositive: true
},
  {
    icon: "Ξ",
    name: "Ethereum",
    price: "$18,291",
    change: "+0.25%",
    stroke: "#A855F7",
    chart: [20,35,15,40,18,45],
    isPositive: true
  },
  {
    icon: "Ł",
    name: "Litecoin",
    price: "$8,291",
    change: "+0.25%",
    stroke: "#3B82F6",
    chart: [10,25,15,30,20,35],
     isPositive: true
  },
  {
    icon: "₳",
    name: "Cardano",
    price: "$3,291",
    change: "-2.05%",
    stroke: "#22C55E",
    chart: [30,10,35,15,40,20],
     isPositive: false
  }
];

    return (
        <div className="bg-white rounded-2xl shadow-md p-6">
        
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Live Market</h2>

        <div className="space-y-4">
            {marketData.map((coin,index) => (
                <div key={index} className="grid grid-cols-4 items-center py-3 border-b border-gray-100">

  <div className="flex items-center space-x-3">
    <span className="text-lg font-bold">{coin.icon}</span>
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

  <div className="h-8">
  <ResponsiveContainer width="100%" height="100%">
    <LineChart
  data={coin.chart.map((v) => ({ v }))}
>
      <Line type="linear" dataKey="v" stroke={coin.stroke} strokeWidth={3}
  dot={false}
/>
    </LineChart>
  </ResponsiveContainer>
</div>
                </div>
              ))}
            </div>
        </div>
    );
}

export default LiveMarket 