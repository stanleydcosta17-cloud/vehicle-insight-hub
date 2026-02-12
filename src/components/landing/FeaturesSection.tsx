import { motion } from "framer-motion";
import {
  Search, ScanLine, FileText, AlertTriangle,
  CreditCard, LayoutDashboard, ShieldCheck, Lock
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Plate Number Search",
    description: "Instant lookup by vehicle registration number across all Indian states.",
  },
  {
    icon: ScanLine,
    title: "KA Smart Scanner",
    description: "AI-powered Karnataka number plate scanner with camera upload support.",
  },
  {
    icon: FileText,
    title: "Complete Vehicle Report",
    description: "Ownership history, insurance status, fitness certificate, and more.",
  },
  {
    icon: AlertTriangle,
    title: "Traffic Fines & Evidence",
    description: "View all pending fines with violation images and timestamps.",
  },
  {
    icon: CreditCard,
    title: "Secure Fine Payment",
    description: "Pay traffic fines online through our encrypted payment gateway.",
  },
  {
    icon: LayoutDashboard,
    title: "User Dashboard",
    description: "Track your vehicles, payment history, and fine alerts in one place.",
  },
  {
    icon: ShieldCheck,
    title: "Admin Management",
    description: "Full admin panel for managing vehicles, fines, and user accounts.",
  },
  {
    icon: Lock,
    title: "100% Secure & Encrypted",
    description: "Bank-grade encryption protects all your data and transactions.",
  },
];

const FeaturesSection = () => (
  <section id="features" className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-orange font-semibold text-sm tracking-widest uppercase">Features</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
          Everything You Need
        </h2>
        <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
          A comprehensive platform for vehicle history checks and fine management.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass-card rounded-2xl p-6 hover-lift group cursor-default"
          >
            <div className="w-12 h-12 rounded-xl gradient-orange flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <feature.icon className="w-6 h-6 text-orange-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              {feature.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
