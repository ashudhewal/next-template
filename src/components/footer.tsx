import Link from 'next/link'
import { 
  TwitterIcon, 
  GitHubIcon, 
  LinkedInIcon,
  DiscordIcon,
  SlackIcon
} from '@/components/icons/social-icons'

const navigation = {
  solutions: [
    { name: 'Sales', href: '/solutions/sales' },
    { name: 'Email', href: '/solutions/email' },
    { name: 'Meetings', href: '/solutions/meetings' },
    { name: 'Customer Support', href: '/solutions/support' },
    { name: 'Templates', href: '/templates' },
  ],
  product: [
    { name: 'Agent Builder', href: '/features/agent-builder' },
    { name: 'Autopilot', href: '/features/autopilot' },
    { name: 'Integrations', href: '/integrations' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Security', href: '/security' },
  ],
  resources: [
    { name: 'Academy', href: '/academy' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Blog', href: '/blog' },
    { name: 'Community', href: '/community' },
    { name: 'Help Center', href: '/help' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Press', href: '/press' },
    { name: 'Partners', href: '/partners' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' },
  ],
  social: [
    {
      name: 'Twitter',
      href: 'https://twitter.com/lindy_ai',
      icon: TwitterIcon,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/lindy-ai',
      icon: GitHubIcon,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/lindy-ai',
      icon: LinkedInIcon,
    },
    {
      name: 'Discord',
      href: 'https://discord.gg/lindy-ai',
      icon: DiscordIcon,
    },
    {
      name: 'Slack',
      href: 'https://lindy-ai.slack.com',
      icon: SlackIcon,
    },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <Link href="/" className="text-2xl font-bold gradient-text">
                Lindy
              </Link>
              <p className="mt-4 text-sm leading-6 text-muted-foreground max-w-xs">
                The simplest way to create, manage, and share AI agents. 
                Build your first AI employee in minutes, not months.
              </p>
            </div>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  Product
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  Resources
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-border pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 text-xs leading-5 text-muted-foreground mb-4 md:mb-0">
              {navigation.legal.map((item, index) => (
                <span key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                  {index < navigation.legal.length - 1 && (
                    <span className="ml-6 text-muted-foreground/50">•</span>
                  )}
                </span>
              ))}
            </div>
            <p className="text-xs leading-5 text-muted-foreground">
              &copy; {new Date().getFullYear()} Lindy AI, Inc. All rights reserved.
            </p>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  SOC 2 Type II Compliant
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  HIPAA Compliant
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  GDPR Ready
                </div>
              </div>
              
              <div className="text-xs text-muted-foreground">
                Built with ❤️ by the Lindy team
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}