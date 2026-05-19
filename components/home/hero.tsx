'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react'
import TypeWriting from '@/components/type-writing'

const FLOATING_TECH = [
  { label: 'React', top: '8%', left: '-12%', delay: '0s', duration: '6s' },
  { label: 'Next.js', top: '28%', right: '-14%', delay: '1.2s', duration: '7s' },
  { label: 'TypeScript', top: '60%', right: '-16%', delay: '0.4s', duration: '8s' },
  { label: 'Node.js', bottom: '18%', left: '-14%', delay: '2s', duration: '5s' },
  { label: 'Python', top: '50%', left: '-18%', delay: '0.8s', duration: '9s' },
]

const TYPEWRITER_ROLES = [
  'Software Engineer',
  'Backend Developer',
  'Frontend Developer',
  'ML Engineer',
]

function fadeIn(delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
  }
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 sm:pt-24 pb-12 md:pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute top-1/4 right-1/3 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-green-500/5 rounded-full blur-[140px] animate-pulse" />
        <div
          className="absolute bottom-1/4 left-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-green-500/8 rounded-full blur-[100px]"
          style={{ animation: 'float 12s ease-in-out infinite' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-green-500/3 rounded-full blur-[200px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20">

          {/* Left — text */}
          <div className="flex-1 space-y-5 md:space-y-6 w-full">
            {/* Available badge */}
            <motion.div {...fadeIn(0.15)}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Available for work
              </span>
            </motion.div>

            {/* Name */}
            <motion.div {...fadeIn(0.27)} className="space-y-1">
              <p className="text-zinc-400 text-base sm:text-lg font-medium">Hi, I&apos;m</p>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-none tracking-tight">
                <span className="text-white">NNOROM</span>
                <br />
                <span className="text-gradient">CHRISTIAN</span>
              </h1>
            </motion.div>

            {/* Typewriter role */}
            <motion.div {...fadeIn(0.39)} className="flex items-center gap-3">
              <span className="w-8 h-px bg-green-500 flex-shrink-0" />
              <span className="text-lg sm:text-xl md:text-2xl font-semibold text-zinc-300">
                <TypeWriting strings={TYPEWRITER_ROLES} />
              </span>
            </motion.div>

            {/* Skills line */}
            <motion.p {...fadeIn(0.51)} className="text-zinc-500 text-xs sm:text-sm leading-relaxed max-w-md">
              Node.js &bull; Python &bull; Express.js &bull; AWS &bull; Docker &bull; TypeScript &bull;
              React &bull; Next.js &bull; MySQL &bull; PostgreSQL &bull; PyTorch &bull; YOLOv8
            </motion.p>

            {/* CTA buttons */}
            <motion.div {...fadeIn(0.63)} className="flex flex-wrap gap-3 pt-1">
              <Link
                href="https://api.whatsapp.com/send?phone=447596717786&text=Hey%2C%20I%20require%20your%20expertise%20in%20programming"
                target="_blank"
                rel="noreferrer"
                className="btn-green text-sm"
              >
                Hire Me <ArrowRight size={15} />
              </Link>
              <Link href="#project" className="btn-ghost text-sm">
                View Projects
              </Link>
            </motion.div>

            {/* Socials + stars */}
            <motion.div {...fadeIn(0.75)} className="flex flex-wrap items-center gap-4 sm:gap-5 pt-1">
              <Link href="https://twitter.com/nnoromiv" target="_blank" rel="noreferrer"
                className="text-zinc-500 hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="https://www.github.com/nnoromiv" target="_blank" rel="noreferrer"
                className="text-zinc-500 hover:text-white transition-colors">
                <Github size={20} />
              </Link>
              <Link href="https://www.linkedin.com/in/nnorom" target="_blank" rel="noreferrer"
                className="text-zinc-500 hover:text-white transition-colors">
                <Linkedin size={20} />
              </Link>
              <span className="hidden sm:block w-px h-5 bg-zinc-800" />
              <span className="text-zinc-500 text-sm">★★★★ 3+ Yrs Exp.</span>
            </motion.div>
          </div>

          {/* Right — photo */}
          <motion.div
            className="flex-shrink-0 relative"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Floating tech tags — desktop only to prevent mobile overflow */}
            {FLOATING_TECH.map((t) => (
              <div
                key={t.label}
                className="hidden lg:block absolute z-20 text-xs font-semibold px-2.5 py-1.5 rounded-full glass border border-white/10 text-zinc-300 whitespace-nowrap shadow-lg"
                style={{
                  top: t.top,
                  left: t.left,
                  right: t.right,
                  bottom: t.bottom,
                  animation: `float ${t.duration} ease-in-out ${t.delay} infinite`,
                }}
              >
                {t.label}
              </div>
            ))}

            {/* Circle */}
            <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500/30 via-transparent to-green-500/10 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full bg-green-500/15 blur-2xl" />
              <div className="absolute inset-3 rounded-full overflow-hidden border-2 border-green-500/30 ring-4 ring-black/40">
                <Image
                  src="/assets/me_2.jpg"
                  fill
                  className="object-cover object-top"
                  alt="Christian Nnorom"
                  priority
                />
              </div>

              {/* Experience badge */}
              <motion.div
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 glass border border-white/10 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-xl animate-float z-10"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5, type: 'spring' }}
              >
                <div className="text-[9px] sm:text-[10px] text-zinc-400 uppercase tracking-wider">Experience</div>
                <div className="text-white font-black text-base sm:text-xl leading-tight">3+ Yrs</div>
              </motion.div>

              {/* Stars badge */}
              <motion.div
                className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 glass border border-white/10 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-xl animate-float-slow z-10"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5, type: 'spring' }}
              >
                <div className="text-yellow-400 text-xs sm:text-sm tracking-wider">★★★★</div>
                <div className="text-[9px] sm:text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">Top Rated</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator — hide on small screens */}
        <motion.div
          className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-zinc-600 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-zinc-600 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
