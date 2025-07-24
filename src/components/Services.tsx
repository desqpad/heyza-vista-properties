import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, TrendingUp, Key, FileText, Calculator, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Property Sales",
      description: "Comprehensive sales services for residential and commercial properties across Dubai's prime locations."
    },
    {
      icon: TrendingUp,
      title: "Investment Consultancy",
      description: "Expert guidance on real estate investments with market analysis and ROI projections."
    },
    {
      icon: Key,
      title: "Property Management",
      description: "Full-service property management including maintenance, tenant relations, and rental optimization."
    },
    {
      icon: FileText,
      title: "Legal Documentation",
      description: "Complete assistance with legal paperwork, permits, and regulatory compliance for property transactions."
    },
    {
      icon: Calculator,
      title: "Market Valuation",
      description: "Accurate property valuations based on current market trends and comparable sales data."
    },
    {
      icon: Shield,
      title: "After-Sales Support",
      description: "Comprehensive support services post-purchase including maintenance coordination and resale assistance."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-lg font-medium tracking-wider uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Real Estate Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From property acquisition to investment management, we provide end-to-end real estate services tailored to your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border/50 bg-card/50">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;