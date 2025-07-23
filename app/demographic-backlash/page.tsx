"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Eye, Target, Users, DollarSign, Heart, Home, ArrowRight } from "lucide-react"

export default function DemographicBacklash() {
  const [currentScene, setCurrentScene] = useState(0)
  const [selectedCity, setSelectedCity] = useState("jackson")
  const [dataReveal, setDataReveal] = useState(0)
  const [userHasInteracted, setUserHasInteracted] = useState(false)

  const scenes = [
    {
      title: "THE PROMISE",
      subtitle: "What cities promise residents",
      duration: 6000,
      emotion: "hope",
      color: "from-emerald-400 to-blue-500",
    },
    {
      title: "THE REALITY",
      subtitle: "What residents actually face",
      duration: 8000,
      emotion: "frustration",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "THE BACKLASH",
      subtitle: "When communities fight back",
      duration: 7000,
      emotion: "anger",
      color: "from-red-500 to-purple-500",
    },
  ]

  const cities = {
    jackson: {
      name: "Jackson, MS",
      population: 153701,
      agingPop: 18,
      affordability: 45,
      esgDemand: "High",
      medianIncome: 40000,
      humanStory: "18% of residents over 65, struggling with 45% affordability crisis",
      cityPromise:
        "Revitalized downtown. Affordable living for families. Quality services for seniors. A city that works for everyone.",
      residentReality:
        "18% aging population with inadequate senior services. Affordability at 45/100. High ESG demands the city can't meet. Water crises affecting the most vulnerable.",
      communityBacklash:
        "Town halls packed with angry seniors. Affordability protests downtown. ESG advocacy groups demanding action while city council meetings turn hostile.",
      color: "orange",
      gradient: "from-orange-500 to-orange-700",
      backlashScore: 8.2,
      emoji: "👥",
    },
    fresno: {
      name: "Fresno, CA",
      population: 542107,
      agingPop: 14,
      affordability: 60,
      esgDemand: "Moderate",
      medianIncome: 55000,
      humanStory: "Half a million residents caught between moderate ESG pressure and declining affordability",
      cityPromise:
        "Central Valley opportunity. Growing tech sector. Environmental leadership. Sustainable growth for all residents.",
      residentReality:
        "14% aging population facing service cuts. Affordability dropping to 60/100. Moderate ESG demands creating regulatory burden without community buy-in.",
      communityBacklash:
        "Environmental justice groups clash with business interests. Affordability advocates protest city hall. Moderate ESG policies satisfy no one.",
      color: "blue",
      gradient: "from-blue-500 to-blue-700",
      backlashScore: 6.8,
      emoji: "🌾",
    },
    buffalo: {
      name: "Buffalo, NY",
      population: 278349,
      agingPop: 16,
      affordability: 50,
      esgDemand: "High",
      medianIncome: 45000,
      humanStory: "Rust belt residents demanding both economic opportunity and environmental protection",
      cityPromise:
        "Waterfront renaissance. Tech hub transformation. Green infrastructure. A sustainable future for working families.",
      residentReality:
        "16% aging population in flood-prone areas. Affordability at 50/100. High ESG demands creating tension between environmental and economic needs.",
      communityBacklash:
        "Climate activists vs. job creation advocates. Seniors demanding flood protection. Affordability crisis driving out young families despite green promises.",
      color: "purple",
      gradient: "from-purple-500 to-purple-700",
      backlashScore: 7.5,
      emoji: "🏭",
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
                What {currentCity.name} promises residents
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2, duration: 1.5 }}
                className="bg-gradient-to-r from-emerald-900/30 to-blue-900/30 rounded-3xl p-6 md:p-8 backdrop-blur-sm border border-emerald-500/30 mb-8 hover:border-emerald-400/50 transition-all duration-500"
              >
                <div className="flex items-center justify-center gap-3 md:gap-4 mb-6">
                  <Home className="w-6 h-6 md:w-8 md:h-8 text-emerald-400" />
                  <span className="text-xl md:text-2xl font-bold text-emerald-300">Community Vision</span>
                </div>
                <p className="text-base md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  {currentCity.cityPromise}
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
                  <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-2">Quality</div>
                  <div className="text-sm md:text-base text-gray-400">Services</div>
                </motion.div>
                <motion.div
                  className="text-center p-4 md:p-6 bg-blue-900/20 rounded-2xl border border-blue-500/30 hover:bg-blue-900/30 transition-all duration-300 cursor-default"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">Affordable</div>
                  <div className="text-sm md:text-base text-gray-400">Living</div>
                </motion.div>
                <motion.div
                  className="text-center p-4 md:p-6 bg-purple-900/20 rounded-2xl border border-purple-500/30 hover:bg-purple-900/30 transition-all duration-300 cursor-default"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">Sustainable</div>
                  <div className="text-sm md:text-base text-gray-400">Future</div>
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
                <div className="text-6xl mb-4">😤</div>
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
                What residents actually face
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
                  className="text-center p-6 md:p-8 bg-orange-900/20 rounded-3xl border border-orange-500/30 hover:bg-orange-900/30 transition-all duration-500 cursor-default"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <Users className="w-8 h-8 md:w-12 md:h-12 text-orange-400 mx-auto mb-4" />
                  <motion.div
                    className="text-3xl md:text-5xl font-bold text-orange-400 mb-2"
                    initial={{ scale: 0 }}
                    animate={dataReveal >= 1 ? { scale: 1 } : {}}
                    transition={{ delay: 0.3, type: "spring", bounce: 0.6 }}
                  >
                    {currentCity.agingPop}%
                  </motion.div>
                  <div className="text-sm md:text-base text-gray-400 mb-2">Aging Population</div>
                  <div className="text-xs md:text-sm text-orange-300">over 65 years</div>
                </motion.div>

                <motion.div
                  initial={{ y: 60, opacity: 0, scale: 0.8 }}
                  animate={dataReveal >= 2 ? { y: 0, opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1.2, type: "spring", bounce: 0.4, delay: 0.2 }}
                  className="text-center p-6 md:p-8 bg-red-900/20 rounded-3xl border border-red-500/30 hover:bg-red-900/30 transition-all duration-500 cursor-default"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <DollarSign className="w-8 h-8 md:w-12 md:h-12 text-red-400 mx-auto mb-4" />
                  <motion.div
                    className="text-3xl md:text-5xl font-bold text-red-400 mb-2"
                    initial={{ scale: 0 }}
                    animate={dataReveal >= 2 ? { scale: 1 } : {}}
                    transition={{ delay: 0.3, type: "spring", bounce: 0.6 }}
                  >
                    {currentCity.affordability}/100
                  </motion.div>
                  <div className="text-sm md:text-base text-gray-400 mb-2">Affordability</div>
                  <div className="text-xs md:text-sm text-red-300">crisis level</div>
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
                    {currentCity.backlashScore}
                  </motion.div>
                  <div className="text-sm md:text-base text-gray-400 mb-2">Backlash Score</div>
                  <div className="text-xs md:text-sm text-yellow-300">out of 10</div>
                </motion.div>
              </div>

              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 4, duration: 1.5 }}
                className="bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-3xl p-6 md:p-8 backdrop-blur-sm border border-orange-500/30 hover:border-orange-400/50 transition-all duration-500"
              >
                <p className="text-base md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  {currentCity.residentReality}
                </p>
              </motion.div>
            </motion.div>
          )}

          {currentScene === 2 && (
            <motion.div
              key="backlash"
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
                <div className="text-6xl mb-4">🔥</div>
                <div
                  className={`text-4xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r ${currentSceneData.color} bg-clip-text text-transparent mb-6 md:mb-8`}
                >
                  THE BACKLASH
                </div>
              </motion.div>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="text-lg md:text-2xl lg:text-3xl text-gray-300 mb-8 md:mb-12"
              >
                When communities fight back
              </motion.p>

              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2, duration: 1.5 }}
                className="bg-gradient-to-r from-red-900/50 to-purple-900/50 rounded-3xl p-6 md:p-8 backdrop-blur-sm border border-red-500/30 mb-8 hover:border-red-400/50 transition-all duration-500"
              >
                <div className="flex items-center justify-center gap-3 md:gap-4 mb-6">
                  <Eye className="w-6 h-6 md:w-8 md:h-8 text-red-400" />
                  <span className="text-xl md:text-2xl font-bold text-red-300">Community Response</span>
                </div>
                <p className="text-base md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  {currentCity.communityBacklash}
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
                    <Home className="w-5 h-5" />
                    City Promises
                  </h4>
                  <p className="text-sm md:text-base text-gray-300">
                    "Quality services, affordable living, sustainable future for all residents"
                  </p>
                </motion.div>
                <motion.div
                  className="p-6 md:p-8 bg-red-900/20 rounded-2xl border border-red-500/30 hover:bg-red-900/30 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <h4 className="text-lg md:text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Community Reality
                  </h4>
                  <p className="text-sm md:text-base text-gray-300">
                    "Packed town halls, affordability protests, hostile council meetings"
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
            Each city faces unique demographic pressures and community backlash
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
                    <div className="text-sm text-gray-400">{city.population.toLocaleString()} residents</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-400">Backlash Score</div>
                    <div className={`font-semibold text-${city.color}-400`}>{city.backlashScore}/10</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Aging Pop</div>
                    <div className="font-semibold">{city.agingPop}%</div>
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
                <Target className="w-12 h-12 md:w-16 md:h-16 text-orange-400 mx-auto mb-6" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8">We're calling this out.</h2>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 md:mb-8">
                Cities are making promises to residents they can't keep, creating demographic backlash that threatens
                any investment. It's like building on quicksand.
              </p>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                When communities turn against their own cities, investors face political risk that no financial model
                can predict. The conversations in town halls matter more than the numbers in spreadsheets.
              </p>
            </div>

            <motion.div
              className="bg-gradient-to-r from-orange-900/50 to-red-900/50 rounded-3xl p-6 md:p-8 backdrop-blur-sm border border-orange-500/30 hover:border-orange-400/50 transition-all duration-500"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">That's why we built CivilSignals.</h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                We listen to the anger in town halls. The frustration in community meetings. The backlash brewing in
                council chambers. Because when residents turn against their cities, investments turn to dust.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
