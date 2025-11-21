import React from 'react'

const ComingSoonOverlay = () => {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Dim + blur backdrop */}
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm opacity-0 animate-overlay-fade" />

      {/* Centered stamp container */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div
          className="pointer-events-auto select-none relative -rotate-6 opacity-0 animate-stamp-bounce"
          aria-label="This page is coming soon"
        >
          {/* Outer glow pulse */}
          <div className="absolute -inset-2 rounded-[28px] ring-2 ring-red-500/30 blur-[2px] animate-glow-pulse" />

          {/* Stamp body */}
          <div className="relative max-w-3xl w-full bg-red-600/15 border-4 border-red-500/60 text-red-100 rounded-[24px] shadow-[0_10px_30px_rgba(239,68,68,0.25),inset_0_0_0_1px_rgba(239,68,68,0.25)]">
            {/* Subtle inner pattern for paper/ink texture */}
            <div className="absolute inset-0 rounded-[22px] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_50%),repeating-linear-gradient(135deg,rgba(239,68,68,0.08)_0,rgba(239,68,68,0.08)_6px,transparent_6px,transparent_12px)] opacity-70 mix-blend-overlay" />

            {/* Content */}
            <div className="relative p-8 sm:p-10">
              <div className="text-center">
                <div className="mx-auto inline-flex items-center justify-center">
                  <span className="text-[12px] tracking-[0.5em] font-extrabold uppercase text-red-300/80">Notice</span>
                </div>
                <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black tracking-[0.06em] text-red-100 uppercase drop-shadow-[0_2px_8px_rgba(239,68,68,0.25)]">
                  This Page Is Coming Soon
                </h2>
                <p className="mt-4 text-sm sm:text-base text-red-100/90 leading-relaxed max-w-3xl mx-auto">
                  Soon, our customers will be able to:
                </p>
              </div>

              {/* Feature list */}
              <ul className="mt-4 space-y-2 text-[13px] sm:text-sm text-red-100/90 leading-relaxed">
                <li>– View and track all bought vehicles and purchase history in one place</li>
                <li>– Monitor live auctions with smart bid charts and auto-bid controls</li>
                <li>– Manage alerts and notifications about bids and price movements</li>
                <li>– Update their profile, contact details, and account settings</li>
                <li>– Review full bids history and performance over time</li>
                <li>– Organize and revisit their saved vehicles shortlist</li>
                <li>– Share verified testimonials with ratings and profile photos</li>
                <li>– Chat instantly with their dedicated sales representative via in-page chat and WhatsApp</li>
                <li>– Access a self-service help center for bidding, payments, and support</li>
                <li>…all from one powerful dashboard.</li>
              </ul>

              {/* Sign-off */}
              <div className="mt-6 text-center">
                <p className="text-sm font-semibold tracking-wide text-red-300/90">
                  Brought to you by GariDeals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComingSoonOverlay
