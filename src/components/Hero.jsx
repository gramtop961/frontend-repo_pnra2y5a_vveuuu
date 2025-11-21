import Spline from '@splinetool/react-spline'

function Hero({ t, onPrimaryCta }) {
  return (
    <section aria-label={t('hero_aria')} className="relative min-h-[80vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DAWBaaySM7FLUKpn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20 sm:pt-36">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-200">
            {t('badge_innovation')}
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            {t('hero_title')}
          </h1>
          <p className="mt-4 text-lg text-slate-200 sm:text-xl">
            {t('hero_subtitle')}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#solutions" onClick={onPrimaryCta} className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-900">
              {t('cta_primary')}
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-slate-200/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-slate-900">
              {t('cta_secondary')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
