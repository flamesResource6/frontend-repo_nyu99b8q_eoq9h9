import React from 'react'

const ComingSoonOverlay = () => {
  const trackBg = {
    backgroundImage:
      "radial-gradient(80% 60% at 50% 40%, rgba(2,6,23,0.0) 0%, rgba(2,6,23,0.55) 70%, rgba(2,6,23,0.85) 100%), url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM2MjQzMTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')",
    backgroundSize: 'cover, cover',
    backgroundPosition: 'center, center',
  }

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Full racetrack scene backdrop */}
      <div className="absolute inset-0 opacity-0 animate-overlay-fade">
        {/* Asphalt texture + racing line markings */}
        <div className="absolute inset-0" style={trackBg} />

        {/* Painted curbs (red/white), faint and large-scale for realism */}
        <div className="absolute inset-x-0 bottom-0 h-64 sm:h-72 md:h-80 opacity-25 mix-blend-overlay"
             style={{
               backgroundImage:
                 'repeating-linear-gradient(90deg, rgba(244,63,94,0.8) 0 36px, rgba(244,63,94,0.8) 36px 72px, rgba(255,255,255,0.9) 72px 108px, rgba(255,255,255,0.9) 108px 144px)',
               transform: 'skewY(-6deg) translateY(18%)',
               transformOrigin: 'bottom left'
             }} />

        {/* Light sweep hint like track lights */}
        <div className="absolute inset-y-0 -left-1/3 w-2/3 bg-gradient-to-r from-white/0 via-white/15 to-white/0 animate-light-sweep" />

        {/* Film grain and heat haze */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 2px), repeating-linear-gradient(90deg, rgba(255,255,255,0.008) 0px, rgba(255,255,255,0.008) 1px, transparent 1px, transparent 2px)'
        }} />
        <div className="absolute inset-0 animate-heat-haze" />

        {/* Subtle drifting smoke */}
        <div className="absolute right-[10%] bottom-[20%] w-[36vw] max-w-[520px] aspect-[3/2] rounded-full bg-gradient-to-tr from-white/10 via-white/5 to-transparent blur-2xl opacity-40 animate-smoke-rise" />
      </div>

      {/* Scene with perspective for the poster */}
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8" style={{ perspective: '1200px' }}>
        <div className="relative pointer-events-auto select-none opacity-0 animate-stamp-bounce" aria-label="This page is coming soon">
          {/* Cast shadow for depth on asphalt */}
          <div className="absolute -inset-6 blur-xl rounded-[40px]" style={{
            background:
              'radial-gradient(60% 40% at 50% 60%, rgba(0,0,0,0.5), rgba(0,0,0,0) 70%)'
          }} />

          {/* Poster sheet */}
          <div
            className="relative w-[min(92vw,920px)] rotate-x-[6deg] -rotate-2"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Torn paper silhouette using layered gradients */}
            <div className="relative rounded-[18px] shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
              <div className="relative rounded-[18px] overflow-hidden">
                {/* Paper base */}
                <div className="relative rounded-[18px] bg-[rgb(248,245,240)]">
                  {/* Paper texture */}
                  <div className="absolute inset-0 mix-blend-multiply opacity-70" style={{
                    backgroundImage:
                      'repeating-linear-gradient(180deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 3px), radial-gradient(1000px 400px at 80% -10%, rgba(0,0,0,0.06), transparent 60%)'
                  }} />

                  {/* Scuffs and tire dust along edges */}
                  <div className="absolute inset-0 pointer-events-none" style={{
                    backgroundImage:
                      'radial-gradient(200px 80px at 10% 5%, rgba(0,0,0,0.15), transparent 70%), radial-gradient(180px 80px at 90% 100%, rgba(0,0,0,0.18), transparent 70%), linear-gradient(115deg, transparent 0 78%, rgba(0,0,0,0.08) 85%, transparent 92%)'
                  }} />

                  {/* Oil splatter + grit */}
                  <div className="absolute inset-0 opacity-35 mix-blend-multiply" style={{
                    backgroundImage:
                      'radial-gradient(4px 4px at 15% 35%, rgba(0,0,0,0.20), transparent 60%), radial-gradient(6px 6px at 35% 65%, rgba(0,0,0,0.18), transparent 60%), radial-gradient(3px 3px at 72% 22%, rgba(0,0,0,0.22), transparent 60%), radial-gradient(5px 5px at 80% 48%, rgba(0,0,0,0.18), transparent 60%)'
                  }} />

                  {/* Bold tire mark arc across poster */}
                  <div className="absolute -left-10 right-0 top-8 h-24 rotate-[-6deg] opacity-30 mix-blend-multiply" style={{
                    backgroundImage:
                      'repeating-linear-gradient(90deg, rgba(0,0,0,0.22) 0 4px, rgba(0,0,0,0) 4px 10px)'
                  }} />

                  {/* Grid of racing sponsors ghosted in background */}
                  <div className="absolute inset-x-0 bottom-10 grid grid-cols-3 sm:grid-cols-6 gap-4 px-8 opacity-10 text-slate-800/80">
                    {['PIRELLI','BREMBO','MOTUL','SPARCO','AKRAPOVIC','BOSCH'].map((b) => (
                      <div key={b} className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-center">{b}</div>
                    ))}
                  </div>

                  {/* Content area */}
                  <div className="relative px-6 sm:px-10 md:px-14 py-8 sm:py-10 md:py-12">
                    {/* Small race sticker/tape corners */}
                    <div className="pointer-events-none">
                      <div className="absolute -top-3 -left-2 w-24 h-6 rotate-[-8deg] bg-yellow-300/80 shadow-md" style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.08) 0 6px, transparent 6px 12px)'
                      }} />
                      <div className="absolute -top-2 -right-1 w-16 h-6 rotate-[12deg] bg-yellow-300/75 shadow" style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.08) 0 6px, transparent 6px 12px)'
                      }} />
                      <div className="absolute -bottom-3 left-8 w-28 h-6 rotate-[6deg] bg-yellow-300/80 shadow" style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.08) 0 6px, transparent 6px 12px)'
                      }} />
                    </div>

                    {/* Rubber stamp banner */}
                    <div className="relative">
                      <div className="absolute inset-x-[-10%] top-6 -rotate-6 mx-auto max-w-none">
                        <div className="relative">
                          <div className="absolute -inset-2 rounded-2xl ring-2 ring-red-500/30 blur-[2px] animate-glow-pulse" />
                          <div className="relative bg-red-600/14 border-4 border-red-500/70 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-center shadow-[0_10px_30px_rgba(239,68,68,0.25),inset_0_0_0_1px_rgba(239,68,68,0.25)]">
                            <span className="block text-[11px] sm:text-[12px] tracking-[0.5em] font-extrabold uppercase text-red-500/90">Notice</span>
                            <span className="mt-1 block text-[22px] sm:text-3xl md:text-4xl font-black tracking-[0.08em] uppercase text-red-700 drop-shadow-[0_2px_8px_rgba(239,68,68,0.25)]">This Page Is Coming Soon</span>
                          </div>
                        </div>
                      </div>

                      {/* Poster Title and copy */}
                      <div className="pt-28 sm:pt-28">
                        <p className="text-sm sm:text-base text-slate-800/90 leading-relaxed max-w-3xl">
                          Built for speed. Expect full racetrack telemetry and control:
                        </p>
                        <ul className="mt-4 space-y-2 text-[13px] sm:text-sm text-slate-800/90 leading-relaxed marker:text-slate-700">
                          <li>– Live lap times with sector splits and delta overlays</li>
                          <li>– Heat‑map bidding lanes with pit‑stop recommendations</li>
                          <li>– Telemetry‑style alerts for price spikes and undercuts</li>
                          <li>– Garage view for vehicles with health, history, and setup</li>
                          <li>– Team radio: instant chat with your sales engineer</li>
                          <li>– Safety car mode: budget locks and risk guardrails</li>
                          <li>– Replay center for bids, wins, and performance analysis</li>
                          <li>– Track‑ready profiles and credential badges</li>
                          <li>…all tuned for podium‑level results.</li>
                        </ul>
                        <div className="mt-6">
                          <p className="text-sm font-semibold tracking-wide text-slate-700">Brought to you by GariDeals.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ragged edges shadow accents */}
                <div className="pointer-events-none absolute inset-0 rounded-[18px]" style={{
                  background:
                    'conic-gradient(from 90deg at top left, rgba(0,0,0,0.14), transparent 10%), conic-gradient(from 0deg at bottom right, rgba(0,0,0,0.12), transparent 12%)'
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComingSoonOverlay
