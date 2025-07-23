"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import { Rocket } from "lucide-react"
import { useRouter } from "next/navigation"

// Placeholder chart components
const RevenueChart = () => (
  <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center">
    <span className="text-gray-500 text-sm">Revenue Chart Placeholder</span>
  </div>
)

const TeamChart = () => (
  <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center">
    <span className="text-gray-500 text-sm">Team Org Chart Placeholder</span>
  </div>
)

const TamHeatmap = () => (
  <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center">
    <span className="text-gray-500 text-sm">TAM Heatmap Placeholder</span>
  </div>
)

const Card7 = () => {
  const controls = useAnimation()
  const router = useRouter()
  const [quarter, setQuarter] = useState(2025.75) // Q4 2025 as 0.75 (Oct 1 start)

  const growthPlan = {
    "Q4 2025": "Launch Oct 1, sell 50 reports",
    "Q1 2026": "100 SaaS subscribers, hire team",
    "Q2 2026": "£2M Series A, 200 enterprise contracts",
    "Q3 2026": "Global pilot (London, Sydney)",
  }

  const handleClick = () => {
    router.push("/pitch-deck") // Link to pitch deck
  }

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 })
  }, [controls])

  return (
    <motion.div
      id="go-to-market"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-yellow-100 to-green-50 rounded-lg p-6 shadow-md hover:scale-105 transition-transform border-l-4 border-transparent hover:border-[#1EAEDB] cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center space-x-3 mb-4">
        <Rocket className="w-6 h-6 text-green-500" />
        <h3 className="text-lg font-semibold text-gray-900">Go-To-Market and Ask</h3>
      </div>

      <div className="text-sm text-gray-600 mb-4">
        <p className="mb-2">Blast off October 1, 2025, into a $6T QOZ land-grab with a $500M TAM!</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>Business Model:</strong> $199 reports, $1,500/mo SaaS, $100K/yr contracts.
          </li>
          <li>
            <strong>Revenue Forecast:</strong> 1% TAM ($60B) = $1.2B in 5 years. Year 1: $10M, Year 5: $500M (10%
            growth).
          </li>
          <li>
            <strong>Team:</strong> Liam Carter (young tech visionary, temp CEO), 1 Marketing (0.5%), 1 Legal (1%), 2
            Engineers (1% each), 1 CTO (5%), 2-3 yr exit. Bazil Cromer innovates new apps.
          </li>
          <li>
            <strong>Competitive Edge:</strong> 4 yrs transcript gold + AI vector search dominance.
          </li>
          <li>
            <strong>Market Analysis/TAM:</strong> $500M from investment/banking/underwriting/activists (8% $6T).
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <label className="text-sm text-gray-600">Growth Timeline (Years): {quarter}</label>
        <input
          type="range"
          min={2025.75}
          max={2030}
          step={0.25}
          value={quarter}
          onChange={(e) => setQuarter(Number.parseFloat(e.target.value))}
          className="w-full mt-2 h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
        />
        <p className="text-xs text-gray-600 mt-1">
          {Object.entries(growthPlan).find(([q, _]) => Number.parseFloat(q.split(" ")[0]) <= quarter)?.[1] ||
            "Launch Phase"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-white p-3 rounded-lg">
          <h4 className="text-md font-medium text-gray-900 mb-2">Revenue Timeline</h4>
          <RevenueChart />
        </div>
        <div className="bg-white p-3 rounded-lg">
          <h4 className="text-md font-medium text-gray-900 mb-2">Team Org</h4>
          <TeamChart />
        </div>
        <div className="bg-white p-3 rounded-lg">
          <h4 className="text-md font-medium text-gray-900 mb-2">TAM Heatmap</h4>
          <TamHeatmap />
        </div>
      </div>

      <div className="text-sm text-gray-600 mb-4">
        <p className="mb-2">
          <strong>Growth Plan:</strong> Q4 2025: Launch Oct 1, 50 reports; Q1 2026: 100 SaaS, team hire; Q2 2026: £2M
          Series A, 200 contracts; Q3 2026: Global (London, Sydney).
        </p>
        <p className="mb-2">
          <strong>CEO Transition:</strong> Liam replaced Q2 2026 by industry titan, Bazil leads new apps.
        </p>
        <p className="mb-2">
          <strong>Global Expansion:</strong> USA to EU/Asia post-Series A.
        </p>
        <p>
          <strong>Ask:</strong> £750K seed + £2M Series A Q2 2026 for team, tech, marketing to grab 1% TAM.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-2">
        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">$1.2B Rocket</span>
        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Young Team</span>
        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Global Blast</span>
      </div>

      <motion.div
        className="mt-4 text-sm text-[#1EAEDB] font-medium hover:underline"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Invest Now
      </motion.div>
    </motion.div>
  )
}

export default Card7
