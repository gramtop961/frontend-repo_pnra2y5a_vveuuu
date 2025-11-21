function Sustainability({ t }) {
  const metrics = [
    { label: t('metric_emissions'), value: '12.4M', unit: 'tons CO₂e avoided' },
    { label: t('metric_installations'), value: '3,200+', unit: 'global deployments' },
    { label: t('metric_uptime'), value: '99.97%', unit: 'fleet uptime' },
    { label: t('metric_partners'), value: '180+', unit: 'partners worldwide' },
  ]

  return (
    <section id="sustainability" aria-labelledby="sustainability-heading" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 id="sustainability-heading" className="mb-10 text-3xl font-bold text-slate-900 sm:text-4xl">{t('sustainability_title')}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, idx) => (
            <div key={idx} className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-slate-900">
              <p className="text-4xl font-extrabold text-emerald-700">{m.value}</p>
              <p className="mt-1 text-sm font-semibold">{m.unit}</p>
              <p className="mt-3 text-sm text-slate-700">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sustainability
