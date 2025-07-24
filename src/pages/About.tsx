import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";
import officeBuildingImg from "@/assets/office-building.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every detail matters in real estate. We ensure accuracy in all our dealings."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Clear communication and honest guidance throughout your property journey."
    },
    {
      icon: Heart,
      title: "Dedication",
      description: "Committed to exceeding expectations and building lasting relationships."
    }
  ];

  const achievements = [
    "Licensed real estate professionals",
    "Extensive network of developers",
    "Proven track record of successful transactions",
    "Expert knowledge of Dubai property market"
  ];

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary text-lg font-medium tracking-wider uppercase mb-4">
              About Heyza Properties
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Trusted Real Estate Partner in Dubai
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Located in the heart of Dubai's business district at SABAH 2, Jebel Ali Industrial area, 
              Heyza Properties brings together expertise, innovation, and personalized service to deliver 
              exceptional real estate solutions.
            </p>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="mx-auto mb-3 p-2 bg-primary/10 rounded-full w-fit">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Why Choose Us</h2>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="hero" size="lg">
              Learn More About Us
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={officeBuildingImg} 
                alt="Modern office building" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-card border border-border rounded-xl p-6 shadow-elegant">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;