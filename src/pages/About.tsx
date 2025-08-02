import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Award, TrendingUp, ArrowRight, Shield, Globe } from "lucide-react";

const About = () => {
  const milestones = [
    { year: "2020", title: "Company Founded", description: "Started with a vision to revolutionize B2B lead generation" },
    { year: "2021", title: "First 1000 Customers", description: "Reached our first major milestone with growing client base" },
    { year: "2022", title: "Series A Funding", description: "Secured funding to accelerate product development" },
    { year: "2023", title: "Global Expansion", description: "Expanded operations across North America and Europe" },
    { year: "2024", title: "AI Integration", description: "Launched advanced AI-powered targeting capabilities" }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      description: "Former VP of Sales at tech unicorn, 15+ years in B2B sales technology"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      description: "Ex-Google engineer, expert in data infrastructure and machine learning"
    },
    {
      name: "Lisa Thompson",
      role: "VP of Customer Success",
      description: "Customer experience leader with track record at SalesLoft and Outreach"
    }
  ];

  const certifications = [
    { name: "GDPR Compliance", icon: Shield },
    { name: "SOC 2 Type II", icon: Shield },
    { name: "ISO 27001", icon: Award },
    { name: "Privacy Shield", icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 section-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
              Empowering B2B Teams to Scale Outbound with Precision
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              We're on a mission to transform how sales teams identify, engage, and convert prospects
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-primary mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Traditional lead generation is broken. Sales teams waste countless hours on unqualified prospects, 
                outdated contact information, and manual research processes.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We believe there's a better way. Our platform combines cutting-edge AI, comprehensive data, 
                and intuitive design to help B2B teams identify their ideal customers and engage them with precision.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">10,000+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">500M+</div>
                  <div className="text-sm text-muted-foreground">Leads Generated</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-primary rounded-2xl p-8 text-white">
              <h3 className="font-display text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <TrendingUp className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
                  <span>95% data accuracy rate with real-time verification</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Trusted by 10,000+ sales professionals worldwide</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Enterprise-grade security and compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced leaders with deep expertise in sales technology and data science
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="card-hover text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <CardTitle className="text-xl font-display">{member.name}</CardTitle>
                  <CardDescription className="text-accent font-semibold">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 section-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our mission to transform B2B sales
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="w-12 h-12 bg-accent rounded-full mx-auto flex items-center justify-center text-white font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                  <div className="text-sm font-semibold text-accent mt-2">{milestone.year}</div>
                </div>
                <div className="ml-8 flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Miami Office */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <MapPin className="w-12 h-12 text-secondary mb-4" />
              <h2 className="font-display text-4xl font-bold mb-6">
                Miami Headquarters
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Located in the heart of Miami's thriving tech scene, our headquarters serves as the 
                innovation hub for our global operations.
              </p>
              <div className="space-y-2 text-white/80">
                <p>1200 Brickell Avenue, Suite 1950</p>
                <p>Miami, FL 33131</p>
                <p>United States</p>
              </div>
              <div className="mt-8">
                <a
                  href="https://salescentri.com/company/careers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    View Career Opportunities
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="font-display text-2xl font-bold mb-6">Join Our Team</h3>
              <p className="text-white/90 mb-6">
                We're always looking for passionate individuals who want to revolutionize 
                the future of B2B sales technology.
              </p>
              <a
                href="https://www.linkedin.com/company/fozzbytechdata"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors"
              >
                Follow us on LinkedIn for updates →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">
              Security & Compliance
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your data security and privacy are our top priorities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <cert.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-primary">{cert.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-primary mb-6">
            Ready to Transform Your Sales Process?
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
              <Button variant="outline" className="btn-outline">
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

export default About;