'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { CheckIcon, StarIcon } from '@heroicons/react/24/outline'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Perfect for getting started with AI agents',
    features: [
      '400 task credits monthly',
      'Basic agent templates',
      'Community support',
      '10 integrations',
      'Standard security'
    ],
    limitations: [
      'Limited monthly credits',
      'Basic templates only'
    ],
    cta: 'Start for free',
    href: '/signup',
    popular: false
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/month',
    description: 'For teams ready to scale their automation',
    features: [
      'Unlimited task credits',
      'All agent templates',
      'Priority support',
      '1,000+ integrations',
      'Advanced security',
      'Custom workflows',
      'Team collaboration',
      'Analytics dashboard'
    ],
    limitations: [],
    cta: 'Try Pro',
    href: '/signup?plan=pro',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$299',
    period: '/month',
    description: 'Advanced features for large organizations',
    features: [
      'Everything in Pro',
      '6,000+ integrations',
      'SOC 2 Type II compliance',
      'HIPAA compliance',
      'Dedicated support',
      'Custom integrations',
      'Advanced analytics',
      'Multi-team management',
      'SLA guarantees'
    ],
    limitations: [],
    cta: 'Contact sales',
    href: '/contact-sales',
    popular: false
  }
]

const addOnPricing = {
  title: 'Need more credits?',
  description: '$10 per extra 1,000 credits for both Pro and Enterprise plans',
  note: 'Credit usage depends on automation complexity and frequency'
}

export function PricingSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              Simple, transparent{' '}
              <span className="gradient-text">pricing</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the plan that fits your automation needs. No hidden fees, cancel anytime.
            </p>
            <div className="inline-flex items-center rounded-full border border-border/50 bg-card/50 px-6 py-2 text-sm text-muted-foreground backdrop-blur-sm">
              <StarIcon className="h-4 w-4 mr-2 text-yellow-500" />
              14-day free trial on all paid plans
            </div>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card className={`h-full ${plan.popular ? 'border-primary/50 shadow-lg scale-105' : 'border-border/50'} bg-card/80 backdrop-blur-sm`}>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-5xl font-bold gradient-text">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-1">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent>
                  <Button 
                    className={`w-full mb-8 ${plan.popular ? 'gradient-bg text-white' : ''}`} 
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <Link href={plan.href}>
                      {plan.cta}
                    </Link>
                  </Button>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">What&apos;s included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {plan.limitations.length > 0 && (
                      <div className="pt-4 border-t border-border">
                        <h5 className="font-medium text-muted-foreground text-xs mb-2 uppercase tracking-wide">
                          Limitations:
                        </h5>
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation, limitationIndex) => (
                            <li key={limitationIndex} className="text-xs text-muted-foreground">
                              • {limitation}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Add-on Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-16"
        >
          <Card className="max-w-2xl mx-auto border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {addOnPricing.title}
              </h3>
              <p className="text-lg text-muted-foreground mb-4">
                {addOnPricing.description}
              </p>
              <p className="text-sm text-muted-foreground">
                {addOnPricing.note}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Questions about pricing?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h4 className="font-semibold text-foreground mb-2">
                What counts as a task credit?
              </h4>
              <p className="text-muted-foreground text-sm">
                Each action your AI agent performs counts as one credit. This includes sending emails, updating CRM records, or processing data.
              </p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-foreground mb-2">
                Can I change plans anytime?
              </h4>
              <p className="text-muted-foreground text-sm">
                Yes! You can upgrade, downgrade, or cancel your subscription at any time. Changes take effect immediately.
              </p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-foreground mb-2">
                Is there a setup fee?
              </h4>
              <p className="text-muted-foreground text-sm">
                No setup fees, no hidden costs. You only pay for your subscription and any additional credits you use.
              </p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-foreground mb-2">
                What support do I get?
              </h4>
              <p className="text-muted-foreground text-sm">
                Free users get community support, Pro users get priority email support, and Enterprise gets dedicated support with SLA.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                Still have questions? Contact us
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}