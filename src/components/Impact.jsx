import { useEffect, useState } from 'react'

function Impact({ t }) {
  const [stories, setStories] = useState([])

  useEffect(() => {
    const load = async () => {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/stories`)
      const data = await res.json()
      setStories(data)
    }
    load()
  }, [])

  return (
    <section id="impact" aria-labelledby="impact-heading" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 id="impact-heading" className="mb-8 text-3xl font-bold text-slate-900 sm:text-4xl">{t('impact_title')}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((s, idx) => (
            <article key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-40 rounded-xl bg-gradient-to-br from-emerald-100 to-sky-100" aria-hidden="true" />
              <p className="text-xs uppercase tracking-wider text-emerald-700">{s.location}</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Impact
