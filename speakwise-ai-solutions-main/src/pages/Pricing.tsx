import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter Plan",
      description: "Perfect for small businesses getting started with AI chatbots",
      price: "Request Quote",
      popular: false,
      features: [
        "Basic chatbot for 1 platform",
        "Up to 1,000 conversations/month",
        "Standard AI responses",
        "Email support",
        "Basic analytics",
        "Simple integrations"
      ]
    },
    {
      name: "Growth Plan",
      description: "Ideal for scaling businesses that need advanced features",
      price: "Request Quote",
      popular: true,
      features: [
        "Multi-platform chatbots (3 platforms)",
        "Up to 10,000 conversations/month",
        "Advanced AI with custom training",
        "Priority support",
        "Detailed analytics & insights",
        "CRM/ERP integrations",
        "Lead generation tools",
        "Multilingual support"
      ]
    },
    {
      name: "Enterprise Plan",
      description: "Fully customized solution for large organizations",
      price: "Custom Pricing",
      popular: false,
      features: [
        "Unlimited platforms & conversations",
        "Custom AI model training",
        "Dedicated account manager",
        "24/7 priority support",
        "Custom integrations",
        "Advanced security features",
        "White-label solutions",
        "On-premise deployment options",
        "Custom reporting & analytics",
        "SLA guarantees"
      ]
    }
  ];

  const addOns = [
    { name: "Additional Platform Integration", description: "Connect to one more messaging platform" },
    { name: "Advanced Analytics Dashboard", description: "Detailed insights and performance metrics" },
    { name: "Voice Integration", description: "Add voice capabilities to your chatbot" },
    { name: "Custom AI Training", description: "Train your bot with industry-specific knowledge" },
    { name: "Premium Support", description: "24/7 support with dedicated account manager" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Pricing Plans
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the perfect plan for your business needs. All plans include setup, 
              training, and ongoing support to ensure your success.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-primary shadow-hero' : 'hover:shadow-card'} transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-primary px-4 py-1 rounded-full flex items-center space-x-1">
                      <Star className="h-4 w-4 text-primary-foreground" />
                      <span className="text-sm font-medium text-primary-foreground">Most Popular</span>
                    </div>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl text-foreground">{plan.name}</CardTitle>
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant={plan.popular ? "hero" : "outline"} 
                    className="w-full"
                    size="lg"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Add-on Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enhance your chatbot with additional features and capabilities tailored to your specific needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{addon.name}</h3>
                  <p className="text-sm text-muted-foreground">{addon.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What's included in the setup process?",
                answer: "All plans include complete chatbot design, development, testing, deployment, and initial training. We handle everything from integration to launch."
              },
              {
                question: "Can I upgrade or downgrade my plan?",
                answer: "Yes, you can change your plan at any time. We'll help you transition smoothly and ensure your chatbot continues to perform optimally."
              },
              {
                question: "Do you offer custom pricing for specific needs?",
                answer: "Absolutely! Contact us to discuss your specific requirements. We can create a custom package that fits your exact needs and budget."
              },
              {
                question: "What kind of support do you provide?",
                answer: "All plans include ongoing support, with higher tiers offering priority and 24/7 support. We're here to help you succeed with your chatbot implementation."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and custom quote tailored to your business needs.
            </p>
            <Button variant="hero" size="lg">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;