import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

const STATS = [
  { value: '3+', label: 'Years Pro Exp.' },
  { value: '300+', label: 'APIs Integrated' },
  { value: '80%', label: 'ML Accuracy' },
]

const SKILLS = [
  'Node.js', 'Express.js', 'Python', 'FastAPI',
  'AWS (EC2/S3/RDS)', 'Docker', 'GitHub Actions',
  'MySQL', 'PostgreSQL', 'MongoDB',
  'React', 'Next.js', 'TypeScript',
  'PyTorch', 'YOLOv8', 'TensorFlow',
  'Jest', 'TDD', 'Solidity / Web3',
]

export default function Hiring() {
  return (
    <section className="py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left — image */}
          <ScrollReveal direction="right">
            <div className="relative mx-auto lg:mx-0 w-fit">
              <div className="absolute inset-0 bg-green-500/15 blur-3xl scale-110 rounded-3xl" />
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-green-500/30 to-transparent pointer-events-none z-10" />
              <div className="relative rounded-3xl overflow-hidden border border-green-500/20 shadow-2xl shadow-green-500/10">
                <Image
                  src="/assets/me.jpg"
                  width={480}
                  height={480}
                  alt="Christian Nnorom"
                  className="object-cover w-full max-w-[480px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
              </div>
            </div>
          </ScrollReveal>

          {/* Right — text */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="space-y-8">
              <div>
                <span className="section-label">Why Choose Me</span>
                <h2 className="section-heading">
                  Backend depth.<br />
                  <span className="text-gradient">AI breadth.</span>
                </h2>
              </div>

              <p className="text-zinc-400 leading-relaxed text-sm">
                Backend-focused software engineer who ships production systems end-to-end — from API
                design and database architecture through cloud deployment, observability, and ML
                pipelines. I drive projects from scoping to production with full ownership in
                fast-paced, lean teams.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {STATS.map((stat) => (
                  <div key={stat.label} className="glass border border-white/8 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-black text-green-500 leading-tight">{stat.value}</div>
                    <div className="text-zinc-500 text-[10px] sm:text-xs mt-1 leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="https://api.whatsapp.com/send?phone=447596717786&text=Hey%2C%20I%20require%20your%20expertise%20in%20programming"
                target="_blank"
                rel="noreferrer"
                className="btn-green inline-flex"
              >
                Let&apos;s Build Together <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
