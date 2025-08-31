import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        
        {/* Additional sections can be added here */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">AI Agents: Workforce With Human-Level Performance</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              AI agents deliver precise, efficient task automation, matching human-level performance. 
              They operate continuously, reducing errors and increasing productivity, allowing businesses 
              to scale fast without additional human resource costs.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">A Learning System to Optimize and Automate Workflows. It's Possible.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              AI agents, powered by agentic workflows, leverage advanced learning systems to autonomously 
              identify and automate essential tasks. This dynamic adaptability keeps operations smooth 
              and responsive to changing demands.
            </p>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-background rounded-lg p-6 text-left">
                <h3 className="font-semibold mb-2">What is agentic AI?</h3>
                <p className="text-muted-foreground">
                  Agentic AI refers to intelligent systems that can act autonomously to achieve goals, 
                  make decisions, and adapt to changing conditions without constant human oversight.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-6 text-left">
                <h3 className="font-semibold mb-2">How can AI automation scale operations with intelligent agents?</h3>
                <p className="text-muted-foreground">
                  AI agents can handle repetitive tasks, process large volumes of data, and work 24/7, 
                  allowing your business to scale operations without proportionally increasing headcount.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-6 text-left">
                <h3 className="font-semibold mb-2">What are our AI tools and their benefits?</h3>
                <p className="text-muted-foreground">
                  Our platform offers customer support agents, sales automation, HR onboarding, 
                  and process optimization tools that reduce operational costs and improve efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
