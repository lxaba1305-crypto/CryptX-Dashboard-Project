import React from "react"

const Graph = () => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">

            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">BTC Prices</h2>

                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm rounded bg-gray-100 hover:bg-gray-200">1D</button> 
                   <button className="px-3 py-1 text-sm rounded bg-gray-100 hover:bg-gray-200">1W</button>
                    <button className="px-3 py-1 text-sm rounded bg-gray-100 hover:bg-gray-200">1M</button>
                     <button className="px-3 py-1 text-sm rounded bg-gray-100 hover:bg-gray-200">1Y</button>  
                </div>
            </div>

            <div className="flex-1 bg-gray-50 rounded-lg flex items-center justify-center h-64">
                <span className="text-gray-300 text-lg"> [Graph goes here] </span>
            </div>

            <div className="mt-4">
                <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg font-bold">
                    $25,240
                </div>
                <div className="h-1 bg-purple-200 mt-2 rounded"></div>
            </div>

        </div>
    );
}

export default Graph