import { motion } from "framer-motion";
import { ShieldCheck, Globe, Lock } from "lucide-react";

const trustItems = [
  {
    icon: Lock,
    title: "SSL Secure",
    description: "256-bit SSL encryption ensures your data is always protected in transit.",
  },
  {
    icon: Globe,
    title: "Government Data Verified",
    description: "All vehicle information is sourced and verified from official government databases.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment Gateway",
    description: "PCI DSS compliant payment processing with multiple payment options.",
  },
];

const TrustSection = () => (
  <section id="security" className="section-padding gradient-navy">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-orange font-semibold text-sm tracking-widest uppercase">Trust & Security</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-navy-foreground mt-3">
          Your Data is Safe With Us
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {trustItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card-dark rounded-2xl p-8 text-center hover-lift"
          >
            <div className="w-16 h-16 rounded-2xl bg-orange/15 flex items-center justify-center mx-auto mb-5">
              <item.icon className="w-8 h-8 text-orange" />
            </div>
            <h3 className="font-display text-lg font-semibold text-navy-foreground mb-2">
              {item.title}
            </h3>
            <p className="text-navy-foreground/50 text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
