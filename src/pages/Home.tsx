import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Award, Users, Building, Home as HomeIcon, TrendingUp, Key, Star, Quote, Phone } from "lucide-react";
import dubaiHero from "@/assets/dubai-hero.jpg";
import officeBuildingImg from "@/assets/office-building.jpg";

const Home = () => {
  const featuredServices = [
    {
      icon: HomeIcon,
      title: "Property Sales",
      description: "Premium residential and commercial properties across Dubai's most sought-after locations."
    },
    {
      icon: TrendingUp,
      title: "Investment Consultancy",
      description: "Expert guidance on profitable real estate investments with detailed market analysis."
    },
    {
      icon: Key,
      title: "Property Management",
      description: "Complete property management solutions from maintenance to tenant relations."
    }
  ];

  const testimonials = [
    {
      name: "Ahmed Al-Mansouri",
      role: "Property Investor",
      content: "Heyza Properties helped me find the perfect investment opportunity. Their market knowledge and professional service exceeded my expectations.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "The team at Heyza Properties made buying my first home in Dubai seamless. They guided me through every step with patience and expertise.",
      rating: 5
    },
    {
      name: "Mohamed Hassan",
      role: "Business Owner",
      content: "Excellent service for commercial properties. They found us the perfect office space in record time. Highly recommended!",
      rating: 5
    }
  ];

  const developers = [
    "EMAAR", "DAMAC", "SOBHA", "MERAAS", "NAKHEEL", "DANUBE"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${dubaiHero})` }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-hero" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-block text-primary text-lg font-medium tracking-wider uppercase">
                Premium Real Estate Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Your Dubai
              <span className="block bg-gradient-gold bg-clip-text text-transparent">
                Investment Partner
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Heyza Properties transforms your real estate dreams into reality with expert guidance and exceptional properties across Dubai's most prestigious locations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="xl" className="group">
                Explore Properties
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="elegant" size="xl">
                Schedule Consultation
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">5+</div>
                <div className="text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">500+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">1000+</div>
                <div className="text-muted-foreground">Properties Sold</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary text-lg font-medium tracking-wider uppercase mb-4">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Heyza Properties?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine local expertise with global standards to deliver exceptional real estate solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {featuredServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border/50 bg-card/50 text-center">
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-semibold text-foreground">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={officeBuildingImg} 
                  alt="Modern office building" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              
              {/* Floating Achievement Card */}
              <div className="absolute -bottom-8 -right-8 bg-card border border-primary/20 rounded-xl p-6 shadow-elegant">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">99%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-block text-primary text-lg font-medium tracking-wider uppercase mb-4">
                About Heyza Properties
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Your Trusted Partner in Dubai Real Estate
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Located in SABAH 2, Jebel Ali Industrial, we bring together years of expertise, 
                deep market knowledge, and personalized service to help you achieve your real estate goals in Dubai.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Licensed real estate professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Extensive network of top developers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Proven track record of success</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Expert knowledge of Dubai market</span>
                </div>
              </div>

              <Button variant="elegant" size="lg">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary text-lg font-medium tracking-wider uppercase mb-4">
              Client Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50 bg-card/50 relative">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Partners Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary text-lg font-medium tracking-wider uppercase mb-4">
              Our Partners
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Trusted Developer Network
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work with Dubai's most prestigious developers to bring you the finest properties.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {developers.map((developer, index) => (
              <div key={index} className="text-center">
                <div className="bg-card border border-border/50 rounded-lg p-6 hover:shadow-elegant transition-all duration-300 group">
                  <div className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {developer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Find Your Dream Property?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Contact our expert team today and let us help you navigate Dubai's dynamic real estate market.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="hero" size="xl" className="group">
                <Phone className="h-5 w-5 mr-2" />
                Call +971 565878656
              </Button>
              <Button variant="elegant" size="xl">
                Schedule Consultation
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Available Mon-Sat: 9:00 AM - 7:00 PM | Sunday: By Appointment
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;