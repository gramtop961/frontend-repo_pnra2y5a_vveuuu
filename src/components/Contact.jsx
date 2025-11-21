import { useEffect, useState } from 'react'

function Contact({ t }) {
  const [offices, setOffices] = useState([])
  const [status, setStatus] = useState(null)

  useEffect(() => {
    const load = async () => {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/offices`)
      const data = await res.json()
      setOffices(data)
    }
    load()
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      company: form.get('company'),
      topic: form.get('topic'),
      message: form.get('message'),
      consent: form.get('consent') === 'on'
    }

    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/inquiry`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const data = await res.json()
      setStatus({ ok: data.ok, message: data.message })
      if (data.ok) e.currentTarget.reset()
    } catch (e) {
      setStatus({ ok: false, message: 'Submission failed. Please try again.' })
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 id="contact-heading" className="text-3xl font-bold text-slate-900 sm:text-4xl">{t('contact_title')}</h2>
            <p className="mt-2 text-slate-600">{t('contact_copy')}</p>
            <ul className="mt-6 space-y-3">
              {offices.map((o, idx) => (
                <li key={idx} className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{o.region} • {o.city}</p>
                  {o.email && <p className="text-sm text-slate-600">{o.email}</p>}
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">{t('f_name')}</label>
                <input id="name" name="name" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200" />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">{t('f_email')}</label>
                <input id="email" name="email" type="email" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200" />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="company" className="block text-sm font-medium text-slate-700">{t('f_company')}</label>
                <input id="company" name="company" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200" />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="topic" className="block text-sm font-medium text-slate-700">{t('f_topic')}</label>
                <select id="topic" name="topic" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200">
                  <option>General Inquiry</option>
                  <option>Partnerships</option>
                  <option>Careers</option>
                  <option>Support</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">{t('f_message')}</label>
                <textarea id="message" name="message" rows="4" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200" />
              </div>
              <div className="sm:col-span-2 flex items-center gap-2">
                <input id="consent" name="consent" type="checkbox" className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                <label htmlFor="consent" className="text-sm text-slate-700">{t('f_consent')}</label>
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="w-full rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-slate-900 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300">{t('f_submit')}</button>
              </div>
              {status && (
                <p role="status" className={`sm:col-span-2 text-sm ${status.ok ? 'text-emerald-700' : 'text-red-600'}`}>{status.message}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
