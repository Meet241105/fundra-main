import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function Cta() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-hope/5 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-hope/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-hope/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="relative text-center">
          {/* Decorative element */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-hope/10 border border-hope/20 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-hope" />
            <span className="font-mono-alt text-sm text-hope">Ready to make an impact?</span>
          </div>

          {/* Main heading */}
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
            Start your
            <br />
            <span className="text-gradient-hope">campaign today</span>
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Join thousands of creators who have brought their ideas to life.
            Zero platform fees. 100% of funds go to your project.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/create">
              <Button
                size="lg"
                className="px-10 py-7 rounded-full text-lg font-semibold bg-hope text-black hover:bg-hope/90 glow-hope group"
              >
                Create Campaign
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/explore">
              <Button
                variant="outline"
                size="lg"
                className="px-10 py-7 rounded-full text-lg font-semibold hover:border-hope/50 hover:bg-hope/5"
              >
                Explore Projects
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-16 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-hope rounded-full" />
              <span className="text-sm">No hidden fees</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-hope rounded-full" />
              <span className="text-sm">Instant withdrawals</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-hope rounded-full" />
              <span className="text-sm">Fully transparent</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
