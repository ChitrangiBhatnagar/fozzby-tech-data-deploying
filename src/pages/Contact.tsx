import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageSquare, Calendar, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 section-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Ready to transform your lead generation? Let's talk about your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Get instant support from our team
                </p>
                <a
                  href="https://salescentri.com/contact/support-request/live-chat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">Start Chat</Button>
                </a>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Book Demo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Schedule a personalized demo
                </p>
                <a
                  href="https://salescentri.com/get-started/calendly"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">Schedule Now</Button>
                </a>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Send us a detailed message
                </p>
                <a
                  href="https://salescentri.com/contact/support-request/submit-ticket"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">Submit Ticket</Button>
                </a>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Sales Inquiry</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Speak with our sales team
                </p>
                <a
                  href="https://salescentri.com/contact/sales-inquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">Contact Sales</Button>
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="text-2xl font-display">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="john@company.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <Input placeholder="Your Company" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demo">Schedule Demo</SelectItem>
                        <SelectItem value="pricing">Pricing Question</SelectItem>
                        <SelectItem value="integration">Integration Support</SelectItem>
                        <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell us about your lead generation needs..."
                      rows={4}
                    />
                  </div>
                  
                  <a
                    href="https://salescentri.com/get-started/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="btn-hero w-full">
                      Send Message
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </a>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle className="text-xl font-display flex items-center">
                    <MapPin className="w-6 h-6 text-accent mr-2" />
                    Our Office
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    1200 Brickell Avenue, Suite 1950<br />
                    Miami, FL 33131<br />
                    United States
                  </p>
                </CardContent>
              </Card>

              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle className="text-xl font-display flex items-center">
                    <Clock className="w-6 h-6 text-accent mr-2" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p>Saturday: 10:00 AM - 2:00 PM EST</p>
                    <p>Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle className="text-xl font-display flex items-center">
                    <Mail className="w-6 h-6 text-accent mr-2" />
                    Email Addresses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <strong>General:</strong> contact@fozzbytechdata.com
                    </p>
                    <p>
                      <strong>Sales:</strong> sales@fozzbytechdata.com
                    </p>
                    <p>
                      <strong>Support:</strong> support@fozzbytechdata.com
                    </p>
                    <p>
                      <strong>Partnerships:</strong> partners@fozzbytechdata.com
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">
              Visit Our Miami Office
            </h2>
            <p className="text-xl text-white/90">
              Located in the heart of Miami's financial district
            </p>
          </div>
          
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="aspect-video bg-white/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-secondary" />
                <p className="text-lg font-semibold mb-2">Interactive Map</p>
                <p className="text-white/80">1200 Brickell Avenue, Miami, FL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">
              Need Immediate Help?
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the best option for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quick Demo</h3>
                <p className="text-muted-foreground mb-4">
                  See the platform in action with a 15-minute demo
                </p>
                <a
                  href="https://salescentri.com/get-started/book-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="btn-hero">Book Now</Button>
                </a>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Free Trial</h3>
                <p className="text-muted-foreground mb-4">
                  Start generating leads immediately with our free trial
                </p>
                <a
                  href="https://salescentri.com/get-started/free-trial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="btn-secondary">Get Started</Button>
                </a>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-coral rounded-full mx-auto mb-4 flex items-center justify-center">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Live Support</h3>
                <p className="text-muted-foreground mb-4">
                  Get instant answers from our support team
                </p>
                <a
                  href="https://salescentri.com/contact/support-request/live-chat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="btn-outline">Start Chat</Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;