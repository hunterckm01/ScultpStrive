import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/sculpt-and-strive-logo.jpg";
import { NavLink } from "react-router-dom";
import { AuthModal } from "./auth/AuthModal";

const navLinks = [
  { label: "Programs", path: "/programs" },
  { label: "Assessments", path: "/assessments" },
  { label: "Nutrition", path: "/nutrition" },
  { label: "About", path: "/about" },
  { label: "Trainers", path: "/trainers" },
  { label: "Get Plan", path: "/plan" },
];


export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex  justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Sculpt and Strive Logo"
              className="h-14 w-auto object-contain"
            />
            <span className="font-display font-bold text-xl text-foreground block">
              Sculpt and Strive
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                to={link.path}
                className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-200"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* <p className="font-display font-bold text-xl text-foreground block sm:hidden">Sculpt and Strive</p> */}

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setAuthModalOpen(true)}
            >
              Login
            </Button>
            
              <Button variant="hero" size="default" asChild>
                <a href="https://calendly.com/sculptandstrive/30min" target="_blank">
                  Start Your Journey
                </a>
              </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border/30 animate-slide-up">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col gap-4 mb-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  className="text-foreground font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <div className="flex flex-col gap-3 items-center">
              <Button
              variant="glass"
                // variant="ghost"
                className=""
                onClick={() => setAuthModalOpen(true)}
              >
                Login
              </Button>
              
                <Button variant="hero" size="default" asChild>
                    <a
                  href="https://calendly.com/sculptandstrive/30min"
                  target="_blank"
                >
                  Start Your Journey
                </a>
                </Button>
            </div>
          </div>
        </div>
      )}
      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </header>
  );
};