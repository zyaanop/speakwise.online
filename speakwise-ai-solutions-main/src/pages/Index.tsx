import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Shield, Globe, Zap, Bot, Users, Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-chatbot.jpg";

const Index = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Automated Support",
      description: "Your customers get instant responses anytime, reducing wait times and improving satisfaction."
    },
    {
      icon: Zap,
      title: "AI-Powered Sales & Lead Generation",
      description: "Convert visitors into customers with intelligent conversations that guide them through your sales funnel."
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Reach global audiences with chatbots that communicate in 50+ languages with cultural awareness."
    },
    {
      icon: Shield,
      title: "Scalable & Secure Solutions",
      description: "Enterprise-grade security with the ability to handle thousands of conversations simultaneously."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "E-commerce Director",
      company: "TechStyle",
      content: "Speakwise transformed our customer service. Our response time went from hours to seconds, and customer satisfaction increased by 40%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Operations Manager",
      company: "GrowthCorp",
      content: "The lead generation bot they built for us captures qualified leads 24/7. Our conversion rate improved by 60% within the first month.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Success Lead",
      company: "InnovateLabs",
      content: "Professional team, excellent communication, and a chatbot that perfectly represents our brand. Highly recommended!",
      rating: 5
    }
  ];

  const technologies = [
    "OpenAI", "Google Cloud", "WhatsApp API", "Meta AI", "Telegram", "Slack"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Smart AI Chatbots for 
                  <span className="bg-gradient-hero bg-clip-text text-transparent"> Smarter Businesses</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                  At Speakwise, we design and deploy AI-powered chatbots that boost efficiency, 
                  cut costs, and engage customers 24/7. Transform your business communication today.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={heroImage} 
                  alt="AI Chatbot Interface" 
                  className="rounded-2xl shadow-hero w-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-2xl blur-3xl transform translate-x-4 translate-y-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our AI Chatbots?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our intelligent chatbot solutions are designed to transform your business operations 
              and deliver exceptional customer experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From custom development to ongoing support, we provide comprehensive 
              AI chatbot solutions for every business need.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Bot, title: "Custom AI Chatbot Development", description: "Tailored solutions for your specific business needs" },
              { icon: Users, title: "Customer Support Automation", description: "24/7 support that never sleeps" },
              { icon: Zap, title: "Lead Generation Bots", description: "Convert visitors into qualified prospects" }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. See how we've helped businesses transform 
              their customer engagement with AI chatbots.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-accent fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of businesses that have already revolutionized their customer 
              engagement with our AI chatbot solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;