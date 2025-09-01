'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  UserGroupIcon, 
  ChatBubbleLeftRightIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const solutions = [
  {
    icon: UserGroupIcon,
    title: 'Sales',
    description: 'Have your AI agent perform multi-touch, personalized outreach and update you via Slack.',
    features: ['Lead qualification', 'Outreach automation', 'Pipeline management', 'CRM integration'],
    href: '/solutions/sales',
    gradient: 'from-blue-600/20 to-cyan-600/20'
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    description: 'Give rules in plain English for your AI agent to triage your inbox. Wake up to drafts ready for review.',
    features: ['Smart email sorting', 'Draft generation', 'Auto-responses', 'Priority detection'],
    href: '/solutions/email',
    gradient: 'from-purple-600/20 to-pink-600/20'
  },
  {
    icon: PhoneIcon,
    title: 'Meetings',
    description: 'Your AI agent sits in meetings, takes notes, and answers questions about past conversations.',
    features: ['Meeting transcription', 'Action item extraction', 'Scheduling automation', 'Follow-up tasks'],
    href: '/solutions/meetings',
    gradient: 'from-green-600/20 to-emerald-600/20'
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Customer Support',
    description: 'Your AI agent replies to customers in seconds, increasing satisfaction and conversion.',
    features: ['24/7 availability', 'Instant responses', 'Ticket routing', 'Knowledge base integration'],
    href: '/solutions/support',
    gradient: 'from-orange-600/20 to-red-600/20'
  }
]

export function SolutionsSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6"
          >
            AI agents for every{' '}
            <span className="gradient-text">use case</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Choose from our specialized AI agents or create custom ones for your specific needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group relative h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <CardContent className="relative p-8 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <solution.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-foreground">{solution.title}</h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {solution.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Button variant="ghost" className="group/button w-full justify-between" asChild>
                      <Link href={solution.href}>
                        Learn more
                        <ArrowRightIcon className="h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button size="lg" className="gradient-bg text-white font-semibold px-8 py-4" asChild>
            <Link href="/templates" className="flex items-center gap-2">
              Explore 100+ templates
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}