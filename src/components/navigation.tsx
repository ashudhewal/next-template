'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const solutions = [
  { name: 'Sales', href: '/solutions/sales', description: 'AI agents for sales automation' },
  { name: 'Email', href: '/solutions/email', description: 'Smart email management' },
  { name: 'Meetings', href: '/solutions/meetings', description: 'Meeting scheduling and notes' },
  { name: 'Customer Support', href: '/solutions/support', description: 'Automated customer service' },
]

const resources = [
  { name: 'Academy', href: '/academy', description: 'Learn about AI agents' },
  { name: 'Templates', href: '/templates', description: '100+ pre-built templates' },
  { name: 'Blog', href: '/blog', description: 'Latest insights and updates' },
  { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
]

const company = [
  { name: 'About', href: '/about', description: 'Our story and mission' },
  { name: 'Careers', href: '/careers', description: 'Join our team' },
  { name: 'Contact', href: '/contact', description: 'Get in touch' },
  { name: 'Security', href: '/security', description: 'SOC 2 & HIPAA compliant' },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold gradient-text">Lindy</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <DropdownMenu
            title="Solutions"
            items={solutions}
            isActive={activeDropdown === 'solutions'}
            onToggle={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
          />
          
          <DropdownMenu
            title="Resources"
            items={resources}
            isActive={activeDropdown === 'resources'}
            onToggle={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
          />
          
          <DropdownMenu
            title="Company"
            items={company}
            isActive={activeDropdown === 'company'}
            onToggle={() => setActiveDropdown(activeDropdown === 'company' ? null : 'company')}
          />
          
          <Link href="/pricing" className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors">
            Pricing
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button variant="ghost" asChild>
            <Link href="/signin">Sign in</Link>
          </Button>
          <Button asChild className="gradient-bg">
            <Link href="/signup">Try for free</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-50" />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border/10"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="text-2xl font-bold gradient-text">Lindy</span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-border">
                  <div className="space-y-2 py-6">
                    <MobileDropdown title="Solutions" items={solutions} />
                    <MobileDropdown title="Resources" items={resources} />
                    <MobileDropdown title="Company" items={company} />
                    <Link
                      href="/pricing"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted"
                    >
                      Pricing
                    </Link>
                  </div>
                  <div className="py-6 space-y-4">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/signin">Sign in</Link>
                    </Button>
                    <Button className="w-full gradient-bg" asChild>
                      <Link href="/signup">Try for free</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function DropdownMenu({
  title,
  items,
  isActive,
  onToggle,
}: {
  title: string
  items: { name: string; href: string; description: string }[]
  isActive: boolean
  onToggle: () => void
}) {
  return (
    <div className="relative">
      <button
        type="button"
        className={`flex items-center gap-x-1 text-sm font-semibold leading-6 transition-colors ${
          isActive ? 'text-primary' : 'text-foreground hover:text-primary'
        }`}
        onClick={onToggle}
      >
        {title}
        <ChevronDownIcon
          className={`h-5 w-5 flex-none transition-transform ${isActive ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-card shadow-lg ring-1 ring-border"
          >
            <div className="p-4">
              {items.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-muted"
                >
                  <div className="flex-auto">
                    <Link href={item.href} className="block font-semibold text-foreground">
                      {item.name}
                      <span className="absolute inset-0" />
                    </Link>
                    <p className="mt-1 text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MobileDropdown({
  title,
  items,
}: {
  title: string
  items: { name: string; href: string; description: string }[]
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="space-y-2">
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-foreground hover:bg-muted"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDownIcon
          className={`h-5 w-5 flex-none transition-transform ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            <div className="ml-4 space-y-2">
              {items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}