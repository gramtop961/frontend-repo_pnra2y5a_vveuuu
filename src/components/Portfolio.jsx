import { useEffect, useState, useRef } from 'react'

function Portfolio({ t }) {
  const [items, setItems] = useState([])
  const scroller = useRef(null)

  useEffect(() => {
    const seed = async () => {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/solutions?featured=true`)
      const data = await res.json()
      setItems(data)
    }
    seed()
  }, [])

  const scrollBy = (delta) => {
    scroller.current?.scrollBy({ left: delta, behavior: 'smooth' })
  }

  return (
    <section id="portfolio" aria-labelledby="portfolio-heading" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 id="portfolio-heading" className="text-3xl font-bold text-slate-900 sm:text-4xl">{t('portfolio_title')}</h2>
          <div className="flex gap-2">
            <button aria-label="Scroll left" onClick={() => scrollBy(-320)} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">◀</button>
            <button aria-label="Scroll right" onClick={() => scrollBy(320)} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">▶</button>
          </div>
        </div>

        <div ref={scroller} className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
          {items.map((it, idx) => (
            <div key={idx} className="min-w-[300px] snap-start rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-3 h-32 rounded-xl bg-gradient-to-br from-sky-100 to-emerald-100" aria-hidden="true" />
              <p className="text-xs uppercase tracking-wider text-emerald-700">{it.sector}</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">{it.name}</h3>
              <ul className="mt-2 list-disc pl-4 text-sm text-slate-600">
                {(it.specs || []).slice(0,3).map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
