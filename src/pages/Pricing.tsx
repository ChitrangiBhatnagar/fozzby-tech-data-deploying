import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Calculator } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [dealSize, setDealSize] = useState(5000);
  const [conversionRate, setConversionRate] = useState(2);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      price: isAnnual ? 39 : 49,
      leads: "1,000",
      popular: false,
      features: [
        "1,000 verified leads/month",
        "Basic industry filtering",
        "CSV export",
        "Email support",
        "Standard data enrichment",
        "Basic CRM integration"
      ]
    },
    {
      name: "Professional", 
      description: "For growing sales teams",
      price: isAnnual ? 119 : 149,
      leads: "5,000",
      popular: true,
      features: [
        "5,000 verified leads/month",
        "Advanced targeting & filters",
        "Real-time CRM sync",
        "Priority support",
        "AI-powered segmentation",
        "Multi-channel tracking",
        "Custom exports",
        "Team collaboration tools"
      ]
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: "Custom",
      leads: "Unlimited",
      popular: false,
      features: [
        "Unlimited verified leads",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced analytics",
        "API access",
        "Custom onboarding",
        "SLA guarantee",
        "White-label options"
      ]
    }
  ];

  const calculateROI = () => {
    const monthlyLeads = isAnnual ? 5000 : 5000;
    const conversions = (monthlyLeads * conversionRate) / 100;
    const revenue = conversions * dealSize;
    const cost = isAnnual ? 119 : 149;
    const roi = ((revenue - cost) / cost) * 100;
    return { revenue, roi: Math.round(roi) };
  };

  const { revenue, roi } = calculateROI();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 section-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Start free, scale with confidence. No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="bg-muted rounded-lg p-1 flex">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  !isAnnual 
                    ? 'bg-white text-primary shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  isAnnual 
                    ? 'bg-white text-primary shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Annual
                <Badge className="ml-2 bg-accent text-accent-foreground">Save 20%</Badge>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`card-hover relative ${plan.popular ? 'border-accent shadow-lg scale-105' : 'card-gradient'}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-display">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">
                      {plan.price === "Custom" ? "Custom" : `$${plan.price}`}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="text-muted-foreground">/{isAnnual ? 'year' : 'month'}</span>
                    )}
                  </div>
                  <p className="text-accent font-semibold">{plan.leads} leads/month</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    {plan.name === "Enterprise" ? (
                      <a
                        href="https://salescentri.com/contact/sales-inquiry"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button className="w-full btn-hero">
                          Contact Sales
                        </Button>
                      </a>
                    ) : (
                      <a
                        href="https://salescentri.com/get-started/free-trial"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button className={`w-full ${plan.popular ? 'btn-hero' : 'btn-outline'}`}>
                          Start Free Trial
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Calculator className="w-16 h-16 mx-auto mb-4 text-secondary" />
            <h2 className="font-display text-4xl font-bold mb-4">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-white/90">
              See how much revenue you could generate with our leads
            </p>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Average Deal Size
                    </label>
                    <input
                      type="range"
                      min="1000"
                      max="50000"
                      step="1000"
                      value={dealSize}
                      onChange={(e) => setDealSize(Number(e.target.value))}
                      className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="text-2xl font-bold mt-2">${dealSize.toLocaleString()}</div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Lead to Customer Conversion Rate
                    </label>
                    <input
                      type="range"
                      min="0.5"
                      max="10"
                      step="0.5"
                      value={conversionRate}
                      onChange={(e) => setConversionRate(Number(e.target.value))}
                      className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="text-2xl font-bold mt-2">{conversionRate}%</div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">Monthly Results</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-white">Potential Revenue:</span>
                      <span className="font-bold text-white">${revenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white">Platform Cost:</span>
                      <span className="text-white">${isAnnual ? '119' : '149'}</span>
                    </div>
                    <div className="border-t border-white/20 pt-3">
                      <div className="flex justify-between text-lg font-bold">
                        <span className="text-white">ROI:</span>
                        <span className="text-white">{roi}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-primary mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of sales teams already scaling with our platform
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

export default Pricing;