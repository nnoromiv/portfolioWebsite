'use client'

import { useEffect, useState } from 'react'

interface TypeWritingProps {
  strings: string[]
  typeSpeed?: number
  deleteSpeed?: number
  pauseDuration?: number
}

export default function TypeWriting({
  strings,
  typeSpeed = 80,
  deleteSpeed = 45,
  pauseDuration = 1600,
}: TypeWritingProps) {
  const [displayed, setDisplayed] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = strings[index] ?? ''

    if (!deleting && displayed.length < target.length) {
      const t = setTimeout(
        () => setDisplayed(target.slice(0, displayed.length + 1)),
        typeSpeed
      )
      return () => clearTimeout(t)
    }

    if (!deleting && displayed.length === target.length) {
      const t = setTimeout(() => setDeleting(true), pauseDuration)
      return () => clearTimeout(t)
    }

    if (deleting && displayed.length > 0) {
      const t = setTimeout(
        () => setDisplayed(displayed.slice(0, -1)),
        deleteSpeed
      )
      return () => clearTimeout(t)
    }

    if (deleting && displayed.length === 0) {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % strings.length)
    }
  }, [displayed, deleting, index, strings, typeSpeed, deleteSpeed, pauseDuration])

  return (
    <span>
      {displayed}
      <span className="animate-pulse opacity-70">|</span>
    </span>
  )
}
