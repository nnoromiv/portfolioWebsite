'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="w-5 h-5 ml-3" />

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="ml-3 mt-1 cursor-pointer"
      aria-label="Toggle dark mode"
    >
      <Image
        src={theme === 'dark' ? '/assets/sun.svg' : '/assets/moon.svg'}
        width={20}
        height={20}
        alt={theme === 'dark' ? 'Light mode' : 'Dark mode'}
      />
    </button>
  )
}
