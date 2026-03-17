import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-[hsl(220,85%,12%)] border-b border-white/10 px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center">
            <Search className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold text-white font-[Space_Grotesk]">
            VehicleCheck
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
            Features
          </a>
          <a href="#how-it-works" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
            How It Works
          </a>
          <a href="#security" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
            Security
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="outline" size="sm" className="border-white/20 text-white bg-transparent hover:bg-white/10 hover:text-white">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white border-0">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
