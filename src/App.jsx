import ComingSoonOverlay from './components/ComingSoonOverlay'

function App() {
  return (
    <div className="relative min-h-screen bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1960&auto=format&fit=crop')] bg-cover bg-center">
      {/* Simulated dashboard content */}
      <div className="relative min-h-screen">
        {/* Header */}
        <header className="backdrop-blur-[2px] bg-slate-900/30 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-red-600/80 grid place-items-center text-white font-black">G</div>
              <div>
                <p className="text-white font-semibold leading-none">GariDeals</p>
                <p className="text-xs text-white/60 leading-none mt-1">User Dashboard</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-6 text-white/80">
              <span className="text-sm">Vehicles</span>
              <span className="text-sm">Auctions</span>
              <span className="text-sm">Bids</span>
              <span className="text-sm">Settings</span>
            </div>
          </div>
        </header>

        {/* Body grid */}
        <main className="mx-auto max-w-7xl px-6 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
          <div className="h-48 rounded-xl bg-slate-900/40 border border-white/10"></div>
          <div className="h-48 rounded-xl bg-slate-900/40 border border-white/10"></div>
          <div className="h-48 rounded-xl bg-slate-900/40 border border-white/10"></div>
          <div className="h-64 rounded-xl bg-slate-900/40 border border-white/10 col-span-1 md:col-span-2"></div>
          <div className="h-64 rounded-xl bg-slate-900/40 border border-white/10"></div>
        </main>
      </div>

      {/* Overlay that darkens + blurs background content */}
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-md" />

      {/* Coming Soon overlay content */}
      <ComingSoonOverlay />
    </div>
  )
}

export default App
