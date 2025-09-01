'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { PlayIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export function HeroSection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-br from-background via-background to-purple-950/20 pt-20 pb-32">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center rounded-full border border-border/50 bg-card/50 px-6 py-2 text-sm text-muted-foreground backdrop-blur-sm mb-8">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Now with 6,000+ integrations
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl mb-8"
          >
            Meet your first{' '}
            <span className="gradient-text">AI employee</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Lindy is an AI assistant that can automate any workflow. Create agents that think, adapt, and make decisions—no coding required. Just describe what you want in plain English.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button size="lg" className="gradient-bg text-white font-semibold px-8 py-4 text-lg group" asChild>
              <Link href="/signup" className="flex items-center gap-2">
                Try for free
                <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg group" asChild>
              <Link href="/demo" className="flex items-center gap-2">
                <PlayIcon className="h-5 w-5" />
                Watch demo
              </Link>
            </Button>
          </motion.div>

          {/* Demo Video/Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative mx-auto max-w-5xl"
          >
            <div className="relative rounded-2xl border border-border/50 bg-card/20 backdrop-blur-sm p-4 shadow-2xl">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
                <div className="text-center">
                  <PlayIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive demo coming soon</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements around the demo */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 bg-card border border-border rounded-lg px-4 py-2 shadow-lg"
            >
              <span className="text-sm font-medium text-foreground">Sales Agent</span>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-4 -right-4 bg-card border border-border rounded-lg px-4 py-2 shadow-lg"
            >
              <span className="text-sm font-medium text-foreground">Email Assistant</span>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-lg px-4 py-2 shadow-lg"
            >
              <span className="text-sm font-medium text-foreground">Meeting Scheduler</span>
            </motion.div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground text-sm mb-8">Trusted by teams at</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {['Company A', 'Company B', 'Company C', 'Company D', 'Company E'].map((company) => (
                <div
                  key={company}
                  className="px-6 py-2 border border-border rounded-lg bg-card/50 text-muted-foreground font-medium"
                >
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}