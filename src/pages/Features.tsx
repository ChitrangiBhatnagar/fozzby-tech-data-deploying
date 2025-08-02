import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Target, 
  Brain, 
  Database, 
  Download, 
  Zap, 
  Shield,
  ArrowRight,
  CheckCircle 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Target,
      title: "Industry-Specific Targeting",
      description: "Precision targeting based on industry, company size, technology stack, and growth signals.",
      benefits: ["50+ industry filters", "Technographic data", "Company growth indicators", "Revenue-based segmentation"]
    },
    {
      icon: Brain,
      title: "AI-Powered Segmentation",
      description: "Machine learning algorithms identify your ideal customer profile and suggest optimal segments.",
      benefits: ["Lookalike modeling", "Behavioral patterns", "Intent signal detection", "Predictive scoring"]
    },
    {
      icon: Database,
      title: "Data Enrichment",
      description: "Comprehensive firmographic and technographic data to fuel your sales conversations.",
      benefits: ["95% data accuracy", "Real-time updates", "Contact verification", "GDPR compliant"]
    },
    {
      icon: Download,
      title: "Export & CRM Sync",
      description: "Seamlessly export to CSV or sync directly with your favorite CRM platform.",
      benefits: ["Salesforce integration", "HubSpot sync", "Zoho connectivity", "Custom API access"]
    },
    {
      icon: Zap,
      title: "Multi-Channel Tracking",
      description: "Track engagement across email, phone, LinkedIn, and other touchpoints.",
      benefits: ["Unified dashboard", "Engagement scoring", "Response tracking", "Performance analytics"]
    },
    {
      icon: Shield,
      title: "Data Security & Compliance",
      description: "Enterprise-grade security with full GDPR compliance and data protection.",
      benefits: ["SOC 2 certified", "GDPR compliant", "Data encryption", "Privacy controls"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 section-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
              Target. Engage. Convert.
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Everything you need to turn prospects into pipeline at scale
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://salescentri.com/get-started/free-trial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-white text-black hover:bg-white/90 px-8 py-4 text-lg font-semibold">
                  Start Free Trial
                </Button>
              </a>
              <a
                href="https://salescentri.com/solutions/use-case-navigator/demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-white bg-white text-black hover:bg-white/90 px-8 py-4 text-lg">
                  View Demo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">
              Powerful Features for Modern Sales Teams
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform combines cutting-edge technology with proven sales methodologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover card-gradient h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-display">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CRM Integration Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">
              Seamless CRM Integration
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Connect with your existing tools and workflows
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Salesforce", "HubSpot", "Zoho", "Pipedrive"].map((crm, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="w-16 h-16 bg-white/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold">{crm[0]}</span>
                </div>
                <h3 className="font-semibold">{crm}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-primary mb-6">
            Ready to Transform Your Lead Generation?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of sales teams already using our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://salescentri.com/get-started/free-trial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="btn-hero">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a
              href="https://salescentri.com/get-started/book-demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="bg-white text-black hover:bg-white/90">
                Book a Demo
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;