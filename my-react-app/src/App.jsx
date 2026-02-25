import React from 'react'
import Sidebar from './components/Sidebar.jsx'
import TopNavbar from './components/TopNavbar.jsx'
import SummaryCards from './components/SummaryCards.jsx'
import GraphCard from './components/GraphCard.jsx'
import LiveMarket from './components/LiveMarket.jsx'
import Transactions from './components/Transactions.jsx'
import './App.css'

function App() {
  return (
    
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col bg-gray-100">
          <TopNavbar />
          <div className="p-6">
            <SummaryCards />
            </div>
            <div className="p-6">
            <GraphCard />
            </div>
            <div className="grid md:grid-cols-2 gap-6 p-6">
            <LiveMarket />
            <Transactions />
          </div>
        </div>
      </div>
    )
}

export default App
