import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-secondary rounded-lg"></div>
              <span className="font-display font-bold text-xl">
                Fozzbytechdata
              </span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Empowering B2B teams to scale outbound with precision. Get verified, 
              targeted leads powered by intelligent automation.
            </p>
            <div className="text-sm text-primary-foreground/70">
              <p>Miami, FL</p>
              <p>contact@fozzbytechdata.com</p>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/features" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/pricing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/solutions/use-case-navigator/demo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Demo
                </a>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/docs/api-reference" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/company/careers" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/company/partners-affiliates" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Partners
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/docs/user-guide" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/contact/support-request" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Support
                </a>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/trust/security-privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/70">
            © 2024 Fozzbytechdata Solutions. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <a 
              href="https://salescentri.com?utm_source=fozzbytechdata.com&utm_medium=footer&utm_campaign=partner_network" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Powered by Sales Intelligence Platform
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;