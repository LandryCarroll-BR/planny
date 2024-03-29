import { GraduationCap, Home } from 'lucide-react'
import Link from 'next/link'
import { Logo } from './logo'

const links = [{ name: 'Dashboard', href: '#', icon: Home }]

function DashboardNav() {
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
        >
          <link.icon className="h-4 w-4" />
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

export { DashboardNav }
