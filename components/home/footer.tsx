import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail, Phone, Globe } from 'lucide-react'
import { NAV_LINKS } from '@/lib/nav-links'

export default function Footer() {
  return (
    <footer className="relative border-t border-green-500/20 bg-zinc-950 pt-12 md:pt-20 pb-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-green-500/60 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-green-500/3 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">

          {/* Brand */}
          <div className="space-y-5">
            <h2 className="text-4xl font-black">
              <span className="text-white">IV</span>
              <span className="text-green-500">.</span>
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Passionate about crafting meaningful digital solutions. Let&apos;s turn your ideas
              into reality together.
            </p>
            {/* Social icons */}
            <div className="flex gap-4">
              {[
                { href: 'https://twitter.com/nnoromiv', Icon: Twitter, label: 'Twitter' },
                { href: 'https://www.github.com/nnoromiv', Icon: Github, label: 'GitHub' },
                {
                  href: 'https://www.linkedin.com/in/nnorom',
                  Icon: Linkedin,
                  label: 'LinkedIn',
                },
              ].map(({ href, Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl glass border border-white/8 flex items-center justify-center text-zinc-500 hover:text-green-400 hover:border-green-500/30 transition-all duration-300"
                >
                  <Icon size={15} />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Navigation</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((nav) => (
                <li key={nav.name}>
                  <Link
                    href={nav.link}
                    className="text-zinc-500 hover:text-green-400 transition-colors text-sm link-underline"
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-500 text-sm">
                <Phone size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                +44 7596 717786
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                <Link
                  href="mailto:nnorom.prince44@gmail.com"
                  className="text-zinc-500 hover:text-green-400 transition-colors link-underline"
                >
                  nnorom.prince44@gmail.com
                </Link>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Globe size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                <Link
                  href="https://nnorom.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-500 hover:text-green-400 transition-colors link-underline"
                >
                  nnorom.vercel.app
                </Link>
              </li>
            </ul>
          </div>

          {/* Availability */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Availability</h3>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-medium">Open to Work</span>
            </div>
            <p className="text-zinc-600 text-xs leading-relaxed max-w-[200px]">
              Available for freelance projects, contracts, and full-time opportunities.
            </p>
            <Link
              href="https://api.whatsapp.com/send?phone=447596717786&text=Hey%2C%20I%20require%20your%20expertise%20in%20programming"
              target="_blank"
              rel="noreferrer"
              className="btn-green text-xs mt-6 inline-flex"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-zinc-600 text-xs">Copyright &copy; 2024 IV. All Rights Reserved.</p>
          <p className="text-zinc-700 text-xs">Built with Next.js &bull; TypeScript &bull; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
