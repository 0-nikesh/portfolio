import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-base text-white selection:bg-white/10 selection:text-white/80 min-h-dvh">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 opacity-30" id="bg-grid" />
      </div>

      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
