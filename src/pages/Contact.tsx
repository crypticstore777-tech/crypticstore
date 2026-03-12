import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, ExternalLink, Send, Clock } from "lucide-react";
import { Helmet } from "react-helmet";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import logoDark from "@/assets/mc-mysterious-logo-dark.jpeg";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("contact-form", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Cryptic Store",
    "description": "Contact Sacramento's Cryptic Store boutique & Mysterious Enterprise. DJ services, apparel orders, spiritual consultations in Sacramento CA.",
    "url": "https://crypticstore.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Cryptic Store",
      "alternateName": "Mysterious Enterprise",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": "English"
      }
    }
  };
  return <>
      <Helmet>
        <title>Contact Sacramento DJ & Boutique | Cryptic Store & Mysterious Enterprise</title>
        <meta name="description" content="Contact Cryptic Store, Sacramento's boutique & entertainment company. Book Sacramento DJ services, shop apparel, spiritual consultations. Sacramento Kings events welcome." />
        <meta name="keywords" content="contact Cryptic Store Sacramento, Sacramento DJ booking, Sacramento boutique contact, Mysterious Enterprise Sacramento, Sacramento entertainment booking, Sacramento artist contact" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://crypticstore.com/contact" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Cryptic Store & Mysterious Enterprise" />
        <meta property="og:description" content="Get in touch for orders, DJ services, spiritual consultations, and more." />
        <meta property="og:url" content="https://crypticstore.com/contact" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          <div className="container mx-auto relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-4 text-foreground">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Contact Cryptic Store & Mysterious Enterprise for orders, DJ bookings, spiritual consultations, or any questions
            </p>
            <img
              src={logoDark}
              alt="MC Myster?ous dark hexagon brand mark"
              className="w-44 h-44 mx-auto rounded-full border-2 border-primary/30 shadow-[0_0_20px_hsla(50,100%,50%,0.3)] object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>Fill out the form and we'll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" value={formData.name} onChange={e => setFormData({
                      ...formData,
                      name: e.target.value
                    })} required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" value={formData.email} onChange={e => setFormData({
                      ...formData,
                      email: e.target.value
                    })} required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select value={formData.subject} onValueChange={value => setFormData({
                      ...formData,
                      subject: value
                    })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="order">Order Support</SelectItem>
                          <SelectItem value="dj">DJ Services Booking</SelectItem>
                          <SelectItem value="spiritual">Spiritual Consultation</SelectItem>
                          <SelectItem value="collaboration">Collaboration / Partnership</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Tell us how we can help..." rows={5} value={formData.message} onChange={e => setFormData({
                      ...formData,
                      message: e.target.value
                    })} required />
                    </div>
                    
                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Mail className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">DJ@mysteriousenterprise.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">United States</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Response Time</p>
                        <p className="text-muted-foreground">Within 24-48 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
                  <CardHeader>
                    <CardTitle className="text-xl">Mysterious Enterprise</CardTitle>
                    <CardDescription>Visit our main business site for more services</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <a href="https://www.MysteriousEnterprise.com" target="_blank" rel="noopener noreferrer">
                        MysteriousEnterprise.com
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Quick Links</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button asChild variant="ghost" className="w-full justify-start">
                      <a href="/dj-services">🎧 DJ Services & Bookings</a>
                    </Button>
                    <Button asChild variant="ghost" className="w-full justify-start">
                      <a href="/youknowwedomagic">✨ Spiritual Services</a>
                    </Button>
                    <Button asChild variant="ghost" className="w-full justify-start">
                      <a href="/collections/dare2wear">👕 Shop Dare2Wear</a>
                    </Button>
                    <Button asChild variant="ghost" className="w-full justify-start">
                      <a href="/blog">📖 Read Our Blog</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Footer */}
        <section className="py-8 bg-gradient-to-r from-background via-primary/5 to-background border-t border-primary/20">
          <div className="container mx-auto text-center">
            <p className="text-primary font-bold tracking-wider">#Youknowwedomagic</p>
          </div>
        </section>
      </div>
    </>;
};
export default Contact;