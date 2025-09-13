import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Lightbulb, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay at the forefront of AI technology to deliver cutting-edge solutions."
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "Clear communication and honest practices in every client relationship."
    },
    {
      icon: Users,
      title: "Customer-Centricity",
      description: "Your success is our success. We build solutions that truly serve your needs."
    },
    {
      icon: Target,
      title: "Scalability",
      description: "Our solutions grow with your business, adapting to your evolving requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Speakwise
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Founded to simplify how businesses use AI in customer interactions, 
              we're transforming the way companies communicate with their customers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-card">
              <CardContent className="space-y-6">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                  <p className="text-lg text-muted-foreground">
                    "To empower businesses with intelligent chat solutions that deliver human-like conversations."
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">What We Do</h3>
                    <p className="text-muted-foreground">
                      We specialize in creating custom AI-powered chatbots that transform how businesses 
                      interact with their customers. From customer support automation to sales optimization, 
                      our solutions are designed to boost efficiency and enhance user experience.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Why Choose Us</h3>
                    <p className="text-muted-foreground">
                      With expertise in cutting-edge AI technologies and a deep understanding of business needs, 
                      we deliver chatbot solutions that are not just smart, but strategically aligned with 
                      your business objectives.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and shape how we build relationships with our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-card transition-shadow">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI chatbot solutions can transform your business operations.
            </p>
            <Button variant="hero" size="lg">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;