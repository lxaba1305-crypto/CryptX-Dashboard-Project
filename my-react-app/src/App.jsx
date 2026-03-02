import React from 'react'
import Sidebar from './components/Sidebar.jsx'
import TopNavbar from './components/TopNavbar.jsx'
import SummaryCards from './components/SummaryCards.jsx'
import Graph from './components/Graph.jsx'
import LiveMarket from './components/LiveMarket.jsx'
import Transactions from './components/Transactions.jsx'
import './App.css'

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      <Sidebar />

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col">

        {/* Top Navbar */}
        <TopNavbar />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

            {/* LEFT */}
            <div className="xl:col-span-2 space-y-6">
              <SummaryCards />
              <LiveMarket />
            </div>

            {/* RIGHT */}
            <div className="xl:col-span-1 space-y-6">
              <Graph />
              <Transactions />
            </div>

          </div>
        </main>

      </div>
    </div>
  );
}

export default App
