import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Clock, Globe } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      details: ["zyaan@speakwise.online", "shahil@speakwise.online"],
      primary: true
    },
    {
      icon: MessageSquare,
      title: "Start a Conversation",
      description: "Let's discuss your project",
      details: ["Free consultation", "Custom quote available"],
      primary: false
    },
    {
      icon: Clock,
      title: "Response Time",
      description: "We respond quickly",
      details: ["Within 24 hours", "Priority support available"],
      primary: false
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients worldwide",
      details: ["Remote collaboration", "Multi-timezone support"],
      primary: false
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
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to transform your business with AI chatbots? Let's discuss your project 
              and create a solution that perfectly fits your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your Company" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project, goals, and how we can help you succeed..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button variant="hero" className="w-full" size="lg">
                    Send Message
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Let's Start Building</h2>
                <p className="text-muted-foreground mb-8">
                  We're here to help you create the perfect AI chatbot solution for your business. 
                  Whether you're just getting started or looking to scale, we have the expertise to guide you.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className={`hover:shadow-card transition-shadow ${info.primary ? 'ring-1 ring-primary/20' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${info.primary ? 'bg-gradient-primary' : 'bg-secondary'}`}>
                          <info.icon className={`h-6 w-6 ${info.primary ? 'text-primary-foreground' : 'text-foreground'}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{info.description}</p>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className={`text-sm ${info.primary ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Contact */}
              <Card className="bg-gradient-hero text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">Need Immediate Assistance?</h3>
                  <p className="text-sm mb-4 opacity-90">
                    For urgent inquiries or to schedule a call, reach out directly:
                  </p>
                  <div className="space-y-2">
                    <a 
                      href="mailto:zyaan@speakwise.online" 
                      className="block text-sm hover:underline"
                    >
                      zyaan@speakwise.online
                    </a>
                    <a 
                      href="mailto:shahil@speakwise.online" 
                      className="block text-sm hover:underline"
                    >
                      shahil@speakwise.online
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Speakwise?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to your success with proven expertise and dedicated support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Our team of AI specialists and developers have years of experience building successful chatbot solutions."
              },
              {
                title: "Proven Process",
                description: "We follow a tested methodology that ensures your chatbot is delivered on time and exceeds expectations."
              },
              {
                title: "Ongoing Support",
                description: "We don't just build and leave. We provide continuous support, optimization, and updates to ensure long-term success."
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;