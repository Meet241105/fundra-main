import { Wallet, PenTool, Share2, ArrowDownToLine } from 'lucide-react'

const steps = [
  {
    icon: Wallet,
    title: 'Connect Wallet',
    description: 'Link your Solana wallet in one click. We support Phantom, Solflare, and more.',
    step: '01',
  },
  {
    icon: PenTool,
    title: 'Create Campaign',
    description: 'Set your funding goal, deadline, and tell your story. Your campaign goes live instantly.',
    step: '02',
  },
  {
    icon: Share2,
    title: 'Share & Fund',
    description: 'Spread the word. Supporters can contribute SOL or USDC directly to your campaign.',
    step: '03',
  },
  {
    icon: ArrowDownToLine,
    title: 'Withdraw Funds',
    description: 'Once funded, withdraw directly to your wallet. No waiting periods, no approvals.',
    step: '04',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 px-6 overflow-hidden bg-secondary/30">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="font-mono-alt text-hope text-sm tracking-widest uppercase">
            Simple Process
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 tracking-tight">
            How it{' '}
            <span className="text-gradient-hope">works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
            From idea to funded project in four simple steps. No complicated setup,
            no hidden fees, just pure crowdfunding.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hope/30 to-transparent hidden lg:block" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.title} className="relative group">
                {/* Card */}
                <div className="relative bg-card border border-border rounded-2xl p-8 h-full hover:border-hope/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(91,187,125,0.1)]">
                  {/* Step number */}
                  <div className="absolute -top-4 left-8">
                    <span className="font-mono-alt text-6xl font-bold text-hope/10 group-hover:text-hope/20 transition-colors duration-300">
                      {step.step}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 w-14 h-14 bg-hope/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-hope/20 transition-colors duration-300">
                    <step.icon className="w-7 h-7 text-hope" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
