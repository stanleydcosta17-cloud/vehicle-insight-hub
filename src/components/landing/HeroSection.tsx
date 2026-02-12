import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Camera, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const INDIAN_STATES = [
  "KA", "MH", "DL", "TN", "AP", "TS", "KL", "UP", "RJ", "GJ",
  "WB", "MP", "BR", "PB", "HR", "JK", "UK", "HP", "GA", "OR",
];

const Navbar = () => (
  <nav className="absolute top-0 left-0 right-0 z-50 px-4 md:px-8 py-4">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-lg gradient-orange flex items-center justify-center">
          <Search className="w-5 h-5 text-orange-foreground" />
        </div>
        <span className="font-display text-xl font-bold text-primary-foreground">
          VehicleCheck
        </span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#features" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium">Features</a>
        <a href="#how-it-works" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium">How It Works</a>
        <a href="#security" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium">Security</a>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="hero-outline" size="sm">Login</Button>
        <Button variant="orange" size="sm">Register</Button>
      </div>
    </div>
  </nav>
);

const HeroSection = () => {
  const [plateNumber, setPlateNumber] = useState("");
  const [selectedState, setSelectedState] = useState("KA");
  const [showStates, setShowStates] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy/95" />
      </div>

      <Navbar />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange/15 border border-orange/30 text-orange mb-6 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
            India's Most Trusted Vehicle History Platform
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Check Complete Vehicle
            <br />
            <span className="text-orange">History Instantly</span>
          </h1>

          <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Search by plate number. View fines, ownership, insurance, and more.
            Powered by government-verified data sources.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card rounded-2xl p-2 max-w-2xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-2">
            {/* State Selector */}
            <div className="relative">
              <button
                onClick={() => setShowStates(!showStates)}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-navy text-navy-foreground font-mono font-bold text-lg min-w-[80px] justify-center"
              >
                {selectedState}
                <ChevronDown className="w-4 h-4" />
              </button>
              {showStates && (
                <div className="absolute top-full mt-1 left-0 bg-card rounded-xl shadow-xl border border-border p-2 grid grid-cols-5 gap-1 z-50 min-w-[240px]">
                  {INDIAN_STATES.map((s) => (
                    <button
                      key={s}
                      onClick={() => { setSelectedState(s); setShowStates(false); }}
                      className={`px-2 py-1.5 rounded-lg text-sm font-mono font-bold transition-colors ${
                        s === selectedState
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted text-foreground"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Plate Input */}
            <div className="flex-1 relative">
              <input
                type="text"
                value={plateNumber}
                onChange={(e) => setPlateNumber(e.target.value.toUpperCase())}
                placeholder="01AB1234"
                className="w-full px-4 py-3 rounded-xl bg-muted text-foreground plate-input placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-orange/50"
                maxLength={10}
              />
            </div>

            {/* Scan Button */}
            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-xl text-muted-foreground hover:text-orange hover:bg-orange/10">
              <Camera className="w-5 h-5" />
            </Button>

            {/* Search Button */}
            <Button variant="hero" size="lg" className="rounded-xl px-8 h-12 animate-pulse-glow">
              <Search className="w-5 h-5 mr-2" />
              Check Now
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-12"
        >
          {[
            { label: "Vehicles Checked", value: "2.5M+" },
            { label: "Fines Processed", value: "₹85Cr+" },
            { label: "Active Users", value: "500K+" },
            { label: "States Covered", value: "29+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl md:text-3xl font-bold text-orange">{stat.value}</div>
              <div className="text-primary-foreground/50 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
