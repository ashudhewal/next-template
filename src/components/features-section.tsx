'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { 
  WrenchScrewdriverIcon,
  RocketLaunchIcon,
  LinkIcon,
  SparklesIcon,
  CommandLineIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: WrenchScrewdriverIcon,
    title: 'Agent Builder',
    subtitle: '"Vibe Coding" Revolution',
    description: 'Simply describe what you want in natural language. Lindy\'s Agent Builder interprets your intent and creates a fully functional AI agent—no technical knowledge required.',
    badge: 'NEW',
    highlights: [
      'Plain English instructions',
      'No-code agent creation',
      'Context-aware responses',
      'Custom workflows'
    ]
  },
  {
    icon: RocketLaunchIcon,
    title: 'Autopilot',
    subtitle: 'The Last Integration You\'ll Ever Need',
    description: 'Your agents don\'t just work within predefined integrations—they can control cloud computers to navigate any website or application.',
    badge: 'POWERFUL',
    highlights: [
      'Universal automation',
      'Web browser control',
      'App integration',
      'Smart decision making'
    ]
  },
  {
    icon: LinkIcon,
    title: '6,000+ Integrations',
    subtitle: 'Connect Everything',
    description: 'Seamlessly connect with all your favorite tools and services. From CRMs to communication platforms, Lindy works with your entire tech stack.',
    badge: 'EXPANDED',
    highlights: [
      'Popular SaaS tools',
      'Custom APIs',
      'Real-time sync',
      'Secure connections'
    ]
  }
]

const stats = [
  { value: '6,000+', label: 'Integrations' },
  { value: '100+', label: 'Templates' },
  { value: '24/7', label: 'Availability' },
  { value: 'SOC 2', label: 'Compliant' },
]

export function FeaturesSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Badge variant="secondary" className="mb-6">
              <SparklesIcon className="h-4 w-4 mr-2" />
              Powered by Advanced AI
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              The future of{' '}
              <span className="gradient-text">automation</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Create intelligent agents that think, adapt, and execute complex workflows with cutting-edge AI technology
            </p>
          </motion.div>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group h-full border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {feature.badge}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm font-medium text-primary mb-4">
                      {feature.subtitle}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {feature.description}
                  </p>

                  <div className="space-y-2">
                    {feature.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* AI Models Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <CommandLineIcon className="h-8 w-8 text-primary mr-4" />
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    Powered by Cutting-Edge AI Models
                  </h3>
                  <p className="text-muted-foreground">
                    Gemini 2.5 Pro, GPT-4.1, and Claude for superior reasoning and decision-making
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {['Gemini 2.5 Pro', 'GPT-4.1', 'Claude', 'Custom Models'].map((model) => (
                  <div key={model} className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-3">
                      <GlobeAltIcon className="h-8 w-8 text-primary" />
                    </div>
                    <p className="font-medium text-foreground">{model}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Button size="lg" className="gradient-bg text-white font-semibold px-8 py-4" asChild>
            <Link href="/signup">
              Start building agents
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}