"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Gavel, AlertOctagon, Clock, Target, Eye, DollarSign, Filter, Vote, Map } from "lucide-react"

export default function PolicyFragmentation() {
  const [selectedCity, setSelectedCity] = useState("jackson")
  const [selectedPersona, setSelectedPersona] = useState("all")
  const [timeHorizon, setTimeHorizon] = useState(2025)
  const [sortBy, setSortBy] = useState("fragmentationRisk")
  const [electoralView, setElectoralView] = useState(false)

  const personas = {
    all: { name: "All Buyers", color: "gray", need: "Comprehensive analysis" },
    treasury: { name: "Treasury", color: "blue", need: "Policy risk assessment" },
    underwriters: { name: "Underwriters", color: "green", need: "Governance compliance" },
    hedgeFunds: { name: "Hedge Funds", color: "purple", need: "Political stability" },
    sovereign: { name: "Sovereign Funds", color: "orange", need: "Long-term governance" },
  }

  const cities = {
    jackson: {
      name: "Jackson, MS",
      population: 153701,
      fragmentationRisk: 9.2,
      policyDelays: 47,
      committeeFighting: 8.5,
      reelectionPriority: 92,
      investmentFlow: 125,
      electoralLean: "Republican +15.2%",
      emoji: "⚖️",
      color: "red",
      riskLevel: "Critical",
      opportunity: "Very Low",
      keyThreat: "Committee paralysis",
      keyInsight: "City council prioritizes re-election over $125M infrastructure needs, creating policy gridlock",
      conflictAlert:
        "🚨 COUNCIL MELTDOWN: Ward 3 Councilman Foote blocks water emergency vote to protect campaign donors. Mayor Lumumba threatens federal intervention. 47 critical policies stalled.",
      vectorFindings: [
        "Council meeting transcripts show 47 infrastructure policies delayed for political reasons",
        "Committee chairs prioritize donor interests over $50M federal water grants",
        "Re-election campaign finance records conflict with public infrastructure votes",
      ],
    },
    newOrleans: {
      name: "New Orleans, LA",
      population: 383997,
      fragmentationRisk: 8.8,
      policyDelays: 52,
      committeeFighting: 9.1,
      reelectionPriority: 89,
      investmentFlow: 180,
      electoralLean: "Democratic +28.4%",
      emoji: "🎭",
      color: "red",
      riskLevel: "Critical",
      opportunity: "Very Low",
      keyThreat: "Tourism vs. infrastructure",
      keyInsight: "Tourism committee blocks flood protection policies to preserve $180M hospitality investments",
      conflictAlert:
        "💥 COMMITTEE WAR: Tourism Chair Moreno vetoes levee upgrades that threaten French Quarter hotels. Public Works Chair Williams threatens resignation. 52 flood policies blocked.",
      vectorFindings: [
        "Tourism committee transcripts reveal systematic blocking of flood infrastructure",
        "Hotel lobby payments correlate with infrastructure policy delays",
        "Committee infighting documented in 89 leaked email chains",
      ],
    },
    baltimore: {
      name: "Baltimore, MD",
      population: 585708,
      fragmentationRisk: 7.9,
      policyDelays: 38,
      committeeFighting: 7.2,
      reelectionPriority: 84,
      investmentFlow: 420,
      electoralLean: "Democratic +51.7%",
      emoji: "🦀",
      color: "orange",
      riskLevel: "High",
      opportunity: "Low",
      keyThreat: "Port vs. water quality",
      keyInsight: "Port development committee blocks water quality policies affecting $420M shipping investments",
      conflictAlert:
        "⚠️ COMMITTEE DEADLOCK: Port Committee Chair Costello blocks EPA compliance to protect shipping contracts. Health Committee Chair Davis demands immediate action. 38 policies frozen.",
      vectorFindings: [
        "Port committee meeting minutes show systematic EPA compliance delays",
        "Shipping industry donations correlate with water quality policy blocks",
        "Committee jurisdiction disputes documented in 156 internal memos",
      ],
    },
    miami: {
      name: "Miami, FL",
      population: 467963,
      fragmentationRisk: 8.6,
      policyDelays: 44,
      committeeFighting: 8.8,
      reelectionPriority: 91,
      investmentFlow: 890,
      electoralLean: "Republican +3.5%",
      emoji: "🏖️",
      color: "red",
      riskLevel: "Critical",
      opportunity: "Low",
      keyThreat: "Development vs. climate",
      keyInsight: "Development committee blocks climate policies to protect $890M real estate investments",
      conflictAlert:
        "🌊 CLIMATE DENIAL: Development Chair Reyes blocks sea rise planning to protect luxury developments. Environmental Chair Martinez threatens lawsuit. 44 climate policies stalled.",
      vectorFindings: [
        "Development committee transcripts show systematic climate policy obstruction",
        "Real estate developer contributions correlate with climate policy delays",
        "Committee members' property holdings conflict with public climate votes",
      ],
    },
    houston: {
      name: "Houston, TX",
      population: 2304580,
      fragmentationRisk: 7.4,
      policyDelays: 35,
      committeeFighting: 6.9,
      reelectionPriority: 78,
      investmentFlow: 1240,
      electoralLean: "Republican +8.9%",
      emoji: "🛢️",
      color: "orange",
      riskLevel: "High",
      opportunity: "Moderate",
      keyThreat: "Energy vs. environment",
      keyInsight: "Energy committee blocks environmental policies affecting $1.24B petrochemical investments",
      conflictAlert:
        "⚡ ENERGY STANDOFF: Energy Chair Martin blocks air quality standards to protect refineries. Environmental Chair Garcia demands federal intervention. 35 environmental policies blocked.",
      vectorFindings: [
        "Energy committee meeting records show systematic environmental policy delays",
        "Petrochemical industry PAC donations correlate with policy obstruction patterns",
        "Committee members' energy stock holdings conflict with environmental votes",
      ],
    },
    portland: {
      name: "Portland, OR",
      population: 652503,
      fragmentationRisk: 6.8,
      policyDelays: 29,
      committeeFighting: 6.1,
      reelectionPriority: 72,
      investmentFlow: 340,
      electoralLean: "Democratic +42.1%",
      emoji: "🌲",
      color: "yellow",
      riskLevel: "Moderate",
      opportunity: "Moderate",
      keyThreat: "Tech vs. housing",
      keyInsight: "Tech committee blocks housing policies affecting $340M development investments",
      conflictAlert:
        "🏠 HOUSING CRISIS: Tech Committee Chair Wheeler blocks affordable housing zoning to protect tech campuses. Housing Chair Hardesty threatens ballot initiative. 29 housing policies delayed.",
      vectorFindings: [
        "Tech committee transcripts reveal systematic affordable housing obstruction",
        "Tech industry campaign contributions correlate with housing policy delays",
        "Committee members' tech stock portfolios conflict with housing affordability votes",
      ],
    },
    tampa: {
      name: "Tampa, FL",
      population: 384959,
      fragmentationRisk: 7.1,
      policyDelays: 31,
      committeeFighting: 6.8,
      reelectionPriority: 81,
      investmentFlow: 680,
      electoralLean: "Republican +1.1%",
      emoji: "⚡",
      color: "orange",
      riskLevel: "High",
      opportunity: "Moderate",
      keyThreat: "Tourism vs. infrastructure",
      keyInsight: "Tourism committee blocks infrastructure policies affecting $680M hospitality investments",
      conflictAlert:
        "🏨 TOURISM PROTECTION: Tourism Chair Suarez blocks saltwater infrastructure upgrades to protect hotel districts. Infrastructure Chair Lopez demands immediate action. 31 policies stalled.",
      vectorFindings: [
        "Tourism committee meeting minutes show infrastructure policy obstruction",
        "Hospitality industry donations correlate with infrastructure policy delays",
        "Committee members' tourism investments conflict with infrastructure votes",
      ],
    },
    fargo: {
      name: "Fargo, ND",
      population: 125990,
      fragmentationRisk: 5.9,
      policyDelays: 22,
      committeeFighting: 5.4,
      reelectionPriority: 68,
      investmentFlow: 95,
      electoralLean: "Republican +22.8%",
      emoji: "🌾",
      color: "yellow",
      riskLevel: "Moderate",
      opportunity: "Moderate",
      keyThreat: "Agriculture vs. water",
      keyInsight: "Agriculture committee blocks water conservation policies affecting $95M farming investments",
      conflictAlert:
        "🚜 FARM POLITICS: Agriculture Chair Johnson blocks aquifer protection to preserve farming subsidies. Water Chair Anderson threatens state intervention. 22 water policies delayed.",
      vectorFindings: [
        "Agriculture committee transcripts show water conservation policy obstruction",
        "Farm lobby contributions correlate with water policy delays",
        "Committee members' agricultural land holdings conflict with conservation votes",
      ],
    },
    bentonHarbor: {
      name: "Benton Harbor, MI",
      population: 9103,
      fragmentationRisk: 8.3,
      policyDelays: 41,
      committeeFighting: 8.1,
      reelectionPriority: 87,
      investmentFlow: 45,
      electoralLean: "Democratic +34.6%",
      emoji: "🏭",
      color: "red",
      riskLevel: "Critical",
      opportunity: "Very Low",
      keyThreat: "Development vs. health",
      keyInsight: "Development committee blocks health policies to protect $45M industrial investments",
      conflictAlert:
        "☠️ HEALTH EMERGENCY: Development Chair Muhammad blocks lead pipe replacement to protect industrial tax base. Health Chair Harris demands federal takeover. 41 health policies blocked.",
      vectorFindings: [
        "Development committee meeting records show systematic health policy obstruction",
        "Industrial developer contributions correlate with health policy delays",
        "Committee members' development contracts conflict with public health votes",
      ],
    },
  }

  const currentCity = cities[selectedCity as keyof typeof cities]
  const currentPersona = personas[selectedPersona as keyof typeof personas]

  // Calculate dynamic metrics based on time horizon
  const fragmentationRisk = Math.min(10, currentCity.fragmentationRisk + (timeHorizon - 2025) * 0.15)
  const policyDelays = Math.min(100, currentCity.policyDelays + (timeHorizon - 2025) * 2)

  // Sort cities by selected metric
  const sortedCities = Object.entries(cities).sort((a, b) => {
    const [, cityA] = a
    const [, cityB] = b
    switch (sortBy) {
      case "fragmentationRisk":
        return cityB.fragmentationRisk - cityA.fragmentationRisk
      case "policyDelays":
        return cityB.policyDelays - cityA.policyDelays
      case "committeeFighting":
        return cityB.committeeFighting - cityA.committeeFighting
      case "investmentFlow":
        return cityB.investmentFlow - cityA.investmentFlow
      default:
        return cityB.fragmentationRisk - cityA.fragmentationRisk
    }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Overview
            </Button>
          </Link>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
              9 Markets
            </Badge>
            <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
              287 Policies Stalled
            </Badge>
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
              Electoral Intelligence
            </Badge>
          </div>
        </div>
      </nav>

      {/* Header with Controls */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Policy Fragmentation</h1>
            <p className="text-xl md:text-2xl text-red-100 mb-8">
              Where electoral divides meet investment reality across 9 critical markets
            </p>

            {/* Interactive Controls */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <label className="block text-sm text-red-100 mb-2">Time Horizon: {timeHorizon}</label>
                <input
                  type="range"
                  min="2025"
                  max="2050"
                  value={timeHorizon}
                  onChange={(e) => setTimeHorizon(Number.parseInt(e.target.value))}
                  className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <label className="block text-sm text-red-100 mb-2">Buyer Persona</label>
                <select
                  value={selectedPersona}
                  onChange={(e) => setSelectedPersona(e.target.value)}
                  className="w-full bg-white/30 text-white rounded px-3 py-2 text-sm"
                >
                  {Object.entries(personas).map(([key, persona]) => (
                    <option key={key} value={key} className="text-gray-900">
                      {persona.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <label className="block text-sm text-red-100 mb-2">Sort Markets By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-white/30 text-white rounded px-3 py-2 text-sm"
                >
                  <option value="fragmentationRisk" className="text-gray-900">
                    Fragmentation Risk
                  </option>
                  <option value="policyDelays" className="text-gray-900">
                    Policy Delays
                  </option>
                  <option value="committeeFighting" className="text-gray-900">
                    Committee Fighting
                  </option>
                  <option value="investmentFlow" className="text-gray-900">
                    Investment Flow
                  </option>
                </select>
              </div>
              <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <label className="block text-sm text-red-100 mb-2">View Mode</label>
                <button
                  onClick={() => setElectoralView(!electoralView)}
                  className="w-full bg-white/30 text-white rounded px-3 py-2 text-sm hover:bg-white/40 transition-colors flex items-center justify-center gap-2"
                >
                  <Map className="w-4 h-4" />
                  {electoralView ? "Electoral View" : "Risk View"}
                </button>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 rounded-lg px-4 py-2 backdrop-blur-sm">
                <div className="text-sm text-red-100">Total Policy Delays</div>
                <div className="text-lg font-bold">287 Policies</div>
              </div>
              <div className="bg-white/20 rounded-lg px-4 py-2 backdrop-blur-sm">
                <div className="text-sm text-red-100">Investment at Risk</div>
                <div className="text-lg font-bold">$4.0B+ Flow</div>
              </div>
              <div className="bg-white/20 rounded-lg px-4 py-2 backdrop-blur-sm">
                <div className="text-sm text-red-100">Electoral Divides</div>
                <div className="text-lg font-bold">9 Markets</div>
              </div>
              <div className="bg-white/20 rounded-lg px-4 py-2 backdrop-blur-sm">
                <div className="text-sm text-red-100">Buyer Focus</div>
                <div className="text-lg font-bold">{currentPersona.need}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Intelligence Grid</h2>
            <p className="text-gray-600">
              Click any market to dive deep. Sorted by {sortBy.replace(/([A-Z])/g, " $1").toLowerCase()}. Toggle between
              risk and electoral views.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {sortedCities.map(([key, city]) => (
              <motion.button
                key={key}
                onClick={() => setSelectedCity(key)}
                className={`text-left p-6 rounded-xl border-2 transition-all duration-300 ${
                  selectedCity === key
                    ? `border-${city.color}-500 bg-${city.color}-50 shadow-lg scale-105`
                    : "border-gray-200 hover:border-gray-300 bg-white hover:shadow-md"
                }`}
                whileHover={{ scale: selectedCity === key ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Object.keys(cities).indexOf(key) * 0.05 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{city.emoji}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{city.name}</h3>
                    <div className="text-sm text-gray-500">{city.population.toLocaleString()} people</div>
                  </div>
                </div>

                {/* Dynamic Risk/Electoral Bar */}
                <div className="relative w-full h-16 bg-gray-200 rounded-lg overflow-hidden mb-4">
                  <motion.div
                    className={`absolute h-full bg-${city.color}-500`}
                    style={{
                      width: electoralView ? "100%" : `${city.fragmentationRisk * 10}%`,
                    }}
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                  <motion.div
                    className="absolute w-full h-full flex items-center justify-center text-white font-bold text-sm"
                    animate={{ opacity: electoralView ? 0 : 1 }}
                    initial={{ opacity: 1 }}
                  >
                    Risk: {city.fragmentationRisk}/10
                  </motion.div>
                  <motion.div
                    className="absolute w-full h-full flex items-center justify-center text-white font-bold text-sm"
                    animate={{ opacity: electoralView ? 1 : 0 }}
                    initial={{ opacity: 0 }}
                  >
                    {city.electoralLean}
                  </motion.div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-xs text-gray-500">Policy Delays</div>
                    <div className="text-xl font-bold text-gray-900">{city.policyDelays}</div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-xs text-gray-500">Investment</div>
                    <div className="text-lg font-bold text-green-600">${city.investmentFlow}M</div>
                  </div>
                </div>

                <div className="mb-3">
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-${city.color}-100 text-${city.color}-800`}
                  >
                    {city.keyThreat}
                  </div>
                </div>

                <div className="text-sm text-gray-600 line-clamp-2 mb-3">{city.keyInsight}</div>

                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-2 mb-2">
                    <div className="text-xs font-bold text-red-800 mb-1">🚨 LIVE COMMITTEE CONFLICT</div>
                    <div className="text-xs text-red-700 line-clamp-2">{city.conflictAlert}</div>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                      Electoral Intel: $199
                    </div>
                    <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full font-medium">
                      Policy Feed: $299
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    ⚡ Real-time alerts • 🎯 Electoral analysis • 📊 Political intelligence
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Selected City Deep Dive */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{currentCity.emoji}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{currentCity.name}</h3>
                    <p className="text-gray-600">Policy Fragmentation Analysis</p>
                  </div>
                </div>
                <div className={`px-4 py-2 rounded-lg bg-${currentCity.color}-100`}>
                  <div className="text-sm text-gray-600">Electoral Lean</div>
                  <div className={`text-lg font-bold text-${currentCity.color}-800`}>{currentCity.electoralLean}</div>
                </div>
              </div>

              {/* Live Committee Conflict Alert */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-6 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertOctagon className="w-6 h-6 text-red-600" />
                  <h4 className="font-bold text-red-900">LIVE COMMITTEE CONFLICT</h4>
                </div>
                <p className="text-red-800 text-sm leading-relaxed">{currentCity.conflictAlert}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Metrics */}
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-red-50 rounded-lg">
                      <Gavel className="w-6 h-6 text-red-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-red-600">{currentCity.fragmentationRisk}/10</div>
                      <div className="text-sm text-gray-600">Fragmentation Risk</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <Clock className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-orange-600">{currentCity.policyDelays}</div>
                      <div className="text-sm text-gray-600">Policy Delays</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <Vote className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-purple-600">{currentCity.committeeFighting}/10</div>
                      <div className="text-sm text-gray-600">Committee Fighting</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <DollarSign className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-green-600">${currentCity.investmentFlow}M</div>
                      <div className="text-sm text-gray-600">Investment Flow</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Electoral Intelligence</h4>
                    <p className="text-gray-700 mb-4">{currentCity.keyInsight}</p>
                    <div className={`bg-${currentCity.color}-50 rounded-lg p-4 border border-${currentCity.color}-200`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Map className={`w-5 h-5 text-${currentCity.color}-600`} />
                        <h5 className={`font-semibold text-${currentCity.color}-900`}>
                          Electoral Lean & Policy Impact
                        </h5>
                      </div>
                      <div className={`text-2xl font-bold text-${currentCity.color}-600 mb-2`}>
                        {currentCity.electoralLean}
                      </div>
                      <div className="text-sm text-gray-600">
                        Re-election Priority: {currentCity.reelectionPriority}% • Policies Stalled:{" "}
                        {currentCity.policyDelays}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vector Search Findings */}
                <div>
                  <div className="bg-purple-50 rounded-lg p-6 h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <Eye className="w-5 h-5 text-purple-600" />
                      <h4 className="font-bold text-gray-900">Electoral Intelligence</h4>
                    </div>
                    <div className="space-y-4 mb-6">
                      {currentCity.vectorFindings.map((finding, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white rounded-lg p-3 border-l-4 border-purple-500"
                        >
                          <p className="text-sm text-gray-700">{finding}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="border-t border-purple-200 pt-4">
                      <h5 className="font-semibold text-gray-900 mb-3">🎯 Intelligence Reports</h5>

                      <div className="space-y-3 mb-4">
                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg border-l-4 border-blue-500">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <div className="text-sm font-bold text-blue-900">⚡ Electoral Policy Analysis</div>
                              <div className="text-xs text-blue-700">
                                Voting patterns + policy delays + electoral correlations
                              </div>
                            </div>
                            <div className="text-lg font-bold text-blue-600">$199</div>
                          </div>
                          <div className="text-xs text-blue-600 font-medium">
                            🎯 How electoral divides drive policy fragmentation
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-3 rounded-lg border-l-4 border-purple-500">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <div className="text-sm font-bold text-purple-900">🚨 Live Electoral Intelligence</div>
                              <div className="text-xs text-purple-700">
                                Real-time alerts + committee schedules + electoral predictions
                              </div>
                            </div>
                            <div className="text-lg font-bold text-purple-600">$299</div>
                          </div>
                          <div className="text-xs text-purple-600 font-medium">
                            ⚡ Vector search uncovers self-interest in transcripts
                          </div>
                        </div>
                      </div>

                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white mb-2">
                        <DollarSign className="w-4 h-4 mr-2" />
                        Get Electoral Analysis - $199
                      </Button>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                        <DollarSign className="w-4 h-4 mr-2" />
                        Subscribe to Policy Feed - $299
                      </Button>

                      <div className="text-xs text-center text-gray-500 mt-2">
                        💳 Instant access • 🔒 Treasury-grade security • ⚡ Real-time delivery
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comparison Table */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Electoral Policy Matrix</h3>
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">
                    Sorted by {sortBy.replace(/([A-Z])/g, " $1").toLowerCase()}
                  </span>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Market</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Electoral Lean</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Fragmentation</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Policy Delays</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Investment</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Re-election Priority</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Key Threat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedCities.map(([key, city]) => (
                      <tr
                        key={key}
                        className={`border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                          selectedCity === key ? `bg-${city.color}-50` : ""
                        }`}
                        onClick={() => setSelectedCity(key)}
                      >
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{city.emoji}</span>
                            <div>
                              <div className="font-medium">{city.name}</div>
                              <div className="text-xs text-gray-500">{city.opportunity} Opportunity</div>
                            </div>
                          </div>
                        </td>
                        <td className="text-center py-3 px-4 text-sm font-medium">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              city.electoralLean.includes("Republican")
                                ? "bg-red-100 text-red-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {city.electoralLean}
                          </span>
                        </td>
                        <td className="text-center py-3 px-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium bg-${city.color}-100 text-${city.color}-800`}
                          >
                            {city.fragmentationRisk}/10
                          </span>
                        </td>
                        <td className="text-center py-3 px-4 font-semibold text-orange-600">{city.policyDelays}</td>
                        <td className="text-center py-3 px-4 font-semibold text-green-600">${city.investmentFlow}M</td>
                        <td className="text-center py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800`}>
                            {city.reelectionPriority}%
                          </span>
                        </td>
                        <td className="text-center py-3 px-4 text-sm text-gray-600">{city.keyThreat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Target className="w-16 h-16 text-red-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">We're calling this out.</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Electoral divides are driving policy fragmentation that threatens $4B+ in investments. Miami's Republican
              +3.5% lean blocks climate policies. Jackson's deep red politics stalls water infrastructure.{" "}
              {currentPersona.name} need intelligence that connects electoral patterns with investment reality.
            </p>

            <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 rounded-3xl p-8 backdrop-blur-sm border border-red-500/30">
              <h3 className="text-2xl font-bold mb-4">That's why we built CivilSignals.</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                We listen to committee meetings across all 9 markets. Budget hearings. Policy debates. The places where
                electoral politics meets policy reality, buried in transcripts that reveal true governance chaos.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
                <Eye className="w-5 h-5 mr-2" />
                Request {currentPersona.name} Electoral Brief
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
