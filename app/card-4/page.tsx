"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Scale, AlertTriangle, Clock, Target, Eye, DollarSign, Filter, Database, Globe } from "lucide-react"

export default function RegulatoryCapture() {
  const [selectedCity, setSelectedCity] = useState("houston")
  const [selectedPersona, setSelectedPersona] = useState("all")
  const [timeHorizon, setTimeHorizon] = useState(2025)
  const [sortBy, setSortBy] = useState("captureRisk")

  const personas = {
    all: { name: "All Buyers", color: "gray", need: "Comprehensive analysis" },
    treasury: { name: "Treasury", color: "blue", need: "Regulatory risk assessment" },
    underwriters: { name: "Underwriters", color: "green", need: "Compliance monitoring" },
    hedgeFunds: { name: "Hedge Funds", color: "purple", need: "Regulatory arbitrage" },
    sovereign: { name: "Sovereign Funds", color: "orange", need: "Long-term stability" },
    esg: { name: "ESG Focus", color: "teal", need: "ESG Risk Assessment" },
    water: { name: "Water Focus", color: "blue", need: "Water Level Analysis" },
    minerals: { name: "Minerals Focus", color: "yellow", need: "Mineral Demand Insights" },
  }

  const cities = {
    houston: {
      name: "Houston, TX",
      population: 2304580,
      captureRisk: 8.7,
      industryInfluence: 94,
      regulatoryDelays: 38,
      complianceGaps: 67,
      investmentFlow: 1240,
      emoji: "🛢️",
      color: "red",
      riskLevel: "Critical",
      opportunity: "High",
      keyThreat: "Energy regulatory capture",
      keyInsight: "Petrochemical industry captures environmental regulators, blocking $1.24B investment oversight",
      conflictAlert:
        "🚨 REGULATORY CAPTURE: Environmental Director Chen resigns after Mayor Turner overrules air quality violations against Shell refinery. Public hearings show 94% industry influence on regulatory decisions.",
      vectorFindings: [
        "Public hearing transcripts show environmental regulators consistently favor petrochemical interests",
        "Regulatory board meeting minutes reveal 38 environmental violations dismissed without explanation",
        "City council voting records show systematic approval of industry-friendly regulatory appointments",
      ],
    },
    jackson: {
      name: "Jackson, MS",
      population: 153701,
      captureRisk: 9.4,
      industryInfluence: 87,
      regulatoryDelays: 52,
      complianceGaps: 89,
      investmentFlow: 125,
      emoji: "⚖️",
      color: "red",
      riskLevel: "Critical",
      opportunity: "Very Low",
      keyThreat: "Utility regulatory capture",
      keyInsight: "Water utility captures city regulators, blocking federal oversight of $125M infrastructure failures",
      conflictAlert:
        "💥 FEDERAL INTERVENTION: EPA Administrator Regan bypasses captured city regulators after water utility blocks federal inspectors. Public Works Commission shows 87% utility influence on regulatory decisions.",
      vectorFindings: [
        "Public Works Commission transcripts show regulators consistently defer to utility recommendations",
        "Regulatory hearing minutes reveal 52 federal compliance orders ignored by captured regulators",
        "City budget documents show utility-funded regulatory positions creating conflict of interest",
      ],
    },
    newOrleans: {
      name: "New Orleans, LA",
      population: 383997,
      captureRisk: 8.9,
      industryInfluence: 91,
      regulatoryDelays: 45,
      complianceGaps: 73,
      investmentFlow: 180,
      emoji: "🎭",
      color: "red",
      riskLevel: "Critical",
      opportunity: "Very Low",
      keyThreat: "Tourism regulatory capture",
      keyInsight: "Tourism industry captures flood regulators, blocking climate compliance for $180M hospitality zone",
      conflictAlert:
        "🌊 CLIMATE DENIAL: Flood Management Director Boudreaux fired after challenging tourism industry flood zone exemptions. Regulatory board shows 91% hospitality influence on climate decisions.",
      vectorFindings: [
        "Flood management board transcripts show regulators grant systematic exemptions to hotel districts",
        "Climate compliance hearings reveal 45 federal flood requirements waived for tourism interests",
        "Zoning board minutes document tourism industry representatives outnumbering public advocates 3:1",
      ],
    },
    miami: {
      name: "Miami, FL",
      population: 467963,
      captureRisk: 8.3,
      industryInfluence: 88,
      regulatoryDelays: 41,
      complianceGaps: 71,
      investmentFlow: 890,
      emoji: "🏖️",
      color: "orange",
      riskLevel: "High",
      opportunity: "Low",
      keyThreat: "Development regulatory capture",
      keyInsight:
        "Real estate industry captures zoning regulators, blocking sea rise compliance for $890M developments",
      conflictAlert:
        "🏗️ ZONING SCANDAL: Planning Director Martinez resigns after developers override sea rise building codes. Zoning board shows 88% real estate influence on coastal development decisions.",
      vectorFindings: [
        "Zoning board transcripts show regulators approve coastal developments despite NOAA warnings",
        "Building permit hearings reveal 41 sea rise compliance requirements waived for luxury projects",
        "Planning commission minutes show developer representatives dominating regulatory discussions",
      ],
    },
    baltimore: {
      name: "Baltimore, MD",
      population: 585708,
      captureRisk: 7.8,
      industryInfluence: 82,
      regulatoryDelays: 34,
      complianceGaps: 64,
      investmentFlow: 420,
      emoji: "🦀",
      color: "orange",
      riskLevel: "High",
      opportunity: "Low",
      keyThreat: "Port regulatory capture",
      keyInsight:
        "Shipping industry captures environmental regulators, blocking water quality oversight for $420M port expansion",
      conflictAlert:
        "⚓ PORT PROTECTION: Environmental Compliance Chief Johnson demoted after challenging shipping industry water discharge permits. Harbor board shows 82% maritime influence on environmental decisions.",
      vectorFindings: [
        "Harbor commission transcripts show regulators approve shipping permits despite EPA violations",
        "Water quality hearings reveal 34 federal discharge standards waived for port operations",
        "Environmental board minutes document shipping representatives controlling regulatory agenda",
      ],
    },
    portland: {
      name: "Portland, OR",
      population: 652503,
      captureRisk: 6.9,
      industryInfluence: 76,
      regulatoryDelays: 28,
      complianceGaps: 58,
      investmentFlow: 340,
      emoji: "🌲",
      color: "yellow",
      riskLevel: "Moderate",
      opportunity: "Moderate",
      keyThreat: "Tech regulatory capture",
      keyInsight: "Tech industry captures housing regulators, blocking affordability compliance for $340M developments",
      conflictAlert:
        "💻 TECH INFLUENCE: Housing Regulatory Director Kim reassigned after tech companies block affordable housing requirements. Planning board shows 76% tech influence on zoning decisions.",
      vectorFindings: [
        "Planning board transcripts show regulators grant tech companies systematic zoning exemptions",
        "Housing compliance hearings reveal 28 affordability requirements waived for tech campuses",
        "Development review minutes show tech industry representatives dominating regulatory processes",
      ],
    },
    tampa: {
      name: "Tampa, FL",
      population: 384959,
      captureRisk: 7.2,
      industryInfluence: 79,
      regulatoryDelays: 31,
      complianceGaps: 61,
      investmentFlow: 680,
      emoji: "⚡",
      color: "orange",
      riskLevel: "High",
      opportunity: "Moderate",
      keyThreat: "Tourism regulatory capture",
      keyInsight:
        "Hospitality industry captures infrastructure regulators, blocking saltwater compliance for $680M hotel zone",
      conflictAlert:
        "🏨 INFRASTRUCTURE BYPASS: Water Infrastructure Chief Lopez fired after hospitality lobby blocks saltwater mitigation requirements. Regulatory commission shows 79% tourism influence on infrastructure decisions.",
      vectorFindings: [
        "Infrastructure commission transcripts show regulators exempt hotel districts from saltwater regulations",
        "Water management hearings reveal 31 federal infrastructure standards waived for tourism projects",
        "Regulatory board minutes document hospitality representatives controlling infrastructure policy",
      ],
    },
    fargo: {
      name: "Fargo, ND",
      population: 125990,
      captureRisk: 6.1,
      industryInfluence: 71,
      regulatoryDelays: 24,
      complianceGaps: 52,
      investmentFlow: 95,
      emoji: "🌾",
      color: "yellow",
      riskLevel: "Moderate",
      opportunity: "Moderate",
      keyThreat: "Agriculture regulatory capture",
      keyInsight:
        "Farm industry captures water regulators, blocking conservation compliance for $95M agricultural investments",
      conflictAlert:
        "🚜 WATER WARS: Water Conservation Director Anderson removed after agricultural lobby blocks aquifer protection rules. Water board shows 71% farm influence on conservation decisions.",
      vectorFindings: [
        "Water management board transcripts show regulators defer to agricultural water usage requests",
        "Conservation hearings reveal 24 federal aquifer protection standards waived for farming operations",
        "Regulatory commission minutes show farm representatives controlling water allocation decisions",
      ],
    },
    bentonHarbor: {
      name: "Benton Harbor, MI",
      population: 9103,
      captureRisk: 8.5,
      industryInfluence: 85,
      regulatoryDelays: 43,
      complianceGaps: 78,
      investmentFlow: 45,
      emoji: "🏭",
      color: "red",
      riskLevel: "Critical",
      opportunity: "Very Low",
      keyThreat: "Industrial regulatory capture",
      keyInsight:
        "Manufacturing industry captures health regulators, blocking lead compliance for $45M industrial zone",
      conflictAlert:
        "☠️ HEALTH COVER-UP: Public Health Director Washington fired after industrial lobby blocks lead pipe replacement orders. Health board shows 85% manufacturing influence on safety decisions.",
      vectorFindings: [
        "Public health board transcripts show regulators consistently favor industrial health assessments",
        "Safety compliance hearings reveal 43 federal lead standards waived for manufacturing facilities",
        "Environmental board minutes document industrial representatives controlling health policy agenda",
      ],
    },
  }

  const currentCity = cities[selectedCity as keyof typeof cities]
  const currentPersona = personas[selectedPersona as keyof typeof personas] || personas.all

  // Calculate dynamic metrics based on time horizon
  const captureRisk = Math.min(10, currentCity.captureRisk + (timeHorizon - 2025) * 0.12)
  const regulatoryDelays = Math.min(100, currentCity.regulatoryDelays + (timeHorizon - 2025) * 1.8)

  // Sort cities by selected metric
  const sortedCities = Object.entries(cities).sort((a, b) => {
    const [, cityA] = a
    const [, cityB] = b
    switch (sortBy) {
      case "captureRisk":
        return cityB.captureRisk - cityA.captureRisk
      case "industryInfluence":
        return cityB.industryInfluence - cityA.industryInfluence
      case "regulatoryDelays":
        return cityB.regulatoryDelays - cityA.regulatoryDelays
      case "investmentFlow":
        return cityB.investmentFlow - cityA.investmentFlow
      default:
        return cityB.captureRisk - cityA.captureRisk
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
              Regulatory Capture
            </Badge>
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
              Compliance Intelligence
            </Badge>
          </div>
        </div>
      </nav>

      {/* Header with Controls */}
      <section className="bg-gradient-to-r from-purple-600 to-red-600 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Regulatory Capture</h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8">
              Where industry influence meets regulatory reality across 9 critical markets
            </p>

            {/* Interactive Controls */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                <label className="block text-sm text-purple-100 mb-3 font-medium">Time Horizon</label>
                <div className="flex items-center justify-between text-xs text-purple-200 mb-2">
                  <span>2025</span>
                  <span className="font-bold text-white">{timeHorizon}</span>
                  <span>2050</span>
                </div>
                <input
                  type="range"
                  min="2025"
                  max="2050"
                  value={timeHorizon}
                  onChange={(e) => setTimeHorizon(Number.parseInt(e.target.value))}
                  className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                <label className="block text-sm text-purple-100 mb-3 font-medium">Buyer Persona</label>
                <select
                  value={selectedPersona}
                  onChange={(e) => setSelectedPersona(e.target.value)}
                  className="w-full bg-white/30 text-white rounded-lg px-3 py-2 text-sm border border-white/20 focus:border-white/40 focus:outline-none"
                >
                  {Object.entries(personas).map(([key, persona]) => (
                    <option key={key} value={key} className="text-gray-900 bg-white">
                      {persona.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                <label className="block text-sm text-purple-100 mb-3 font-medium">Sort Markets By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-white/30 text-white rounded-lg px-3 py-2 text-sm border border-white/20 focus:border-white/40 focus:outline-none"
                >
                  <option value="captureRisk" className="text-gray-900 bg-white">
                    Capture Risk
                  </option>
                  <option value="industryInfluence" className="text-gray-900 bg-white">
                    Industry Influence
                  </option>
                  <option value="regulatoryDelays" className="text-gray-900 bg-white">
                    Regulatory Delays
                  </option>
                  <option value="investmentFlow" className="text-gray-900 bg-white">
                    Investment Flow
                  </option>
                </select>
              </div>
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                <label className="block text-sm text-purple-100 mb-3 font-medium">Live Updates</label>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-white font-medium">Real-time</span>
                </div>
                <div className="text-xs text-purple-200 mt-1">Last update: 2 min ago</div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 rounded-lg px-4 py-2 backdrop-blur-sm">
                <div className="text-sm text-purple-100">Average Industry Influence</div>
                <div className="text-lg font-bold">82% Control</div>
              </div>
              <div className="bg-white/20 rounded-lg px-4 py-2 backdrop-blur-sm">
                <div className="text-sm text-purple-100">Investment at Risk</div>
                <div className="text-lg font-bold">$4.0B+ Flow</div>
              </div>
              <div className="bg-white/20 rounded-lg px-4 py-2 backdrop-blur-sm">
                <div className="text-sm text-purple-100">Regulatory Failures</div>
                <div className="text-lg font-bold">336 Violations</div>
              </div>
              <div className="bg-white/20 rounded-lg px-4 py-2 backdrop-blur-sm">
                <div className="text-sm text-purple-100">Buyer Focus</div>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Regulatory Intelligence Grid</h2>
            <p className="text-gray-600">
              Click any market to dive deep. Sorted by {sortBy.replace(/([A-Z])/g, " $1").toLowerCase()}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {sortedCities.map(([key, city]) => (
              <motion.button
                key={key}
                onClick={() => setSelectedCity(key)}
                className={`text-left p-6 rounded-xl border-2 transition-all duration-300 transform ${
                  selectedCity === key
                    ? `border-${city.color}-500 bg-${city.color}-50 shadow-xl scale-105 ring-4 ring-${city.color}-200`
                    : "border-gray-200 hover:border-gray-300 bg-white hover:shadow-lg hover:scale-102"
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

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-xs text-gray-500">Capture Risk</div>
                    <div className={`text-xl font-bold text-${city.color}-600`}>{city.captureRisk}/10</div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-xs text-gray-500">Industry Influence</div>
                    <div className="text-xl font-bold text-gray-900">{city.industryInfluence}%</div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-xs text-gray-500">Investment</div>
                    <div className="text-lg font-bold text-green-600">${city.investmentFlow}M</div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-xs text-gray-500">Compliance Gaps</div>
                    <div className="text-lg font-bold text-red-600">{city.complianceGaps}%</div>
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
                    <div className="text-xs font-bold text-red-800 mb-1">🚨 LIVE REGULATORY CONFLICT</div>
                    <div className="text-xs text-red-700 line-clamp-2">{city.conflictAlert}</div>
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
                    <p className="text-gray-600">Regulatory Capture Analysis</p>
                  </div>
                </div>
                <div className={`px-4 py-2 rounded-lg bg-${currentCity.color}-100`}>
                  <div className="text-sm text-gray-600">Risk Level</div>
                  <div className={`text-lg font-bold text-${currentCity.color}-800`}>{currentCity.riskLevel}</div>
                </div>
              </div>

              {/* Live Regulatory Conflict Alert */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-6 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  <h4 className="font-bold text-red-900">LIVE REGULATORY CONFLICT</h4>
                </div>
                <p className="text-red-800 text-sm leading-relaxed">{currentCity.conflictAlert}</p>
              </div>

              {/* Data Disarray Component */}
              <div className="mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-purple-100 to-indigo-50 rounded-xl p-6 shadow-lg border border-indigo-200 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-indigo-500 rounded-lg">
                        <Database className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Data Disarray Dashboard</h3>
                    </div>
                    <Badge className="bg-indigo-100 text-indigo-800 border-indigo-300">Live Data</Badge>
                  </div>

                  <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                    Navigate the complexity: $6T QOZ value unlocks with OBBBA & IIJA funding. Track real-time ESG
                    compliance, water levels, and mineral demand across critical markets.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-medium text-gray-700">Time Horizon</label>
                          <span className="text-sm font-bold text-indigo-600">{timeHorizon}</span>
                        </div>
                        <input
                          type="range"
                          min="2025"
                          max="2035"
                          value={timeHorizon}
                          onChange={(e) => setTimeHorizon(Number.parseInt(e.target.value))}
                          className="w-full h-3 bg-indigo-200 rounded-lg appearance-none cursor-pointer slider"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Focus Metric</label>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { key: "esg", label: "ESG Risk", color: "bg-green-500" },
                            { key: "water", label: "Water Level", color: "bg-blue-500" },
                            { key: "minerals", label: "Mineral Demand", color: "bg-yellow-500" },
                          ].map((metric) => (
                            <button
                              key={metric.key}
                              onClick={() => setSelectedPersona(metric.key)}
                              className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                                selectedPersona === metric.key
                                  ? `${metric.color} text-white shadow-md transform scale-105`
                                  : "bg-white border border-gray-300 text-gray-600 hover:border-gray-400 hover:shadow-sm"
                              }`}
                            >
                              {metric.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="relative bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between items-end h-32">
                        {["Portland", "Miami", "Tampa", "Jackson", "Houston"].map((city, index) => (
                          <div key={city} className="flex flex-col items-center group cursor-pointer">
                            <motion.div
                              className="bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-sm hover:from-indigo-700 hover:to-indigo-500 transition-colors duration-200"
                              style={{
                                height: `${Math.random() * 60 + 20}px`,
                                width: "16px",
                              }}
                              whileHover={{ scale: 1.1 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            />
                            <span className="text-xs mt-2 text-gray-600 group-hover:text-gray-900 transition-colors duration-200 transform -rotate-45 origin-left">
                              {city}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="absolute top-2 right-2 flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        >
                          <Globe className="w-5 h-5 text-indigo-500" />
                        </motion.div>
                        <span className="text-xs text-gray-500 font-medium">Live Sync</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200">
                      $6T QOZ Opportunity
                    </Badge>
                    <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200">
                      OBBBA Impact
                    </Badge>
                    <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200">
                      ESG Mandates
                    </Badge>
                    <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200">
                      LCOE Analysis
                    </Badge>
                  </div>

                  <motion.button
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Eye className="w-5 h-5" />
                    Decode the Data Maze
                  </motion.button>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Metrics */}
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <Scale className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-purple-600">{currentCity.captureRisk}/10</div>
                      <div className="text-sm text-gray-600">Capture Risk</div>
                    </div>
                    <div className="text-center p-4 bg-red-50 rounded-lg">
                      <AlertTriangle className="w-6 h-6 text-red-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-red-600">{currentCity.industryInfluence}%</div>
                      <div className="text-sm text-gray-600">Industry Influence</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <Clock className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-orange-600">{currentCity.regulatoryDelays}</div>
                      <div className="text-sm text-gray-600">Regulatory Delays</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <DollarSign className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-green-600">${currentCity.investmentFlow}M</div>
                      <div className="text-sm text-gray-600">Investment Flow</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Regulatory Intelligence</h4>
                    <p className="text-gray-700 mb-4">{currentCity.keyInsight}</p>
                    <div className={`bg-${currentCity.color}-50 rounded-lg p-4 border border-${currentCity.color}-200`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Scale className={`w-5 h-5 text-${currentCity.color}-600`} />
                        <h5 className={`font-semibold text-${currentCity.color}-900`}>Compliance Gap Score</h5>
                      </div>
                      <div className={`text-3xl font-bold text-${currentCity.color}-600`}>
                        {currentCity.complianceGaps}%
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vector Search Findings */}
                <div>
                  <div className="bg-purple-50 rounded-lg p-6 h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <Eye className="w-5 h-5 text-purple-600" />
                      <h4 className="font-bold text-gray-900">Regulatory Intelligence</h4>
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
                          <div className="mb-2">
                            <div>
                              <div className="text-sm font-bold text-blue-900">⚡ Regulatory Capture Analysis</div>
                              <div className="text-xs text-blue-700">
                                Public transcripts + hearing minutes + voting records
                              </div>
                            </div>
                          </div>
                          <div className="text-xs text-blue-600 font-medium">
                            🎯 How industry influence drives regulatory decisions
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-3 rounded-lg border-l-4 border-purple-500">
                          <div className="mb-2">
                            <div>
                              <div className="text-sm font-bold text-purple-900">🚨 Live Compliance Intelligence</div>
                            </div>
                            <div className="text-xs text-purple-700">
                              Real-time alerts + regulatory changes + compliance gaps
                            </div>
                          </div>
                          <div className="text-xs text-purple-600 font-medium">
                            ⚡ Know which regulations will be enforced before violations occur
                          </div>
                        </div>
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
                <h3 className="text-xl font-bold text-gray-900">Regulatory Capture Matrix</h3>
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
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Population</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Capture Risk</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Industry Influence</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Investment</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Compliance Gaps</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Key Threat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedCities.map(([key, city]) => (
                      <tr
                        key={key}
                        className={`border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-all duration-200 hover:shadow-sm ${
                          selectedCity === key ? `bg-${city.color}-50 border-l-4 border-l-${city.color}-500` : ""
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
                        <td className="text-center py-3 px-4 text-gray-600 text-sm">
                          {city.population.toLocaleString()}
                        </td>
                        <td className="text-center py-3 px-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium bg-${city.color}-100 text-${city.color}-800`}
                          >
                            {city.captureRisk}/10
                          </span>
                        </td>
                        <td className="text-center py-3 px-4 font-semibold text-red-600">{city.industryInfluence}%</td>
                        <td className="text-center py-3 px-4 font-semibold text-green-600">${city.investmentFlow}M</td>
                        <td className="text-center py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800`}>
                            {city.complianceGaps}%
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
            <Target className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">We're calling this out.</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Industry capture of regulators is creating compliance gaps that threaten $4B+ in investments. Houston's
              petrochemical industry controls 94% of environmental decisions. Jackson's utilities block federal
              oversight. {currentPersona.name} need intelligence that connects regulatory capture with investment
              reality.
            </p>

            <div className="bg-gradient-to-r from-purple-900/50 to-red-900/50 rounded-3xl p-8 backdrop-blur-sm border border-purple-500/30">
              <h3 className="text-2xl font-bold mb-4">That's why we built CivilSignals.</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                We listen to regulatory hearings across all 9 markets. Public commission meetings. Compliance reviews.
                The places where industry influence meets regulatory reality, buried in transcripts that reveal true
                capture patterns.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
                <Eye className="w-5 h-5 mr-2" />
                Request {currentPersona.name} Regulatory Brief
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
