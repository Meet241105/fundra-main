import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Menu } from 'lucide-react'

const navLinks = [
  { label: 'Explore', href: '/explore' },
  { label: 'Create Campaign', href: '/create' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-hope rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="font-display font-bold text-xl tracking-wider">FUNDRA</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              <span className="text-sm font-medium text-foreground/70 hover:text-hope transition-colors cursor-pointer">
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button className="bg-hope text-white hover:bg-hope/90 rounded-full px-6 font-semibold h-10">
            Connect Wallet
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button className="p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  )
}
