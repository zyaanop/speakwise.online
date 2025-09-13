import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, ShoppingCart, Headphones, Users, Zap, Globe } from "lucide-react";
import servicesImage from "@/assets/services-bg.jpg";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "Custom AI Chatbot Development",
      description: "Tailored chatbots for websites, WhatsApp, Messenger, Telegram, and Slack that perfectly match your brand and business needs.",
      features: ["Multi-platform integration", "Custom branding", "Advanced NLP", "Seamless API connections"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Chatbots",
      description: "Boost your online sales with intelligent bots that handle cart recovery, product recommendations, and customer inquiries.",
      features: ["Cart abandonment recovery", "Product recommendations", "Order tracking", "Upselling & cross-selling"]
    },
    {
      icon: Headphones,
      title: "Customer Support Automation",
      description: "Automate your customer service with smart FAQs, ticket handling, and appointment booking capabilities.",
      features: ["24/7 support availability", "Smart FAQ responses", "Ticket management", "Appointment scheduling"]
    },
    {
      icon: Users,
      title: "Lead Generation Bots",
      description: "Convert website visitors into qualified leads with conversational funnels designed to capture high-quality prospects.",
      features: ["Conversational funnels", "Lead qualification", "CRM integration", "Follow-up automation"]
    },
    {
      icon: Zap,
      title: "Integration & Maintenance",
      description: "Seamlessly connect your chatbots with existing systems and enjoy ongoing support and optimization.",
      features: ["CRM/ERP integration", "Shopify/WordPress plugins", "Zapier connections", "Ongoing optimization"]
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Reach global audiences with chatbots that communicate in multiple languages with cultural awareness.",
      features: ["50+ languages", "Cultural adaptation", "Localized responses", "Regional customization"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive AI chatbot solutions designed to transform your business operations 
              and enhance customer engagement across all touchpoints.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Get Started Today
              </Button>
              <Button variant="outline" size="lg">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From consultation to deployment, we follow a proven methodology to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We analyze your business needs and identify the best chatbot strategy." },
              { step: "02", title: "Design", description: "Custom chatbot design with your brand identity and user experience in mind." },
              { step: "03", title: "Development", description: "Build and train your AI chatbot using the latest technologies and best practices." },
              { step: "04", title: "Deploy & Support", description: "Launch your chatbot with ongoing monitoring, optimization, and support." }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">{process.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{process.title}</h3>
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss which chatbot solution is perfect for your business needs.
            </p>
            <Button variant="hero" size="lg">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;