import { ArrowUpRight, Users, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const sampleCampaigns = [
  {
    id: '1',
    title: 'Community Garden Project',
    description: 'Building a sustainable community garden in downtown.',
    raised: 5000,
    goal: 10000,
    backers: 45,
    daysLeft: 12,
    category: 'Community',
  },
  {
    id: '2',
    title: 'Open Source Dev Tools',
    description: 'Creating free developer tools for the Solana ecosystem.',
    raised: 15000,
    goal: 25000,
    backers: 120,
    daysLeft: 8,
    category: 'Technology',
  },
  {
    id: '3',
    title: 'Education for All',
    description: 'Providing coding education to underprivileged youth.',
    raised: 8500,
    goal: 20000,
    backers: 78,
    daysLeft: 21,
    category: 'Education',
  },
]

export default function Campaigns() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="font-mono-alt text-hope text-sm tracking-widest uppercase">
              Featured Campaigns
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 tracking-tight">
              Discover{' '}
              <span className="text-gradient-hope">projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mt-6">
              Support innovative ideas and make a real impact. Every contribution counts.
            </p>
          </div>
          <Link href="/explore" className="mt-6 md:mt-0">
            <Button variant="outline" className="group rounded-full px-6">
              View All
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </Link>
        </div>

        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleCampaigns.map((campaign) => {
            const progress = (campaign.raised / campaign.goal) * 100

            return (
              <div
                key={campaign.id}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-hope/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(91,187,125,0.1)] hover:scale-[1.02] hover:-translate-y-1"
              >
                
                <div className="h-48 bg-gradient-to-br from-hope/20 to-emerald-500/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-card/80 backdrop-blur-sm text-xs font-medium rounded-full">
                      {campaign.category}
                    </span>
                  </div>
                </div>

                
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold mb-2 group-hover:text-hope transition-colors">
                    {campaign.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                    {campaign.description}
                  </p>


                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-hope font-semibold">${campaign.raised.toLocaleString()}</span>
                      <span className="text-muted-foreground">of ${campaign.goal.toLocaleString()}</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-hope to-emerald-400 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {campaign.backers} backers
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {campaign.daysLeft} days left
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
