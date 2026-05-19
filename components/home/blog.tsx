import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

interface BlogPost {
  badge: string
  badgeColor: string
  image: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
}

const POSTS: BlogPost[] = [
  {
    badge: 'UI/UX Design',
    badgeColor: 'bg-green-500/20 border-green-500/30 text-green-300',
    image: '/assets/projects/blog-uiux.jpg',
    title: 'Design Unraveled: Behind the Scenes of UI/UX',
    excerpt:
      'A deep dive into the decisions that separate good design from exceptional digital experiences.',
    author: 'Nnorom',
    date: '22 July 2023',
    readTime: '5 min read',
  },
  {
    badge: 'Web Development',
    badgeColor: 'bg-blue-500/20 border-blue-500/30 text-blue-300',
    image: '/assets/projects/blog-webdev.jpg',
    title: 'The Beginning of Design: Why HTML Still Matters',
    excerpt:
      'Revisiting the fundamentals — how solid HTML structure underpins every great web interface.',
    author: 'Nnorom',
    date: '22 July 2023',
    readTime: '4 min read',
  },
]

export default function Blog() {
  return (
    <section className="py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 md:mb-14">
            <div>
              <span className="section-label">Insights</span>
              <h2 className="section-heading">Latest Thoughts</h2>
            </div>
            <Link
              href="#"
              className="flex items-center gap-2 text-green-400 hover:text-green-300 text-sm font-semibold transition-colors"
            >
              View All Posts <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {POSTS.map((post, i) => (
            <ScrollReveal key={post.title} delay={i * 0.15}>
              <article className="group glass glass-hover border border-white/8 rounded-2xl overflow-hidden h-full flex flex-col">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    fill
                    alt={post.title}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${post.badgeColor}`}>
                      {post.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-green-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed flex-1">{post.excerpt}</p>

                  {/* Meta + CTA */}
                  <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/6">
                    <div className="flex items-center gap-3 text-zinc-500 text-xs">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        {post.author}
                      </span>
                      <span className="text-zinc-700">•</span>
                      <span>{post.date}</span>
                      <span className="text-zinc-700">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      href="#"
                      className="flex items-center gap-1.5 text-green-400 text-xs font-semibold hover:gap-3 transition-all duration-300"
                    >
                      Read <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
