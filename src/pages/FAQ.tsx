import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MessageSquare, HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What's the source of your lead data?",
      answer: "Our data comes from multiple verified sources including public records, professional networks, company websites, and proprietary data collection methods. We continuously verify and update our database to ensure 95%+ accuracy rates."
    },
    {
      question: "How often is your database updated?",
      answer: "Our database is updated in real-time with new information being added daily. Contact verification happens every 30 days, and we remove outdated or invalid contacts immediately when identified."
    },
    {
      question: "Can I integrate with my CRM?",
      answer: "Yes! We offer native integrations with all major CRM platforms including Salesforce, HubSpot, Zoho, Pipedrive, and many others. We also provide API access for custom integrations."
    },
    {
      question: "Is your platform GDPR compliant?",
      answer: "Absolutely. We are fully GDPR compliant and hold SOC 2 Type II certification. All data is ethically sourced, and we provide complete transparency about data collection and usage. Users can request data removal at any time."
    },
    {
      question: "What makes your targeting different from competitors?",
      answer: "Our AI-powered targeting goes beyond basic demographics. We use technographic data, growth signals, hiring patterns, and behavioral indicators to identify companies most likely to convert. This results in 3x higher conversion rates compared to traditional lead lists."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes! We offer a 14-day free trial with access to 500 verified leads. No credit card required to start. You can upgrade to a paid plan anytime during or after your trial."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer comprehensive support including live chat, email support, video tutorials, and dedicated customer success managers for Enterprise clients. Our average response time is under 2 hours during business hours."
    },
    {
      question: "Can I export my leads to CSV?",
      answer: "Yes, you can export leads to CSV format with all available data fields. Exports include contact information, company details, technographic data, and any custom tags or notes you've added."
    },
    {
      question: "How accurate is your contact data?",
      answer: "We maintain a 95%+ accuracy rate through real-time verification, machine learning validation, and continuous data cleansing. We also offer a data guarantee - if a contact bounces, we'll replace it for free."
    },
    {
      question: "Do you provide phone numbers and email addresses?",
      answer: "Yes, we provide both direct phone numbers and verified email addresses when available. Our contact discovery includes work emails, direct dials, and mobile numbers where legally accessible."
    },
    {
      question: "Can I target specific industries or company sizes?",
      answer: "Absolutely! You can filter by 50+ industry categories, company size (by employee count or revenue), growth stage, technology stack, geographic location, and many other criteria to build highly targeted prospect lists."
    },
    {
      question: "What's included in your data enrichment?",
      answer: "Our data enrichment includes firmographic data (company size, revenue, industry), technographic data (software used, tech stack), contact information (emails, phones, social profiles), and growth signals (hiring, funding, expansion)."
    }
  ];

  const categories = [
    {
      title: "Getting Started",
      questions: faqs.slice(0, 3)
    },
    {
      title: "Data & Compliance",
      questions: faqs.slice(3, 6)
    },
    {
      title: "Features & Functionality", 
      questions: faqs.slice(6, 9)
    },
    {
      title: "Data Quality & Targeting",
      questions: faqs.slice(9, 12)
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 section-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <HelpCircle className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Everything you need to know about our platform and services
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="card-hover text-center">
              <CardContent className="pt-6">
                <MessageSquare className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Can't find your answer?</h3>
                <p className="text-sm text-muted-foreground mb-4">Chat with our support team</p>
                <a
                  href="https://salescentri.com/contact/support-request/live-chat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">Start Live Chat</Button>
                </a>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardContent className="pt-6">
                <ArrowRight className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Ready to get started?</h3>
                <p className="text-sm text-muted-foreground mb-4">Try our platform for free</p>
                <a
                  href="https://salescentri.com/get-started/free-trial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" className="btn-hero">Start Free Trial</Button>
                </a>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardContent className="pt-6">
                <HelpCircle className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Need a demo?</h3>
                <p className="text-sm text-muted-foreground mb-4">See how it works</p>
                <a
                  href="https://salescentri.com/get-started/book-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">Book Demo</Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 section-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="font-display text-3xl font-bold text-primary mb-8 text-center">
                {category.title}
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`${categoryIndex}-${index}`}
                    className="bg-white rounded-lg shadow-soft border"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <span className="font-semibold text-primary pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">
              Need More Help?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Explore our additional resources and support options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-semibold mb-2">Documentation</h3>
              <p className="text-white/80 text-sm mb-4">Comprehensive guides and tutorials</p>
              <a
                href="https://salescentri.com/docs/user-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors text-sm"
              >
                View Docs →
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎥</span>
              </div>
              <h3 className="font-semibold mb-2">Video Tutorials</h3>
              <p className="text-white/80 text-sm mb-4">Step-by-step video guides</p>
              <a
                href="https://salescentri.com/resources/tutorials-webinars"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors text-sm"
              >
                Watch Now →
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="font-semibold mb-2">API Reference</h3>
              <p className="text-white/80 text-sm mb-4">Technical documentation for developers</p>
              <a
                href="https://salescentri.com/docs/api-reference"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors text-sm"
              >
                View API →
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-semibold mb-2">Contact Support</h3>
              <p className="text-white/80 text-sm mb-4">Get help from our team</p>
              <a
                href="https://salescentri.com/contact/support-request"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors text-sm"
              >
                Get Support →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-primary mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our team is here to help you succeed with lead generation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://salescentri.com/contact/support-request/live-chat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="btn-hero">
                Chat with Support
                <MessageSquare className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a
              href="https://salescentri.com/get-started/book-demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="btn-outline">
                Schedule a Call
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;