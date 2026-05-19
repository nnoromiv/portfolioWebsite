import { Server, Monitor, Cloud, Globe, Smartphone, CheckCircle } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

const SERVICES = [
  {
    icon: Server,
    title: 'Backend Engineering',
    description: 'Production server-side systems — from API design and database architecture to observability and incident response.',
    points: [
      'Node.js / Express.js & Python (FastAPI, Django) services',
      'REST API design, OpenAPI contracts, Microservices',
      'MySQL & PostgreSQL schema design, query optimisation',
      'Jest / Cypress integration & unit testing, TDD',
    ],
    accent: 'from-green-500/20 to-emerald-500/10',
    border: 'border-green-500/20',
    iconBg: 'bg-green-500/10 text-green-400',
  },
  {
    icon: Monitor,
    title: 'Frontend Engineering',
    description: 'Fast, accessible, pixel-perfect interfaces — built with modern frameworks and tested for production.',
    points: [
      'React & Next.js (App Router, SSR, SSG)',
      'TypeScript, Tailwind CSS, component libraries',
      'State management, API integration, performance optimisation',
      'React Testing Library, Cypress end-to-end testing',
    ],
    accent: 'from-sky-500/15 to-blue-500/10',
    border: 'border-sky-500/20',
    iconBg: 'bg-sky-500/10 text-sky-400',
  },
  {
    icon: Cloud,
    title: 'Cloud Engineering + AI/ML',
    description: 'End-to-end infrastructure and ML pipelines — from cloud deployment through model serving and monitoring.',
    points: [
      'AWS (EC2, S3, RDS, Lambda), Docker, Nginx, CI/CD',
      'Computer vision with YOLOv8 (7-class vehicle detection)',
      'PyTorch, TensorFlow, Scikit-learn model training',
      'SHAP & LIME explainability, data drift detection, MLOps',
    ],
    accent: 'from-violet-500/15 to-purple-500/10',
    border: 'border-violet-500/20',
    iconBg: 'bg-violet-500/10 text-violet-400',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Full-stack web solutions from concept to deployment — owning the entire product lifecycle.',
    points: [
      'End-to-end web applications (frontend + backend + database)',
      'Authentication, payments, real-time features',
      'SEO, accessibility, Core Web Vitals optimisation',
      'Deployment pipelines, domain, hosting & monitoring',
    ],
    accent: 'from-amber-500/15 to-orange-500/10',
    border: 'border-amber-500/20',
    iconBg: 'bg-amber-500/10 text-amber-400',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Cross-platform and native mobile apps — from architecture and build to App Store deployment.',
    points: [
      'Android native development with Kotlin & Jetpack Compose',
      'React Native cross-platform applications',
      'Flutter / Dart for iOS and Android',
      'Push notifications, offline mode, App Store deployment',
    ],
    accent: 'from-rose-500/15 to-pink-500/10',
    border: 'border-rose-500/20',
    iconBg: 'bg-rose-500/10 text-rose-400',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-16">
            <span className="section-label">Services</span>
            <h2 className="section-heading">What I Do</h2>
            <p className="text-zinc-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Full-spectrum engineering — backend systems, polished frontends, cloud infrastructure,
              AI/ML pipelines, and mobile apps. From scoping to production with full ownership.
            </p>
          </div>
        </ScrollReveal>

        {/* Top row — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {SERVICES.slice(0, 3).map((service, i) => {
            const Icon = service.icon
            return (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <ServiceCard service={service} Icon={Icon} />
              </ScrollReveal>
            )
          })}
        </div>

        {/* Bottom row — 2 cards centred */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-full lg:w-2/3 mx-auto">
          {SERVICES.slice(3).map((service, i) => {
            const Icon = service.icon
            return (
              <ScrollReveal key={service.title} delay={i * 0.1 + 0.15}>
                <ServiceCard service={service} Icon={Icon} />
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  Icon,
}: {
  service: (typeof SERVICES)[number]
  Icon: React.ElementType
}) {
  return (
    <div
      className={`group relative h-full glass glass-hover rounded-2xl p-7 overflow-hidden border ${service.border}`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-50 pointer-events-none`}
      />
      <div className="relative z-10">
        <div
          className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center mb-5`}
        >
          <Icon size={22} strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-black text-white mb-2">{service.title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-5">{service.description}</p>
        <ul className="space-y-2.5">
          {service.points.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-zinc-300 text-sm">
              <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center gap-2 text-green-400 text-sm font-semibold group-hover:gap-4 transition-all duration-300">
          Learn More <span>&rarr;</span>
        </div>
      </div>
    </div>
  )
}
