import { useEffect, useState } from 'react'

function Solutions({ t }) {
  const [solutions, setSolutions] = useState([])
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    const load = async () => {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/solutions`)
      const data = await res.json()
      setSolutions(data)
    }
    load()
  }, [])

  const sectors = ['all', 'solar', 'wind', 'storage', 'electrification', 'hydrogen']
  const filtered = activeFilter === 'all' ? solutions : solutions.filter(s => s.sector === activeFilter)

  return (
    <section id="solutions" aria-labelledby="solutions-heading" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <h2 id="solutions-heading" className="text-3xl font-bold text-slate-900 sm:text-4xl">{t('solutions_title')}</h2>
            <p className="mt-2 max-w-3xl text-slate-600">{t('solutions_copy')}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {sectors.map(s => (
              <button key={s} aria-pressed={activeFilter===s} onClick={() => setActiveFilter(s)} className={`rounded-full px-3 py-1 text-sm font-semibold transition ${activeFilter===s ? 'bg-emerald-500 text-slate-900' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'}`}>
                {s.charAt(0).toUpperCase()+s.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div role="list" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((card, idx) => (
            <article key={idx} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="mb-4 h-40 w-full rounded-xl bg-gradient-to-br from-emerald-100 to-sky-100" aria-hidden="true" />
              <p className="text-xs uppercase tracking-wider text-emerald-700">{card.sector}</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">{card.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{card.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions
