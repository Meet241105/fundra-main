const stats = [
  { value: '$125K+', label: 'Total Raised', description: 'Funds raised on our platform' },
  { value: '50+', label: 'Campaigns', description: 'Active and completed campaigns' },
  { value: '1,200+', label: 'Contributors', description: 'Supporters worldwide' },
  { value: '35+', label: 'Funded', description: 'Successfully funded projects' },
]

export default function Stats() {
  return (
    <section className="relative py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl md:text-5xl font-bold text-hope mb-2">
                {stat.value}
              </p>
              <p className="font-semibold text-foreground mb-1">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
