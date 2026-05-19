import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

const SOCIALS = [
  { href: 'https://twitter.com/nnoromiv', Icon: Twitter, label: 'Twitter' },
  { href: 'https://www.github.com/nnoromiv', Icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/nnorom', Icon: Linkedin, label: 'LinkedIn' },
]

export default function Socials() {
  return (
    <div className="flex items-center gap-4">
      {SOCIALS.map(({ href, Icon, label }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="text-zinc-500 hover:text-white dark:hover:text-white transition-colors"
        >
          <Icon size={22} />
        </Link>
      ))}
    </div>
  )
}
