"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Eye, Target, TrendingUp, AlertTriangle, DollarSign, Heart, ArrowRight } from "lucide-react"

export default function InfrastructureInertia() {
  const [currentScene, setCurrentScene] = useState(0)
  const [selectedCity, setSelectedCity] = useState("jackson")
  const [dataReveal, setDataReveal] = useState(0)
  const [userHasInteracted, setUserHasInteracted] = useState(false)

  const scenes = [
    {
      title: "THE PROMISE",
      subtitle: "What investors hear",
      duration: 6000,
      emotion: "hope",
      color: "from-emerald-400 to-blue-500",
    },
    {
      title: "THE REALITY",
      subtitle: "What the data shows",
      duration: 8000,
      emotion: "shock",
      color: "from-red-500 to-orange-500",
    },
    {
      title: "THE DISCONNECT",
      subtitle: "The hidden risk",
      duration: 7000,
      emotion: "concern",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const cities = {
    jackson: {
      name: "Jackson, MS",
      population: 153701,
      pipeBreaks: 7300,
      repairCost: 50,
      floodRisk: 15,
      agingPop: 18,
      medianIncome: 40000,
      waterIssue: "Catastrophic pipe failures",
      humanStory: "153,701 people wake up every day not knowing if their water will work",
      investmentPromise:
        "Strategic location for logistics and manufacturing. Tax incentives up to 15%. Growing tech sector with 40% lower operating costs than Atlanta.",
      investmentReality:
        "7,300 pipe breaks in 2023. Water system under federal emergency order. $50M infrastructure deficit threatens any major development.",
      investmentDisconnect:
        "Economic development brochures promise 'world-class infrastructure' while city council transcripts reveal emergency water restrictions and mandatory boil notices for new developments.",
      color: "red",
      gradient: "from-red-500 to-red-700",
      riskScore: 8.7,
      emoji: "🚨",
    },
    fresno: {
      name: "Fresno, CA",
      population: 542107,
      pipeBreaks: 2100,
      repairCost: 100,
      floodRisk: 10,
      agingPop: 14,
      medianIncome: 55000,
      waterIssue: "Severe aquifer depletion",
      humanStory: "Half a million people watching their water table drop 2 feet every year",
      investmentPromise:
        "Central Valley's economic engine. Prime agricultural tech hub. 50% lower real estate costs than Bay Area with direct highway access to major ports.",
      investmentReality:
        "Aquifer dropping 2 feet annually. $100M water infrastructure overhaul required. New developments face 18-month water connection delays.",
      investmentDisconnect:
        "Investment presentations show unlimited growth potential while environmental impact reports mandate 40% water usage reduction for all new commercial projects.",
      color: "orange",
      gradient: "from-orange-500 to-orange-700",
      riskScore: 7.2,
      emoji: "🌵",
    },
    buffalo: {
      name: "Buffalo, NY",
      population: 278349,
      pipeBreaks: 1800,
      repairCost: 75,
      floodRisk: 12,
      agingPop: 16,
      medianIncome: 45000,
      waterIssue: "Great Lakes overflow risk",
      humanStory: "A rust belt city where 'hundred-year floods' now happen every 3 years",
      investmentPromise:
        "Waterfront renaissance opportunity. Tech hub transformation with 60% lower costs than NYC. Direct access to Canadian markets and Great Lakes shipping.",
      investmentReality:
        "Flood zones expanding 15% annually. $75M seawall repairs needed. Climate change creating 'hundred-year floods' every 3-5 years.",
      investmentDisconnect:
        "Logistics expansion plans promote 24/7 operations while FAA no-fly zones over flood areas restrict cargo operations during storm seasons.",
      color: "blue",
      gradient: "from-blue-500 to-blue-700",
      riskScore: 6.8,
      emoji: "❄️",
    },
  }

  const currentCity = cities[selectedCity as keyof typeof cities]
  const currentSceneData = scenes[currentScene]

  const nextScene = () => {
    if (currentScene < scenes.length - 1) {
      setCurrentScene(currentScene + 1)
      setUserHasInteracted(true)
    }
  }

  const prevScene = () => {
    if (currentScene > 0) {
      setCurrentScene(currentScene - 1)
      setUserHasInteracted(true)
    }
  }

  const goToScene = (index: number) => {
    setCurrentScene(index)
    setUserHasInteracted(true)
  }

  // Data reveal animation for reality scene
  useEffect(() => {
    if (currentScene === 1) {
      setDataReveal(0)
      const revealInterval = setInterval(() => {
        setDataReveal((prev) => {
          if (prev >= 3) {
            clearInterval(revealInterval)
            return prev
          }
          return prev + 1
        })
      }, 1800)
      return () => clearInterval(revealInterval)
    }
  }, [currentScene])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation with better affordances */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-4 md:p-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Button
              variant="ghost"
              className="text-white hover:text-gray-300 hover:bg-white/10 text-sm md:text-base transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Overview
            </Button>
          </Link>

          {/* Story Progress Indicator */}
          {userHasInteracted && (
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400 hidden md:block">{currentSceneData.title}</span>
              <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${0}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Story Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6">
        <AnimatePresence mode="wait">
          {currentScene === 0 && (
            <motion.div
              key="promise"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-center max-w-6xl mx-auto"
            >
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
                className="mb-4"
              >
                <div className="text-6xl mb-4">{currentCity.emoji}</div>
                <div
                  className={`text-4xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r ${currentSceneData.color} bg-clip-text text-transparent mb-6 md:mb-8`}
                >
                  THE PROMISE
                </div>
              </motion.div>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="text-lg md:text-2xl lg:text-3xl text-gray-300 mb-8 md:mb-12"
              >
                What investors hear about {currentCity.name}
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2, duration: 1.5 }}
                className="bg-gradient-to-r from-emerald-900/30 to-blue-900/30 rounded-3xl p-6 md:p-8 backdrop-blur-sm border border-emerald-500/30 mb-8 hover:border-emerald-400/50 transition-all duration-500"
              >
                <div className="flex items-center justify-center gap-3 md:gap-4 mb-6">
                  <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-emerald-400" />
                  <span className="text-xl md:text-2xl font-bold text-emerald-300">Investment Opportunity</span>
                </div>
                <p className="text-base md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  {currentCity.investmentPromise}
                </p>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 3.5, duration: 1.2, type: "spring" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto"
              >
                <motion.div
                  className="text-center p-4 md:p-6 bg-emerald-900/20 rounded-2xl border border-emerald-500/30 hover:bg-emerald-900/30 transition-all duration-300 cursor-default"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-2">15%</div>
                  <div className="text-sm md:text-base text-gray-400">Tax Incentives</div>
                </motion.div>
                <motion.div
                  className="text-center p-4 md:p-6 bg-blue-900/20 rounded-2xl border border-blue-500/30 hover:bg-blue-900/30 transition-all duration-300 cursor-default"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">40%</div>
                  <div className="text-sm md:text-base text-gray-400">Lower Costs</div>
                </motion.div>
                <motion.div
                  className="text-center p-4 md:p-6 bg-purple-900/20 rounded-2xl border border-purple-500/30 hover:bg-purple-900/30 transition-all duration-300 cursor-default"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">Growing</div>
                  <div className="text-sm md:text-base text-gray-400">Tech Sector</div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}

          {currentScene === 1 && (
            <motion.div
              key="reality"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-center max-w-6xl mx-auto"
            >
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.2 }}
                className="mb-4"
              >
                <div className="text-6xl mb-4">💔</div>
                <div
                  className={`text-4xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r ${currentSceneData.color} bg-clip-text text-transparent mb-6 md:mb-8`}
                >
                  THE REALITY
                </div>
              </motion.div>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="text-lg md:text-2xl lg:text-3xl text-gray-300 mb-4"
              >
                What the data shows
              </motion.p>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.8, duration: 1 }}
                className="text-base md:text-lg text-gray-400 mb-8 md:mb-12 italic"
              >
                {currentCity.humanStory}
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto mb-8 md:mb-12">
                <motion.div
                  initial={{ y: 60, opacity: 0, scale: 0.8 }}
                  animate={dataReveal >= 1 ? { y: 0, opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
                  className="text-center p-6 md:p-8 bg-red-900/20 rounded-3xl border border-red-500/30 hover:bg-red-900/30 transition-all duration-500 cursor-default"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <AlertTriangle className="w-8 h-8 md:w-12 md:h-12 text-red-400 mx-auto mb-4" />
                  <motion.div
                    className="text-3xl md:text-5xl font-bold text-red-400 mb-2"
                    initial={{ scale: 0 }}
                    animate={dataReveal >= 1 ? { scale: 1 } : {}}
                    transition={{ delay: 0.3, type: "spring", bounce: 0.6 }}
                  >
                    {currentCity.pipeBreaks.toLocaleString()}
                  </motion.div>
                  <div className="text-sm md:text-base text-gray-400 mb-2">Pipe Breaks</div>
                  <div className="text-xs md:text-sm text-red-300">in 2023 alone</div>
                </motion.div>

                <motion.div
                  initial={{ y: 60, opacity: 0, scale: 0.8 }}
                  animate={dataReveal >= 2 ? { y: 0, opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1.2, type: "spring", bounce: 0.4, delay: 0.2 }}
                  className="text-center p-6 md:p-8 bg-orange-900/20 rounded-3xl border border-orange-500/30 hover:bg-orange-900/30 transition-all duration-500 cursor-default"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <DollarSign className="w-8 h-8 md:w-12 md:h-12 text-orange-400 mx-auto mb-4" />
                  <motion.div
                    className="text-3xl md:text-5xl font-bold text-orange-400 mb-2"
                    initial={{ scale: 0 }}
                    animate={dataReveal >= 2 ? { scale: 1 } : {}}
                    transition={{ delay: 0.3, type: "spring", bounce: 0.6 }}
                  >
                    ${currentCity.repairCost}M
                  </motion.div>
                  <div className="text-sm md:text-base text-gray-400 mb-2">Repair Deficit</div>
                  <div className="text-xs md:text-sm text-orange-300">immediate need</div>
                </motion.div>

                <motion.div
                  initial={{ y: 60, opacity: 0, scale: 0.8 }}
                  animate={dataReveal >= 3 ? { y: 0, opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1.2, type: "spring", bounce: 0.4, delay: 0.4 }}
                  className="text-center p-6 md:p-8 bg-yellow-900/20 rounded-3xl border border-yellow-500/30 hover:bg-yellow-900/30 transition-all duration-500 cursor-default"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <Heart className="w-8 h-8 md:w-12 md:h-12 text-yellow-400 mx-auto mb-4" />
                  <motion.div
                    className="text-3xl md:text-5xl font-bold text-yellow-400 mb-2"
                    initial={{ scale: 0 }}
                    animate={dataReveal >= 3 ? { scale: 1 } : {}}
                    transition={{ delay: 0.3, type: "spring", bounce: 0.6 }}
                  >
                    {currentCity.riskScore}
                  </motion.div>
                  <div className="text-sm md:text-base text-gray-400 mb-2">Risk Score</div>
                  <div className="text-xs md:text-sm text-yellow-300">out of 10</div>
                </motion.div>
              </div>

              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 4, duration: 1.5 }}
                className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-3xl p-6 md:p-8 backdrop-blur-sm border border-red-500/30 hover:border-red-400/50 transition-all duration-500"
              >
                <p className="text-base md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  {currentCity.investmentReality}
                </p>
              </motion.div>
            </motion.div>
          )}

          {currentScene === 2 && (
            <motion.div
              key="disconnect"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-center max-w-6xl mx-auto"
            >
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.2 }}
                className="mb-4"
              >
                <div className="text-6xl mb-4">🔍</div>
                <div
                  className={`text-4xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r ${currentSceneData.color} bg-clip-text text-transparent mb-6 md:mb-8`}
                >
                  THE DISCONNECT
                </div>
              </motion.div>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="text-lg md:text-2xl lg:text-3xl text-gray-300 mb-8 md:mb-12"
              >
                The hidden risk investors never see
              </motion.p>

              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2, duration: 1.5 }}
                className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-3xl p-6 md:p-8 backdrop-blur-sm border border-purple-500/30 mb-8 hover:border-purple-400/50 transition-all duration-500"
              >
                <div className="flex items-center justify-center gap-3 md:gap-4 mb-6">
                  <Eye className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
                  <span className="text-xl md:text-2xl font-bold text-purple-300">Vector Search Reveals</span>
                </div>
                <p className="text-base md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  {currentCity.investmentDisconnect}
                </p>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 3.5, duration: 1.2, type: "spring" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto"
              >
                <motion.div
                  className="p-6 md:p-8 bg-emerald-900/20 rounded-2xl border border-emerald-500/30 hover:bg-emerald-900/30 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <h4 className="text-lg md:text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Investment Brochures Say
                  </h4>
                  <p className="text-sm md:text-base text-gray-300">
                    "World-class infrastructure ready for immediate development"
                  </p>
                </motion.div>
                <motion.div
                  className="p-6 md:p-8 bg-red-900/20 rounded-2xl border border-red-500/30 hover:bg-red-900/30 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <h4 className="text-lg md:text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Council Transcripts Show
                  </h4>
                  <p className="text-sm md:text-base text-gray-300">
                    "Emergency water restrictions for all new commercial projects"
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Elegant Carousel Controls */}
        <div className="absolute bottom-16 md:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6">
          <Button
            onClick={prevScene}
            disabled={currentScene === 0}
            variant="ghost"
            className="text-white hover:bg-white/10 p-3 transition-all duration-300 hover:scale-105 disabled:opacity-30 disabled:hover:scale-100"
            title="Previous scene"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>

          <div className="flex gap-2">
            {scenes.map((_, index) => (
              <button
                key={index}
                onClick={() => goToScene(index)}
                className={`w-12 h-1 rounded-full transition-all duration-500 ${
                  currentScene === index ? "bg-white shadow-lg shadow-white/50" : "bg-white/30 hover:bg-white/60"
                }`}
                title={`Scene ${index + 1}`}
              />
            ))}
          </div>

          <Button
            onClick={nextScene}
            disabled={currentScene === scenes.length - 1}
            variant="ghost"
            className="text-white hover:bg-white/10 p-3 transition-all duration-300 hover:scale-105 disabled:opacity-30 disabled:hover:scale-100"
            title="Next scene"
          >
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Enhanced City Selection */}
      <section className="py-12 md:py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Choose Your City
          </motion.h2>
          <motion.p
            className="text-gray-400 text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Each city tells a different story of infrastructure inertia
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {Object.entries(cities).map(([key, city], index) => (
              <motion.button
                key={key}
                onClick={() => setSelectedCity(key)}
                className={`group text-left p-4 md:p-6 rounded-3xl border-2 transition-all duration-500 ${
                  selectedCity === key
                    ? `border-${city.color}-500 bg-${city.color}-500/10 shadow-lg shadow-${city.color}-500/20`
                    : "border-gray-700 hover:border-gray-600 bg-gray-800/50 hover:bg-gray-800/70"
                }`}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{city.emoji}</div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold group-hover:text-white transition-colors">
                      {city.name}
                    </h3>
                    <div className="text-sm text-gray-400">{city.population.toLocaleString()} people</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-400">Risk Score</div>
                    <div className={`font-semibold text-${city.color}-400`}>{city.riskScore}/10</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Repair Cost</div>
                    <div className="font-semibold">${city.repairCost}M</div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* The Jobs Moment - Enhanced */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="mb-8 md:mb-12">
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", bounce: 0.6 }}>
                <Target className="w-12 h-12 md:w-16 md:h-16 text-blue-400 mx-auto mb-6" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8">We're calling this out.</h2>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 md:mb-8">
                Cities are selling investors on growth opportunities while their infrastructure is literally collapsing.
                It's like selling stock in a company while the factory is on fire.
              </p>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Investors deserve to know what's really happening beneath the surface. The conversations that matter.
                The risks that hide in plain sight.
              </p>
            </div>

            <motion.div
              className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-3xl p-6 md:p-8 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 transition-all duration-500"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">That's why we built CivilSignals.</h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                We listen to the conversations that matter. Council meetings. Planning sessions. Budget hearings. The
                places where truth lives, buried in transcripts that reveal the real investment risks.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
