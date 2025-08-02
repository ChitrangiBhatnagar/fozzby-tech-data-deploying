import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Target, 
  Zap, 
  TrendingUp, 
  Users, 
  CheckCircle,
  Star,
  BarChart3,
  Database,
  Shield,
  Building,
  Briefcase,
  Smartphone,
  CreditCard
} from "lucide-react";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Fozzbytechdata transformed our lead generation. We're now generating 4x more qualified leads.",
      author: "Sarah Johnson",
      role: "VP of Sales",
      company: "TechCorp",
      rating: 5
    },
    {
      quote: "The targeting precision is incredible. We've cut our customer acquisition cost by 60%.",
      author: "Michael Chen",
      role: "Head of Growth",
      company: "StartupX",
      rating: 5
    },
    {
      quote: "Best ROI we've seen from any lead generation platform. Highly recommended!",
      author: "Lisa Rodriguez",
      role: "Marketing Director",
      company: "ScaleUp Inc",
      rating: 5
    }
  ];

  const useCases = [
    {
      icon: Building,
      title: "SaaS Companies",
      description: "Target decision-makers at companies using specific technology stacks",
      metrics: "300% increase in demo bookings"
    },
    {
      icon: Briefcase,
      title: "Marketing Agencies", 
      description: "Find businesses that need marketing services and digital transformation",
      metrics: "5x faster client acquisition"
    },
    {
      icon: Smartphone,
      title: "Tech B2B",
      description: "Identify growing companies ready for technology solutions",
      metrics: "250% improvement in conversion"
    },
    {
      icon: CreditCard,
      title: "Fintech",
      description: "Connect with businesses needing financial technology solutions",
      metrics: "400% ROI within 90 days"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "High-Intent Targeting",
      description: "AI-powered algorithms identify prospects most likely to convert"
    },
    {
      icon: Database,
      title: "95% Data Accuracy",
      description: "Real-time verification ensures your outreach reaches the right people"
    },
    {
      icon: Zap,
      title: "Instant Scalability",
      description: "Generate thousands of qualified leads in minutes, not weeks"
    }
  ];

  const crmLogos = ["Salesforce", "HubSpot", "Zoho", "Pipedrive"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 section-hero text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left animate-slide-up">
              <h1 className="font-display text-5xl lg:text-7xl font-bold mb-6">
                Turn Prospects Into Pipeline—
                <span className="text-gradient-coral">At Scale</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-lg">
                Get verified, targeted B2B leads powered by intelligent automation. 
                Stop wasting time on unqualified prospects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://salescentri.com/get-started/free-trial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <a
                  href="https://salescentri.com/get-started/book-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="border-white bg-white text-black hover:bg-white/90 px-8 py-4 text-lg">
                    Book Demo
                  </Button>
                </a>
              </div>
              <div className="flex items-center text-white/80 text-sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>No credit card required • 500 free leads</span>
              </div>
            </div>
            
            <div className="relative animate-float">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-primary">Lead Dashboard</h3>
                    <Badge className="bg-accent text-white">Live</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Qualified Leads</span>
                      <span className="font-semibold text-accent">1,247</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Conversion Rate</span>
                      <span className="font-semibold text-accent">12.4%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Pipeline Value</span>
                      <span className="font-semibold text-accent">$2.1M</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-white/80 rounded p-2 text-center">
                    <div className="text-xs text-muted-foreground">SaaS</div>
                    <div className="font-bold text-sm text-primary">342</div>
                  </div>
                  <div className="bg-white/80 rounded p-2 text-center">
                    <div className="text-xs text-muted-foreground">Tech</div>
                    <div className="font-bold text-sm text-primary">298</div>
                  </div>
                  <div className="bg-white/80 rounded p-2 text-center">
                    <div className="text-xs text-muted-foreground">Fintech</div>
                    <div className="font-bold text-sm text-primary">187</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary mb-4">
              Why Sales Teams Choose Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stop chasing unqualified leads. Start converting prospects into customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-hover card-gradient text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-display">{benefit.title}</CardTitle>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CRM Integration Logos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-muted-foreground mb-8">Seamlessly integrates with your favorite tools</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {crmLogos.map((logo, index) => (
                <div key={index} className="bg-muted rounded-lg px-6 py-3 flex items-center justify-center min-w-[120px]">
                  <span className="font-semibold text-muted-foreground">{logo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">
              Trusted by Sales Leaders
            </h2>
            <p className="text-xl text-white/90">
              See what our customers say about their results
            </p>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div>
                <div className="font-semibold text-lg">{testimonials[currentTestimonial].author}</div>
                <div className="text-white/80">{testimonials[currentTestimonial].role}</div>
                <div className="text-secondary font-medium">{testimonials[currentTestimonial].company}</div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-secondary' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform adapts to your specific industry needs and targeting requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="card-hover card-gradient text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-display">{useCase.title}</CardTitle>
                  <CardDescription className="text-sm">{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-accent/10 rounded-lg p-3">
                    <div className="text-sm font-semibold text-accent">{useCase.metrics}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-primary mb-6">
                Calculate Your ROI
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                See exactly how much revenue you could generate with our targeting platform
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3" />
                  <span>Average 3x increase in qualified leads</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3" />
                  <span>12% average conversion rate improvement</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3" />
                  <span>60% reduction in customer acquisition cost</span>
                </li>
              </ul>
              <a
                href="/pricing"
                rel="noopener noreferrer"
              >
                <Button className="btn-hero">
                  Try ROI Calculator
                  <BarChart3 className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
            
            <Card className="card-gradient shadow-strong">
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-bold mb-4">Quick ROI Preview</h3>
                <div className="space-y-4">
                  <div className="bg-muted rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Monthly Leads</span>
                      <span className="font-bold text-primary">5,000</span>
                    </div>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Conversion Rate</span>
                      <span className="font-bold text-primary">2.5%</span>
                    </div>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Potential Revenue</span>
                      <span className="font-bold text-accent text-lg">$625,000</span>
                    </div>
                  </div>
                  <div className="bg-primary rounded-lg p-4 text-white">
                    <div className="text-center">
                      <div className="text-2xl font-bold">420% ROI</div>
                      <div className="text-sm text-white/80">Monthly return on investment</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 section-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            Get Started – It's Free
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 10,000+ sales professionals already scaling their outbound with precision targeting
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a
              href="https://salescentri.com/get-started/free-trial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Start Free Trial
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </a>
            <a
              href="https://salescentri.com/get-started/book-demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="border-white bg-white text-black hover:bg-white/90 px-8 py-4 text-lg">
                Book Demo
              </Button>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-white/80">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>500 free leads</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>Setup in 5 minutes</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
