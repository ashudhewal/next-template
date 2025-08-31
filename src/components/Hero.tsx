'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hire Self-Learning{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  AI Agents
                </span>{' '}
                to Run Your Operations
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Meet the leading agentic AI platform for Agentic Process Automation. 
                Used by Fortune 500 companies and scale-ups, the platform automates 
                workflows with an advanced AI agent platform to reduce operational 
                cost and create leverage
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground group"
              >
                Request Access
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="beam-blur border-muted-foreground/20 group"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4 text-center sm:text-left">
                Used by Fortune 500 Companies & Scale ups
              </p>
              
              {/* Company Logos */}
              <div className="flex flex-wrap items-center gap-6 opacity-60">
                <div className="h-8 w-24 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs font-medium">Hitachi</span>
                </div>
                <div className="h-8 w-24 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs font-medium">Microsoft</span>
                </div>
                <div className="h-8 w-24 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs font-medium">Sopra Steria</span>
                </div>
                <div className="h-8 w-24 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs font-medium">Accenture</span>
                </div>
                <div className="h-8 w-24 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs font-medium">Deloitte</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Main App Screenshot */}
              <div className="beam-hero-image relative aspect-[4/3] w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-2xl">
                  {/* Simulated App Interface */}
                  <div className="p-6 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="text-xs text-muted-foreground">Beam AI Platform</div>
                    </div>
                    
                    {/* Dashboard Content */}
                    <div className="flex-1 space-y-4">
                      <div className="h-8 bg-primary/10 rounded-lg flex items-center px-3">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        <span className="text-xs font-medium">AI Agent: Customer Support</span>
                      </div>
                      
                      <div className="h-8 bg-secondary/10 rounded-lg flex items-center px-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                        <span className="text-xs font-medium">AI Agent: Sales Processing</span>
                      </div>
                      
                      <div className="h-8 bg-green-100 rounded-lg flex items-center px-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-xs font-medium">AI Agent: Data Analysis</span>
                      </div>
                      
                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-3 mt-6">
                        <div className="bg-white/50 rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-primary">97%</div>
                          <div className="text-xs text-muted-foreground">Accuracy</div>
                        </div>
                        <div className="bg-white/50 rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-secondary">24/7</div>
                          <div className="text-xs text-muted-foreground">Uptime</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center animate-pulse delay-75">
                <div className="w-6 h-6 bg-secondary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}