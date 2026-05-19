import { ScrollReveal } from '@/components/scroll-reveal'
import { Briefcase } from 'lucide-react'

const EXPERIENCE = [
  {
    company: 'CitiSense',
    location: 'London, United Kingdom',
    period: 'Feb 2026 — Present',
    role: 'Full Stack & ML Engineer',
    context: 'Urban intelligence platform for IoT sensor data, road defect detection, and ML-based vehicle analysis.',
    responsibilities: [
      'Designed and built RESTful Express.js backend for a multi-view Automatic Traffic Counter (ATC) dashboard serving live IoT sensor data to highway teams.',
      'Deployed to AWS EC2/S3/RDS; applied IAM policies and implemented CloudWatch monitoring with alerting for error spikes and latency thresholds.',
      'Engineered a production YOLOv8 desktop ML app for automated vehicle detection across 7 classes; served via FastAPI backend containerised with Docker.',
      'Built a Python ingestion pipeline for live LAQN/OpenAQ air quality feeds with validation, normalisation, and storage to AWS S3 and Postgres.',
    ],
    stack: 'Next.js · Node.js · Express.js · Python · FastAPI · PostgreSQL · AWS · Docker · YOLOv8',
  },
  {
    company: 'University of Essex',
    location: 'United Kingdom',
    period: 'Oct 2024 — Oct 2025',
    role: 'Software & AI Engineer (Researcher)',
    context: 'AI, blockchain, and neurological data research projects.',
    responsibilities: [
      'Designed Voote — a full-stack blockchain voting system with identity verification, OCR, fraud detection, and Ethereum smart contract integration.',
      'Trained ADHD prediction classification models (Logistic Regression, Random Forest, Neural Networks) on fMRI datasets reaching 80% accuracy; applied SHAP & LIME for GDPR-compliant explainability.',
      'Developed Python backend APIs and AngularJS frontend for the Happy Again post-COVID neurological data visualisation platform.',
    ],
    stack: 'Kotlin · Python · TensorFlow · PyTorch · SHAP · LIME · Solidity · Web3 · Firebase · AngularJS',
  },
  {
    company: 'RedTech Limited',
    location: 'Fintech & Payment Solutions',
    period: 'Nov 2023 — Oct 2024',
    role: 'Software Developer',
    context: 'Merchant acquisition and risk platform.',
    responsibilities: [
      'Built and maintained Node.js/Express backend services handling merchant onboarding logic, data validation, and integrations across 300+ external REST APIs.',
      'Implemented Jest unit and integration tests across backend services, ensuring stability of onboarding pipelines handling thousands of daily transactions.',
      'Developed monitoring dashboards and structured logging; investigated and resolved production incidents including API timeout failures.',
      'Built data-driven React/Next.js frontends and played a senior sprint role: code review, API contract definition, and mentoring junior engineers.',
    ],
    stack: 'Node.js · Express.js · Next.js · React · TypeScript · MySQL · PostgreSQL · AWS · Jest · CI/CD',
  },
  {
    company: 'Tony Elumelu Foundation',
    location: 'Lagos, Nigeria',
    period: 'Oct 2023 — Nov 2023',
    role: 'Program Operations & Data Analyst',
    context: 'Pan-African entrepreneurship programme.',
    responsibilities: [
      'Built an internal data retrieval and filtering system enabling fast access to 5,000+ candidate records from unstructured datasets.',
      'Focused on validation, accuracy, and usability — directly supporting decision-making teams during candidate evaluation.',
    ],
    stack: 'Python · Data Analysis · Internal Tooling',
  },
]

export default function WorkExperience() {
  return (
    <section id="resume" className="py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <ScrollReveal>
          <div className="mb-10 md:mb-16">
            <span className="section-label">Career</span>
            <h2 className="section-heading">Work Experience</h2>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-500/60 via-green-500/20 to-transparent" />

          <div className="space-y-8 md:space-y-12">
            {EXPERIENCE.map((exp, i) => (
              <ScrollReveal
                key={exp.company + exp.period}
                delay={i * 0.1}
                direction={i % 2 === 0 ? 'right' : 'left'}
              >
                <div
                  className={`relative flex flex-col md:flex-row gap-0 ${
                    i % 2 !== 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[18px] md:left-1/2 w-4 h-4 rounded-full bg-green-500 -translate-x-1/2 mt-6 ring-4 ring-black/80 shadow-lg shadow-green-500/30 z-10" />

                  {/* Empty spacer */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div className="ml-10 sm:ml-14 md:ml-0 md:w-1/2 md:px-10">
                    <div className="glass glass-hover border border-white/8 rounded-2xl p-4 sm:p-6 group">
                      <span className="inline-block text-xs text-green-400 font-semibold bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full mb-4">
                        {exp.period}
                      </span>

                      <h3 className="text-xl font-black text-white">{exp.company}</h3>
                      <p className="text-zinc-500 text-xs mt-0.5">{exp.location}</p>
                      <p className="text-zinc-600 text-xs mt-0.5 italic mb-3">{exp.context}</p>

                      <div className="flex items-center gap-2 text-green-400 text-sm font-semibold mb-4">
                        <Briefcase size={13} />
                        {exp.role}
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.responsibilities.map((r) => (
                          <li key={r} className="text-zinc-400 text-sm leading-relaxed flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                            {r}
                          </li>
                        ))}
                      </ul>

                      <p className="text-zinc-600 text-xs font-medium border-t border-white/5 pt-3 mt-3">
                        {exp.stack}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
