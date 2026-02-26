import React from "react"

const Graph = () => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col h-full">

            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">BTC Prices</h2>

                <div className="flex space-x-2 text-gray-500">
                  <button className="px-3 py-1 text-xs font-medium rounded-md bg-gray-100 hover:bg-gray-200 transition">1D</button> 
                   <button className="px-3 py-1 text-xs font-medium rounded-md bg-gray-100 hover:bg-gray-200 transition">1W</button>
                    <button className="px-3 py-1 text-xs font-medium rounded-md bg-gray-100 hover:bg-gray-200 transition">1M</button>
                     <button className="px-3 py-1 text-xs font-medium rounded-md bg-gray-100 hover:bg-gray-200 transition">1Y</button>  
                </div>
            </div>

            <div className="flex-1 bg-gray-50 rounded-xl flex items-center justify-center min-h-[260px]">
                <span className="text-gray-300 text-sm tracking-wide">[Graph Placeholder]</span>
            </div>

            <div className="mt-6">
                <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-xl font-semibold text-sm">
                    $25,240
                </div>
                <div className="h-1.5 bg-purple-200 mt-3 rounded-full"></div>
            </div>

        </div>
    );
}

export default Graph