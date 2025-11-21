function Vision({ t }) {
  return (
    <section id="vision" aria-labelledby="vision-heading" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 id="vision-heading" className="text-3xl font-bold text-slate-900 sm:text-4xl">
            {t('vision_title')}
          </h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            {t('vision_copy')}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: t('p_sustainability_title'), desc: t('p_sustainability_desc') },
            { title: t('p_innovation_title'), desc: t('p_innovation_desc') },
            { title: t('p_collaboration_title'), desc: t('p_collaboration_desc') },
            { title: t('p_reliability_title'), desc: t('p_reliability_desc') },
          ].map((item, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:shadow-md" role="listitem">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Vision
