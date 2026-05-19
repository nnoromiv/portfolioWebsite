'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import { ScrollReveal } from '@/components/scroll-reveal'

const PROJECTS = [
  {
    index: 0,
    image: '/assets/projects/voote.jpg',
    badges: ['Web3', 'Blockchain', 'Android'],
    name: 'Voote',
    caption: 'Blockchain Voting System',
    description:
      'Full-stack blockchain voting platform with identity verification, OCR, fraud detection, and Ethereum smart contract integration — focused on data integrity, auditability, and end-to-end security.',
    stack: 'Kotlin · Jetpack Compose · React · Solidity · Web3 · Firebase · Microservices',
    link: 'https://www.github.com/nnoromiv',
  },
  {
    index: 1,
    image: '/assets/projects/vehicle-annotator.jpg',
    badges: ['ML/AI', 'Computer Vision', 'Desktop'],
    name: 'Automatic Vehicle Annotator',
    caption: 'Production YOLOv8 ML Application',
    description:
      'Production desktop ML application for automated vehicle detection using YOLOv8 trained across 7 object classes (Cars, Motorcycles, Pedal Cycles, LGVs, HGVs, PSVs, Pedestrians) — shipped with FastAPI inference backend and Docker deployment.',
    stack: 'Python · YOLOv8 · FastAPI · Electron · Docker · Digital Ocean · AWS',
    link: 'https://www.github.com/nnoromiv',
  },
  {
    index: 2,
    image: '/assets/projects/merchant-platform.jpg',
    badges: ['Fintech', 'API', 'Backend'],
    name: 'Merchant Onboarding Platform',
    caption: 'Risk Tooling & REST API Integrations',
    description:
      'Risk assessment tooling with integrations across 300+ external REST APIs, Jest unit and integration test coverage, monitoring dashboards, and structured logging — processing thousands of daily merchant transactions.',
    stack: 'Node.js · Express.js · Python · MySQL · AWS (EC2/S3) · Jest · CI/CD',
    link: 'https://www.github.com/nnoromiv',
  },
  {
    index: 3,
    image: '/assets/projects/adhd-pipeline.jpg',
    badges: ['ML Research', 'AI', 'Data Science'],
    name: 'ADHD Prediction Pipeline',
    caption: 'fMRI Classification with Explainability',
    description:
      'Classification models (Logistic Regression, Random Forest, Neural Networks) trained on fMRI and socio-emotional datasets reaching 80% accuracy — with SHAP & LIME explainability for GDPR-compliant transparency and automated data drift detection.',
    stack: 'Python · TensorFlow · Scikit-learn · SHAP · LIME · Pandas · NumPy',
    link: 'https://www.github.com/nnoromiv',
  },
]

export default function Portfolio() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    api.on('select', () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  const activeProject = PROJECTS[current]

  return (
    <section id="project" className="py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 md:mb-14">
            <div>
              <span className="section-label">Portfolio</span>
              <h2 className="section-heading">Featured Work</h2>
            </div>
            <Link
              href="https://www.github.com/nnoromiv"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-green-400 hover:text-green-300 text-sm font-semibold transition-colors group"
            >
              View All on GitHub
              <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Carousel */}
        <ScrollReveal delay={0.1}>
          <Carousel setApi={setApi} className="w-full px-2 sm:px-6">
            <CarouselContent>
              {PROJECTS.map((project) => (
                <CarouselItem key={project.index}>
                  <div className="relative group rounded-2xl overflow-hidden border border-white/8">
                    <Image
                      src={project.image}
                      width={1200}
                      height={600}
                      alt={project.name}
                      className="w-full h-[400px] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex gap-2 flex-wrap mb-4">
                        {project.badges.map((b) => (
                          <span key={b} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-300">
                            {b}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-3xl font-black text-white">{project.name}</h3>
                      <p className="text-zinc-400 text-sm mt-1">{project.caption}</p>
                      <p className="text-zinc-500 text-xs mt-2 font-medium hidden sm:block opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        {project.stack}
                      </p>
                      <p className="text-zinc-400 text-sm mt-3 max-w-2xl hidden sm:block opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                        {project.description}
                      </p>
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 mt-5 text-sm text-green-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hover:text-green-300"
                      >
                        View on GitHub <ExternalLink size={13} />
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 sm:-left-6" />
            <CarouselNext className="-right-4 sm:-right-6" />
          </Carousel>
        </ScrollReveal>

        {/* Slide dots */}
        <div className="flex justify-center gap-2 mt-6">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-green-500' : 'w-1.5 bg-zinc-700 hover:bg-zinc-500'
              }`}
            />
          ))}
        </div>

        {/* Active project stack */}
        {activeProject && (
          <div className="mt-6 text-center">
            <p className="text-zinc-600 text-xs font-mono">{activeProject.stack}</p>
          </div>
        )}
      </div>
    </section>
  )
}
