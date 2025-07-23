"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  AlertTriangle,
  Users,
  DollarSign,
  Zap,
  ChevronDown,
  Play,
  BarChart3,
  ArrowRight,
  Gavel,
  Scale,
  Globe,
} from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export default function InvestorPitch() {
  const scrollToCards = () => {
    document.getElementById("opportunity-cards")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  const cards = [
    {
      title: "Infrastructure Inertia",
      teaser:
        "Jackson's 7,300 pipe breaks. Fresno's $100M repair bill. Buffalo's flood zones. Three cities. One devastating pattern.",
      insight: "What happens when promotion meets reality?",
      tags: ["Crisis", "Disconnect", "Risk"],
      icon: <AlertTriangle className="w-5 h-5" />,
      borderColor: "border-l-red-500",
      bgColor: "bg-red-50/50",
      href: "/infrastructure-inertia",
      stats: "3 cities • $225M in repairs • 974,157 people at risk",
    },
    {
      title: "Demographic Backlash",
      teaser:
        "Jackson: 18% aging population, 45% affordability crisis. Fresno: ESG demands they can't meet. Buffalo: The perfect storm brewing.",
      insight: "What happens when cities can't serve their people?",
      tags: ["Aging Crisis", "Affordability Gap", "ESG Pressure"],
      icon: <Users className="w-5 h-5" />,
      borderColor: "border-l-blue-500",
      bgColor: "bg-blue-50/50",
      href: "/demographic-backlash",
      stats: "3 cities • 974,157 residents • Growing backlash",
    },
    {
      title: "Policy Fragmentation",
      teaser:
        "Jackson: 47 policies stalled for re-election. New Orleans: Tourism vs. flood protection. Baltimore: Port vs. water quality. Committee politics blocking $4B+ investments.",
      insight: "What happens when committees prioritize votes over infrastructure?",
      tags: ["Committee Conflicts", "Policy Delays", "Re-election Priority"],
      icon: <Gavel className="w-5 h-5" />,
      borderColor: "border-l-red-500",
      bgColor: "bg-red-50/50",
      href: "/policy-fragmentation",
      stats: "9 cities • 287 policies stalled • $4B+ at risk",
    },
    {
      title: "Regulatory Capture",
      teaser:
        "Houston: Petrochemical industry controls 94% of environmental decisions. Jackson: Utilities block federal oversight. Miami: Developers override sea rise codes. Industry capture threatens compliance.",
      insight: "What happens when regulators serve industry instead of public interest?",
      tags: ["Industry Influence", "Compliance Gaps", "Regulatory Failure"],
      icon: <Scale className="w-5 h-5" />,
      borderColor: "border-l-purple-500",
      bgColor: "bg-purple-50/50",
      href: "/card-4",
      stats: "9 cities • 82% avg industry control • 336 violations ignored",
    },
    {
      title: "Opportunity Convergence",
      teaser:
        "Colorado River at 70% capacity. Phoenix QOZ scores rising. Desalination at 5% impact. Three forces colliding in a $50M+ investment landscape.",
      insight: "Where does crisis become opportunity?",
      tags: ["Water Decline", "Desalination", "QOZ Opportunity"],
      icon: <BarChart3 className="w-5 h-5" />,
      borderColor: "border-l-green-500",
      bgColor: "bg-green-50/50",
      href: "/opportunity-convergence",
      stats: "3 cities • $50M+ bets • Treasury-grade intel",
    },
    {
      title: "ESG Synchrony",
      teaser:
        "Opportunity knocks: $6T QOZ value unlocks with OBBBA & IIJA. Solve Jackson's pipe crisis, water/lithium unrest, and Indigenous signals with CivilSignals.",
      insight: "Where does ESG compliance meet investment opportunity?",
      tags: ["$6T QOZ", "CivilSignals", "ESG Sync"],
      icon: <Globe className="w-5 h-5" />,
      borderColor: "border-l-teal-500",
      bgColor: "bg-teal-50/50",
      href: "/opportunity-convergence",
      stats: "FPIC Dashboard • ESG Risk Index • AI Vector Search",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight">CIVIL SIGNALS</h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-12 font-light tracking-wide">
              The Palantir of ESG Intelligence Platform
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Badge className="bg-white/20 text-white border-white/30 px-6 py-2 text-base font-medium rounded-full backdrop-blur-sm">
                Real-time Monitoring
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-6 py-2 text-base font-medium rounded-full backdrop-blur-sm">
                ESG Risk Analysis
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 px-6 py-2 text-base font-medium rounded-full backdrop-blur-sm">
                Political Intelligence
              </Badge>
            </div>

            <Button
              onClick={scrollToCards}
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
              Explore the Platform
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <ChevronDown className="w-6 h-6 text-white/70" />
          </motion.div>
        </div>
      </section>

      {/* Cards Section */}
      <section id="opportunity-cards" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {cards.map((card, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Link href={card.href}>
                  <Card
                    className={`group h-full ${card.borderColor} border-l-4 border-t-0 border-r-0 border-b-0 ${card.bgColor} hover:shadow-2xl transition-all duration-500 bg-white cursor-pointer hover:scale-[1.02] hover:-translate-y-1`}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-gray-100 group-hover:bg-gray-200 transition-colors">
                          {card.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-gray-700 transition-colors">
                            {card.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed mb-4 text-sm">{card.teaser}</p>
                          <p className="text-gray-800 font-medium italic mb-6 text-sm">{card.insight}</p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {card.tags.map((tag, tagIndex) => (
                              <Badge
                                key={tagIndex}
                                variant="secondary"
                                className="bg-blue-100 text-blue-700 border-0 px-3 py-1 text-xs font-medium rounded-full"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="text-xs text-gray-500 mb-4 font-mono">{card.stats}</div>

                          <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                            <span className="text-sm font-medium">Explore the story</span>
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Investment Opportunity Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Investment Opportunity</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              $1M secures 11.76% at $7.5M valuation. Targeting $4.8M Year 2, $10M Year 3, with 10x ROI at $75M exit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "AI Development", amount: "$500K", color: "text-blue-600" },
              { label: "Data Infrastructure", amount: "$200K", color: "text-green-600" },
              { label: "Marketing & Sales", amount: "$200K", color: "text-purple-600" },
              { label: "Operations", amount: "$100K", color: "text-orange-600" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gray-50"
              >
                <div className={`text-3xl font-bold ${item.color} mb-2`}>{item.amount}</div>
                <div className="text-gray-600 font-medium">{item.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <DollarSign className="w-5 h-5 mr-2" />
              Schedule Investment Call
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-emerald-400" />
            <span className="text-3xl font-bold">CivilSignals</span>
          </div>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Transforming ESG intelligence with AI-powered insights from the conversations that matter most.
          </p>
          <div className="flex justify-center gap-8 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-8">© 2024 CivilSignals. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
