import { motion } from "framer-motion";
import { ScanLine, Eye, CreditCard, Download } from "lucide-react";

const steps = [
  {
    icon: ScanLine,
    step: "01",
    title: "Enter or Scan Plate Number",
    description: "Type the vehicle number or use AI camera scanner to auto-detect it.",
  },
  {
    icon: Eye,
    step: "02",
    title: "View Vehicle & Fine Details",
    description: "Get complete vehicle history, owner info, insurance status, and pending fines.",
  },
  {
    icon: CreditCard,
    step: "03",
    title: "Pay Fines Securely",
    description: "Clear pending traffic fines through our secure payment gateway.",
  },
  {
    icon: Download,
    step: "04",
    title: "Download Report",
    description: "Download a detailed vehicle history report as PDF for your records.",
  },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="section-padding gradient-navy">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-orange font-semibold text-sm tracking-widest uppercase">Process</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-navy-foreground mt-3">
          How It Works
        </h2>
        <p className="text-navy-foreground/60 text-lg mt-4 max-w-xl mx-auto">
          Get complete vehicle details in just 4 simple steps.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((item, i) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative text-center"
          >
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-orange/40 to-transparent" />
            )}

            <div className="w-20 h-20 rounded-2xl glass-card-dark mx-auto mb-5 flex items-center justify-center relative">
              <item.icon className="w-8 h-8 text-orange" />
              <span className="absolute -top-2 -right-2 w-7 h-7 rounded-lg gradient-orange text-orange-foreground text-xs font-bold flex items-center justify-center">
                {item.step}
              </span>
            </div>

            <h3 className="font-display text-lg font-semibold text-navy-foreground mb-2">
              {item.title}
            </h3>
            <p className="text-navy-foreground/50 text-sm leading-relaxed max-w-[240px] mx-auto">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
