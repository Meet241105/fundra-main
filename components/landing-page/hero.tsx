import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, TrendingUp, Users, Zap } from 'lucide-react'
import Link from 'next/link'

function FloatingOrb({ size = 400, color = 'hope' }: { size?: number; color?: string }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl pointer-events-none opacity-30 ${
        color === 'hope'
          ? 'bg-hope/30 dark:bg-hope/40'
          : 'bg-blue-500/20 dark:bg-blue-500/30'
      }`}
      style={{
        width: size,
        height: size,
      }}
    />
  )
}

function StatBadge({ icon: Icon, value, label }: { icon: React.ElementType; value: string; label: string }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-card/80 backdrop-blur-sm border border-border rounded-2xl shadow-sm hover:scale-105 hover:-translate-y-0.5 transition-transform">
      <div className="w-10 h-10 bg-hope/10 rounded-xl flex items-center justify-center">
        <Icon className="w-5 h-5 text-hope" />
      </div>
      <div>
        <p className="font-display font-bold text-lg">{value}</p>
        <p className="text-xs text-muted-foreground">{label}</p>
      </div>
    </div>
  )
}

function CampaignCard({ className = '' }: { className?: string }) {
  return (
    <div className={`relative bg-card/90 backdrop-blur-md border border-border rounded-2xl p-5 w-72 shadow-lg dark:shadow-none ${className}`}>
      <div className="absolute -top-2 -right-2 px-3 py-1 bg-hope text-white text-xs font-bold rounded-full">
        LIVE
      </div>
      <div className="h-32 bg-gradient-to-br from-hope/20 to-emerald-500/20 rounded-xl mb-4 flex items-center justify-center">
        <div className="w-16 h-16 bg-hope/20 rounded-full flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-hope" />
        </div>
      </div>
      <h3 className="font-semibold text-lg mb-1">Community Garden</h3>
      <p className="text-sm text-muted-foreground mb-4">Sustainable Living</p>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-hope font-semibold">2,500 USDC</span>
          <span className="text-muted-foreground">of 10,000</span>
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-hope to-emerald-400 rounded-full w-1/4" />
        </div>
        <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
          <span className="flex items-center gap-1">
            <Users className="w-3 h-3" /> 45 backers
          </span>
          <span>12 days left</span>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen px-6 pt-24 pb-16 flex items-center overflow-hidden bg-background">
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute top-1/4 -left-32">
        <FloatingOrb size={600} />
      </div>
      <div className="absolute bottom-1/4 -right-32">
        <FloatingOrb size={500} color="blue" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <FloatingOrb size={800} />
      </div>

      {/* Grain overlay */}
      <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-hope/10 border border-hope/20 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hope opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-hope"></span>
              </span>
              <span className="font-mono-alt text-sm text-hope">Built on Solana</span>
            </div>

            {/* Main heading */}
            <div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                <span className="block">Crowdfunding</span>
                <span className="block mt-2">
                  without{' '}
                  <span className="relative inline-block">
                    <span className="text-gradient-hope">limits</span>
                  </span>
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Launch your campaign in minutes. No middlemen, no borders, no hidden fees.
              Just you, your supporters, and the blockchain.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/create">
                <Button
                  size="lg"
                  className="px-8 py-7 rounded-xl text-lg font-semibold bg-hope text-white hover:bg-hope/90 glow-hope group"
                >
                  Start Campaign
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-4 pt-4">
              <StatBadge icon={TrendingUp} value="$125K+" label="Total Raised" />
              <StatBadge icon={Users} value="1,200+" label="Contributors" />
              <StatBadge icon={Zap} value="<1s" label="Finality" />
            </div>
          </div>

          {/* Right content - Campaign Card */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Background decorative elements */}
            <div className="absolute top-10 -left-8 w-64 h-64 border border-hope/20 rounded-full" />
            <div className="absolute -bottom-10 right-10 w-48 h-48 border border-border rounded-full" />

            {/* Main campaign card */}
            <CampaignCard className="relative z-10" />

            {/* Secondary floating elements */}
            <div className="absolute -top-4 -right-4 lg:right-8 z-20">
              <div className="px-4 py-3 bg-card backdrop-blur-sm border border-border rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-hope/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-hope" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Total Campaigns</p>
                    <p className="font-semibold text-sm">50+</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 -left-8 lg:left-0 z-20">
              <div className="px-4 py-3 bg-card backdrop-blur-sm border border-border rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-8 h-8 bg-gradient-to-br from-hope/50 to-emerald-500/50 rounded-full border-2 border-card" />
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">1,200+ backers</p>
                    <p className="text-xs text-muted-foreground">total contributors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
