import { useMemo, useState } from 'react'
import Hero from './components/Hero'
import Vision from './components/Vision'
import Solutions from './components/Solutions'
import Portfolio from './components/Portfolio'
import Impact from './components/Impact'
import Sustainability from './components/Sustainability'
import Contact from './components/Contact'

const dictionary = {
  en: {
    hero_aria: 'Hero section with 3D technology scene',
    badge_innovation: 'Driving clean energy innovation',
    hero_title: 'Clean energy for a resilient, electrified world',
    hero_subtitle: 'Solar. Wind. Storage. Electrification. Hydrogen. We engineer reliable systems that accelerate the energy transition globally.',
    cta_primary: 'Explore Solutions',
    cta_secondary: 'Contact Us',

    vision_title: 'Our Vision & Commitment',
    vision_copy: 'We advance solar technology, wind power, battery energy storage, electrification, and hydrogen with a focus on sustainability, safety, and total lifecycle value.',
    p_sustainability_title: 'Sustainability',
    p_sustainability_desc: 'Designs that reduce emissions, conserve resources, and maximize circularity.',
    p_innovation_title: 'Innovation',
    p_innovation_desc: 'R&D with robust testing, digital twins, and field data to push efficiency.',
    p_collaboration_title: 'Collaboration',
    p_collaboration_desc: 'Working with utilities, developers, and partners to deliver at scale.',
    p_reliability_title: 'Reliability',
    p_reliability_desc: 'Proven performance in the harshest environments with global service.',

    solutions_title: 'Technology & Solutions',
    solutions_copy: 'From utility-scale solar to hydrogen-ready systems, we deliver bankable technology backed by global engineering and local expertise.',

    portfolio_title: 'Product Portfolio',

    impact_title: 'Innovation & Impact Stories',

    sustainability_title: 'Sustainability Metrics',
    metric_emissions: 'Emissions avoided with our deployed fleet and green manufacturing.',
    metric_installations: 'Installations across utility, commercial, and residential segments.',
    metric_uptime: 'Long-term reliability across diverse climates and grid conditions.',
    metric_partners: 'Trusted by developers, IPPs, and global technology partners.',

    contact_title: 'Contact & Inquiry',
    contact_copy: 'Connect with our regional teams for solutions, partnerships, media, or careers.',
    f_name: 'Full name',
    f_email: 'Email address',
    f_company: 'Company (optional)',
    f_topic: 'Topic',
    f_message: 'Message',
    f_consent: 'I agree to the processing of my personal data and to be contacted.',
    f_submit: 'Send message',
  },
  es: {
    hero_aria: 'Sección principal con escena 3D',
    badge_innovation: 'Impulsando la innovación en energía limpia',
    hero_title: 'Energía limpia para un mundo electrificado y resiliente',
    hero_subtitle: 'Solar. Eólica. Almacenamiento. Electrificación. Hidrógeno. Diseñamos sistemas confiables que aceleran la transición energética.',
    cta_primary: 'Explorar soluciones',
    cta_secondary: 'Contáctanos',

    vision_title: 'Nuestra Visión y Compromiso',
    vision_copy: 'Impulsamos la tecnología solar, eólica, almacenamiento, electrificación e hidrógeno con enfoque en sostenibilidad, seguridad y valor de ciclo de vida.',
    p_sustainability_title: 'Sostenibilidad',
    p_sustainability_desc: 'Diseños que reducen emisiones, conservan recursos y maximizan la circularidad.',
    p_innovation_title: 'Innovación',
    p_innovation_desc: 'I+D con pruebas robustas y datos de campo para mejorar la eficiencia.',
    p_collaboration_title: 'Colaboración',
    p_collaboration_desc: 'Trabajamos con utilities y socios para entregar a escala.',
    p_reliability_title: 'Confiabilidad',
    p_reliability_desc: 'Rendimiento probado con servicio global.',

    solutions_title: 'Tecnología y Soluciones',
    solutions_copy: 'Desde solar a gran escala hasta sistemas listos para hidrógeno, entregamos tecnología financiable con ingeniería global.',

    portfolio_title: 'Portafolio de Productos',

    impact_title: 'Historias de Innovación e Impacto',

    sustainability_title: 'Métricas de Sostenibilidad',
    metric_emissions: 'Emisiones evitadas con nuestra flota instalada y manufactura verde.',
    metric_installations: 'Instalaciones en segmentos de utilidad, C&I y residencial.',
    metric_uptime: 'Confiabilidad a largo plazo en climas y redes diversas.',
    metric_partners: 'Con la confianza de desarrolladores y socios globales.',

    contact_title: 'Contacto y Consultas',
    contact_copy: 'Conecta con nuestros equipos regionales para soluciones, alianzas o carreras.',
    f_name: 'Nombre completo',
    f_email: 'Correo electrónico',
    f_company: 'Empresa (opcional)',
    f_topic: 'Tema',
    f_message: 'Mensaje',
    f_consent: 'Acepto el tratamiento de mis datos personales.',
    f_submit: 'Enviar',
  }
}

function App() {
  const [lang, setLang] = useState('en')
  const t = useMemo(() => (key) => dictionary[lang][key] || key, [lang])

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Top nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-900/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 text-white">
            <span className="inline-block h-3 w-3 rounded-full bg-emerald-400" />
            <span className="text-sm font-semibold tracking-wide">Cleantech Global</span>
          </a>
          <nav className="hidden gap-6 text-sm font-semibold text-slate-200 md:flex">
            <a href="#solutions" className="hover:text-white">Solutions</a>
            <a href="#portfolio" className="hover:text-white">Products</a>
            <a href="#impact" className="hover:text-white">Impact</a>
            <a href="#sustainability" className="hover:text-white">Sustainability</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => setLang(lang === 'en' ? 'es' : 'en')} className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-white hover:bg-white/10" aria-label="Toggle language">
              {lang.toUpperCase()}
            </button>
          </div>
        </div>
      </header>

      <main>
        <Hero t={t} onPrimaryCta={() => {}} />
        <Vision t={t} />
        <Solutions t={t} />
        <Portfolio t={t} />
        <Impact t={t} />
        <Sustainability t={t} />
        <Contact t={t} />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950 py-10 text-slate-300">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <p className="text-sm">© {new Date().getFullYear()} Cleantech Global — All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Cookie Preferences</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
