import { 
  Instagram, 
  Facebook, 
  Youtube, 
  Twitter,
  Mail,
  Phone,
  MapPin 
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "@/assets/sculpt-and-strive-logo.jpg";
import { NavLink, useNavigate } from "react-router-dom";

const footerLinks = {
  Programs: [
    "Prenatal Fitness",
    "Senior Vitality",
    "Women's Fitness",
    "Youth Training",
    "Weight Loss",
    "Corrective Exercise",
  ],
  Services: [
    "Postural Assessment",
    "Nutrition Coaching",
    "Group Training",
    "1-on-1 Sessions",
    "Online Programs",
    "Corporate Wellness",
  ],
  Resources: [
    "Blog",
    "Exercise Library",
    "Nutrition Guides",
    "Success Stories",
    "FAQ",
    "Support",
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/sculpt.and.strive/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61576293194411", label: "Facebook" },
  { icon: Youtube, href: "https://www.youtube.com/@SculptAndStrive", label: "YouTube" },
  { icon: FaWhatsapp, href: "https://api.whatsapp.com/message/WGFG665AKDQ4B1?autoload=1&app_absent=0&utm_source=ig", label: "Twitter" },
];

export const Footer = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    if(location.pathname === "/"){
      window.scrollTo({top:0, behavior: "smooth"})
    }
    else{
      navigate("/");
    }
  }
 
  return (
    <footer id="about" className="bg-accent text-accent-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="Sculpt and Strive Logo"
                className="h-16 w-auto object-contain cursor-pointer"
                onClick={handleNavigation}
              />
              <span className="font-display font-bold text-xl">
                Sculpt and Strive
              </span>
            </div>
            <p className="text-accent-foreground/70 mb-6 max-w-sm">
              Your personalized fitness journey starts here. From prenatal to
              senior fitness, we meet you exactly where you are.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href="mailto:hello@sculptandstrive.com"
                className="flex items-center gap-3 text-accent-foreground/70 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@sculptandstrive.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-accent-foreground/70 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 7302113369
              </a>
              <div className="flex items-center gap-3 text-accent-foreground/70">
                <MapPin className="w-4 h-4" />
                Sector 1 Meerut Uttar Pradesh India 250002.
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-accent-foreground/10 flex items-center justify-center text-accent-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  target="_blank"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-lg mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-accent-foreground/70 hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-accent-foreground/50 text-sm">
            © {new Date().getFullYear()} Sculpt and Strive. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <NavLink
              to="/privacypolicy"
              className="text-accent-foreground/50 hover:text-primary transition-colors"
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/termsandconditions"
              className="text-accent-foreground/50 hover:text-primary transition-colors"
            >
              Terms of Service
            </NavLink>
            <a
              href="https://www.vigomerge.com/"
              className="text-accent-foreground/50 hover:text-primary transition-colors"
              target="_blank"
            >
              Designed by Vigomerge Inc.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
