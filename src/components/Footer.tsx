import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { 
  Twitter, 
  LinkedIn, 
  Youtube, 
  Mail, 
  MapPin, 
  Phone 
} from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary-foreground/10"></div>
              <span className="text-xl font-bold">Beam AI</span>
            </div>
            
            <p className="text-primary-foreground/80 text-sm">
              The leading agentic AI platform for Process Automation. 
              Build and deploy intelligent AI agents in minutes.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail size={16} className="text-primary-foreground/60" />
                <span>hello@beam.ai</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone size={16} className="text-primary-foreground/60" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin size={16} className="text-primary-foreground/60" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="icon"
                className="text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Twitter size={20} />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10"
              >
                <LinkedIn size={20} />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Youtube size={20} />
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Product</h3>
            <nav className="flex flex-col space-y-3">
              <Link 
                href="#features" 
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Features
              </Link>
              <Link 
                href="#agents" 
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                AI Agents
              </Link>
              <Link 
                href="#automation" 
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Automation
              </Link>
              <Link 
                href="#integrations" 
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Integrations
              </Link>
              <Link 
                href="#api" 
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                API
              </Link>
              <Link 
                href="#security" 
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Security
              </Link>
            </nav>
          </div>

          {/* Solutions Links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Solutions</h3>
            <nav className="flex flex-col space-y-3">
              <Link 
                href="#customer-support" 
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Customer Support
              </Link>
              <Link 
                href="#sales" 
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Sales Automation
              </Link>
              <Link 
                href="#hr" 
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                HR & Onboarding
              </Link>
              <Link 
                href="#finance" 
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Finance & Accounting
              </Link>
              <Link 
                href="#marketing" 
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Marketing
              </Link>
              <Link 
                href="#enterprise" 
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Enterprise
              </Link>
            </nav>
          </div>

          {/* Resources & Newsletter */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Resources</h3>
            <nav className="flex flex-col space-y-3">
              <Link 
                href="#blog" 
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Blog
              </Link>
              <Link 
                href="#webinars" 
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Webinars
              </Link>
              <Link 
                href="#case-studies" 
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Case Studies
              </Link>
              <Link 
                href="#documentation" 
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Documentation
              </Link>
              <Link 
                href="#support" 
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Support
              </Link>
            </nav>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-medium">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Enter email" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button 
                  size="sm"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm text-primary-foreground/80">
              © 2025 Beam AI. All rights reserved.
            </p>
            
            <nav className="flex space-x-6">
              <Link 
                href="#privacy" 
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="#terms" 
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                href="#cookies" 
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Cookie Policy
              </Link>
            </nav>
          </div>

          <div className="text-sm text-primary-foreground/80">
            Built with ❤️ for the future of work
          </div>
        </div>
      </div>
    </footer>
  )
}