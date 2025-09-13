import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold">Speakwise</span>
            </div>
            <p className="text-background/80 text-sm">
              Empowering businesses with intelligent AI chatbot solutions that deliver human-like conversations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-background/80 hover:text-background text-sm transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-background/80 hover:text-background text-sm transition-colors">
                About
              </Link>
              <Link to="/services" className="block text-background/80 hover:text-background text-sm transition-colors">
                Services
              </Link>
              <Link to="/pricing" className="block text-background/80 hover:text-background text-sm transition-colors">
                Pricing
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              <p className="text-background/80 text-sm">Custom AI Chatbots</p>
              <p className="text-background/80 text-sm">E-commerce Bots</p>
              <p className="text-background/80 text-sm">Customer Support</p>
              <p className="text-background/80 text-sm">Lead Generation</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-background/80" />
                <a 
                  href="mailto:zyaan@speakwise.online" 
                  className="text-background/80 hover:text-background text-sm transition-colors"
                >
                  zyaan@speakwise.online
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-background/80" />
                <a 
                  href="mailto:shahil@speakwise.online" 
                  className="text-background/80 hover:text-background text-sm transition-colors"
                >
                  shahil@speakwise.online
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 Speakwise. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-background/60 hover:text-background text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-background/60 hover:text-background text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;