// Partial component for Card 5
"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import { Globe } from "lucide-react"
import { useRouter } from "next/navigation"

const Card5 = () => {
  const controls = useAnimation()
  const router = useRouter()
  const [year, setYear] = useState(2025)
  const [focusMetric, setFocusMetric] = useState("esg")

  const data = {
    qozValue: 6000, // $6T QOZ opportunity, illustrative
    esgRisk: { jackson: 65, miami: 85, tampa: 80 }, // % risk, illustrative
    waterLevel: { jackson: 40, miami: 30, tampa: 35 }, // % availability, illustrative
    mineralDemand: { jackson: 50, miami: 70, tampa: 60 }, // % demand, illustrative
  }

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 })
  }, [controls])

  const handleClick = () => {
    router.push(`/esg-synchrony?metric=${focusMetric}`)
  }

  return (
    <motion.div
      id="esg"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-green-100 to-teal-50 rounded-lg p-6 shadow-md hover:scale-105 transition-transform border-l-4 border-transparent hover:border-[#1EAEDB] cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center space-x-3 mb-4">
        <Globe className="w-6 h-6 text-teal-500" />
        <h3 className="text-lg font-semibold text-gray-900">ESG Synchrony</h3>
      </div>
      <div className="text-sm text-gray-600 mb-4">
        <p className="mb-2">
          Opportunity knocks: $6T QOZ value unlocks with OBBBA & IIJA. Solve Jackson's pipe crisis, water/lithium
          unrest, and Indigenous signals with CivilSignals. Key tools:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>FPIC Dashboard: Aligns Indigenous rights.</li>
          <li>ESG Risk Index: Rates compliance (65-85%).</li>
          <li>Heatmap: Maps investment zones.</li>
          <li>Minerals & Water Gauge: Tracks 30-40% levels.</li>
          <li>AI Vector Search: Syncs siloed data.</li>
          <li>Before vs. After: Shows impact.</li>
        </ul>
      </div>
      <div className="mb-4">
        <label className="text-sm text-gray-600">Time Horizon: {year}</label>
        <input
          type="range"
          min={2025}
          max={2035}
          value={year}
          onChange={(e) => setYear(Number.parseInt(e.target.value))}
          className="w-full mt-2 h-2 bg-teal-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
      <div className="mb-4">
        <label className="text-sm text-gray-600">Focus Metric:</label>
        <div className="flex space-x-2 mt-2">
          <button
            onClick={() => setFocusMetric("esg")}
            className={`px-3 py-1 rounded text-xs ${focusMetric === "esg" ? "bg-teal-600 text-white" : "bg-white border border-teal-300 text-teal-600"}`}
          >
            ESG Risk
          </button>
          <button
            onClick={() => setFocusMetric("water")}
            className={`px-3 py-1 rounded text-xs ${focusMetric === "water" ? "bg-teal-600 text-white" : "bg-white border border-teal-300 text-teal-600"}`}
          >
            Water Level
          </button>
          <button
            onClick={() => setFocusMetric("minerals")}
            className={`px-3 py-1 rounded text-xs ${focusMetric === "minerals" ? "bg-teal-600 text-white" : "bg-white border border-teal-300 text-teal-600"}`}
          >
            Mineral Demand
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(data.esgRisk).map(([city, value]) => (
          <motion.div
            key={city}
            className="bg-white p-3 rounded-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-md font-medium text-gray-900 capitalize">{city}</h4>
            <p>
              {focusMetric === "esg"
                ? `${value}% ESG Risk`
                : focusMetric === "water"
                  ? `${data.waterLevel[city]}% Water`
                  : `${data.mineralDemand[city]}% Minerals`}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full">$6T QOZ</span>
        <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full">CivilSignals</span>
        <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full">ESG Sync</span>
      </div>
      <motion.div
        className="mt-4 text-sm text-[#1EAEDB] font-medium hover:underline"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Explore the Opportunity
      </motion.div>
    </motion.div>
  )
}

export default Card5
