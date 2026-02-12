import { motion } from "framer-motion";
import { User, Lock, Mail, Car, IndianRupee, CheckCircle2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const AuthPreviewSection = () => (
  <section className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-orange font-semibold text-sm tracking-widest uppercase">Platform</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
          Seamless User Experience
        </h2>
        <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
          From login to payment — a smooth, secure journey.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Login Form Mockup */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-8"
        >
          <h3 className="font-display text-xl font-bold text-foreground mb-6">Sign In</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground text-sm">user@example.com</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted">
              <Lock className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground text-sm">••••••••</span>
              <Eye className="w-4 h-4 text-muted-foreground ml-auto" />
            </div>
            <Button variant="hero" className="w-full rounded-xl">
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
            <p className="text-center text-muted-foreground text-sm">
              Don't have an account? <span className="text-orange font-medium cursor-pointer">Register</span>
            </p>
          </div>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card rounded-2xl p-6"
        >
          <h3 className="font-display text-lg font-bold text-foreground mb-4">Vehicle Report</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-xl bg-muted">
              <div className="flex items-center gap-3">
                <Car className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">KA01AB1234</p>
                  <p className="text-xs text-muted-foreground">Maruti Swift Dzire</p>
                </div>
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-trust-green/15 text-trust-green font-medium">Active</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-muted">
                <p className="text-xs text-muted-foreground">Owner</p>
                <p className="text-sm font-semibold text-foreground">Rajesh Kumar</p>
              </div>
              <div className="p-3 rounded-xl bg-muted">
                <p className="text-xs text-muted-foreground">Fuel Type</p>
                <p className="text-sm font-semibold text-foreground">Petrol</p>
              </div>
              <div className="p-3 rounded-xl bg-muted">
                <p className="text-xs text-muted-foreground">Insurance</p>
                <p className="text-sm font-semibold text-trust-green">Valid</p>
              </div>
              <div className="p-3 rounded-xl bg-muted">
                <p className="text-xs text-muted-foreground">Reg. Date</p>
                <p className="text-sm font-semibold text-foreground">15/03/2021</p>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-orange/10 border border-orange/20">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">Pending Fines</p>
                <span className="text-orange font-bold">₹2,500</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">2 violations found</p>
            </div>
          </div>
        </motion.div>

        {/* Payment Success */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card rounded-2xl p-8 flex flex-col items-center justify-center text-center"
        >
          <div className="w-20 h-20 rounded-full bg-trust-green/15 flex items-center justify-center mb-5">
            <CheckCircle2 className="w-10 h-10 text-trust-green" />
          </div>
          <h3 className="font-display text-xl font-bold text-foreground mb-2">Payment Successful!</h3>
          <p className="text-muted-foreground text-sm mb-4">Your fine has been cleared successfully.</p>
          <div className="w-full space-y-2 text-sm">
            <div className="flex justify-between p-2 rounded-lg bg-muted">
              <span className="text-muted-foreground">Amount</span>
              <span className="font-semibold text-foreground">₹2,500</span>
            </div>
            <div className="flex justify-between p-2 rounded-lg bg-muted">
              <span className="text-muted-foreground">Transaction ID</span>
              <span className="font-mono text-foreground text-xs">TXN2024031589</span>
            </div>
            <div className="flex justify-between p-2 rounded-lg bg-muted">
              <span className="text-muted-foreground">Vehicle</span>
              <span className="font-mono text-foreground">KA01AB1234</span>
            </div>
          </div>
          <Button variant="orange" className="mt-5 w-full rounded-xl">
            <IndianRupee className="w-4 h-4 mr-1" />
            Download Receipt
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AuthPreviewSection;
