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
    
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col bg-gray-100">
          <TopNavbar />

          <main className="flex-1 flex flex-col overflow-hidden">
          
            <SummaryCards />
            
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg-col-span-2">
            <Graph />
            </div>
      
            <LiveMarket />
            </div>

            <Transactions />

            </main>
          </div>
        </div>
      
    )
}

export default App
