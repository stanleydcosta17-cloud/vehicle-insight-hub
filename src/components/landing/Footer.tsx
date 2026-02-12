import { Search, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy px-4 md:px-8 py-16">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg gradient-orange flex items-center justify-center">
              <Search className="w-4 h-4 text-orange-foreground" />
            </div>
            <span className="font-display text-lg font-bold text-navy-foreground">VehicleCheck</span>
          </div>
          <p className="text-navy-foreground/50 text-sm leading-relaxed">
            India's most trusted platform for vehicle history checks and online fine payment.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-display font-semibold text-navy-foreground mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#" className="text-navy-foreground/50 hover:text-orange transition-colors">About Us</a></li>
            <li><a href="#" className="text-navy-foreground/50 hover:text-orange transition-colors">Contact</a></li>
            <li><a href="#" className="text-navy-foreground/50 hover:text-orange transition-colors">Careers</a></li>
            <li><a href="#" className="text-navy-foreground/50 hover:text-orange transition-colors">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-navy-foreground mb-4">Legal</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#" className="text-navy-foreground/50 hover:text-orange transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-navy-foreground/50 hover:text-orange transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="text-navy-foreground/50 hover:text-orange transition-colors">Refund Policy</a></li>
            <li><a href="#" className="text-navy-foreground/50 hover:text-orange transition-colors">Disclaimer</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-navy-foreground mb-4">Support</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#" className="text-navy-foreground/50 hover:text-orange transition-colors">Help Center</a></li>
            <li><a href="#" className="text-navy-foreground/50 hover:text-orange transition-colors">FAQs</a></li>
            <li><a href="#" className="text-navy-foreground/50 hover:text-orange transition-colors">Report Issue</a></li>
            <li><a href="#" className="text-navy-foreground/50 hover:text-orange transition-colors">API Docs</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-light pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-navy-foreground/40 text-sm">
          © 2026 VehicleCheck. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
            <a key={i} href="#" className="w-9 h-9 rounded-lg bg-navy-light flex items-center justify-center text-navy-foreground/50 hover:text-orange hover:bg-orange/10 transition-all">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
