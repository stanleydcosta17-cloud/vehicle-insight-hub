import { motion } from "framer-motion";
import { ImagePlus, IndianRupee, AlertTriangle, CheckCircle2 } from "lucide-react";

const demoRecords = [
  { plate: "KA01AB1234", owner: "Rajesh Kumar", fine: "₹2,500", status: "Pending", violations: 2 },
  { plate: "KA05CD5678", owner: "Priya Sharma", fine: "₹1,000", status: "Paid", violations: 1 },
  { plate: "KA03EF9012", owner: "Anil Reddy", fine: "₹3,500", status: "Pending", violations: 3 },
  { plate: "KA09GH3456", owner: "Meera Nair", fine: "₹500", status: "Paid", violations: 1 },
  { plate: "KA12JK7890", owner: "Suresh Patil", fine: "₹4,000", status: "Pending", violations: 4 },
];

const AdminPreviewSection = () => (
  <section className="section-padding bg-muted/50">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-orange font-semibold text-sm tracking-widest uppercase">Administration</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
          Powerful Admin Panel
        </h2>
        <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
          Manage vehicles, fines, and payments from a single dashboard.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-2xl overflow-hidden"
      >
        {/* Admin Header */}
        <div className="gradient-navy px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <h3 className="font-display text-lg font-bold text-navy-foreground">Vehicle Records</h3>
            <div className="hidden sm:flex items-center gap-4 text-sm">
              <span className="text-navy-foreground/60">Total: <span className="text-orange font-bold">1,247</span></span>
              <span className="text-navy-foreground/60">Pending: <span className="text-orange font-bold">342</span></span>
              <span className="text-navy-foreground/60">Revenue: <span className="text-trust-green font-bold">₹18.5L</span></span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-orange/20 text-orange text-sm font-medium hover:bg-orange/30 transition-colors">
              <ImagePlus className="w-4 h-4" />
              Upload Violation
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-6 font-semibold text-muted-foreground">Plate No.</th>
                <th className="text-left py-3 px-6 font-semibold text-muted-foreground">Owner</th>
                <th className="text-left py-3 px-6 font-semibold text-muted-foreground">Violations</th>
                <th className="text-left py-3 px-6 font-semibold text-muted-foreground">Fine Amount</th>
                <th className="text-left py-3 px-6 font-semibold text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {demoRecords.map((record, i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                  <td className="py-3 px-6 font-mono font-bold text-foreground">{record.plate}</td>
                  <td className="py-3 px-6 text-foreground">{record.owner}</td>
                  <td className="py-3 px-6">
                    <span className="flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-orange" />
                      <span className="text-foreground">{record.violations}</span>
                    </span>
                  </td>
                  <td className="py-3 px-6">
                    <span className="flex items-center gap-1">
                      <IndianRupee className="w-3.5 h-3.5 text-muted-foreground" />
                      <span className="font-semibold text-foreground">{record.fine.replace("₹", "")}</span>
                    </span>
                  </td>
                  <td className="py-3 px-6">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                      record.status === "Paid"
                        ? "bg-trust-green/15 text-trust-green"
                        : "bg-orange/15 text-orange"
                    }`}>
                      {record.status === "Paid" ? <CheckCircle2 className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AdminPreviewSection;
