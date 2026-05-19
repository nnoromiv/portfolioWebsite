'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { NAV_LINKS } from '@/lib/nav-links'
import ThemeToggle from './theme-toggle'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20'
          : 'bg-transparent'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-black">
          <span className="text-white">IV</span>
          <span className="text-green-500">.</span>
        </Link>

        {/* Desktop — left links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.slice(0, 3).map((nav) => (
            <Link
              key={nav.name}
              href={nav.link}
              className="text-zinc-400 text-sm font-medium hover:text-white transition-colors link-underline"
            >
              {nav.name}
            </Link>
          ))}
        </div>

        {/* Desktop — right links + CTA */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.slice(3, 5).map((nav) => (
            <Link
              key={nav.name}
              href={nav.link}
              className="text-zinc-400 text-sm font-medium hover:text-white transition-colors link-underline"
            >
              {nav.name}
            </Link>
          ))}
          <Link
            href={NAV_LINKS[5].link}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-green-500 text-black text-sm font-bold rounded-full hover:bg-green-400 transition-all active:scale-95"
          >
            Contact Me
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile — hamburger */}
        <button
          className="md:hidden text-zinc-300 hover:text-white transition-colors p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-zinc-950/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="px-4 sm:px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((nav, i) => (
                <motion.div
                  key={nav.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={nav.link}
                    className="block py-2.5 text-zinc-400 font-medium hover:text-green-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {nav.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-2 pb-1">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
