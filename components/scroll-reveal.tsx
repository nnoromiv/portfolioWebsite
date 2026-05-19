'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
  className?: string
  once?: boolean
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.65,
  className,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-80px' })

  const initial = {
    opacity: 0,
    y: direction === 'up' ? 48 : direction === 'down' ? -48 : 0,
    x: direction === 'left' ? 48 : direction === 'right' ? -48 : 0,
  }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
