'use client'

import dynamic from 'next/dynamic'

const Typewriter = dynamic(() => import('typewriter-effect'), {
  ssr: false,
  loading: () => <span>...</span>,
})

interface TypeWritingProps {
  strings: string[]
}

export default function TypeWriting({ strings }: TypeWritingProps) {
  return (
    <Typewriter
      options={{
        strings,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}
