import React from "react"
import {
    LineChart,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    CartesianGrid,
    YAxis
 }
    from "recharts";

    const data = [
        { name: "Jan",  value: 400 },
        { name: "Mar",  value: 300 },
        { name: "May",  value: 500 },
        { name: "Jul",  value: 280 },
        { name: "Sep",  value: 590 },
        { name: "Nov",  value: 320 },
    ]

const Graph = () => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6  h-full">
                <h2 className="text-lg font-semibold text-gray-800">BTC Prices</h2>

            

            <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid stroke="#f3f4f6" vertical={false} />
                    <XAxis dataKey={name} tick={{fontSize: 12}} />
                    <YAxis tick={{fontSize: 12}} />
                    <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={3} dot={false} />

            </LineChart>
            </ResponsiveContainer>
            </div>
            </div>

        
    );
}

export default Graph