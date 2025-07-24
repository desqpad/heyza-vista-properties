import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                HEYZA
              </div>
              <div className="text-xl font-light text-foreground">Properties</div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Your trusted partner in Dubai real estate. We specialize in premium properties 
              and exceptional investment opportunities across the Emirates.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  SABAH 2 - Office F2, Jebel Ali Industrial, Dubai, UAE
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+971 565878656</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">info@heyzaproperties.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Property Sales</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Investment Consultancy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Property Management</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Legal Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Market Valuation</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Heyza Properties. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Designed with excellence for your real estate success.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;