import { Bot, Zap, TrendingUp, Clock, Shield, Users } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save 40+ Hours Weekly",
    description: "Automate repetitive tasks and let your team focus on high-value work.",
  },
  {
    icon: TrendingUp,
    title: "10x Productivity",
    description: "Intelligent workflows that scale with your business needs effortlessly.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance with industry standards.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Real-time processing and instant responses for seamless operations.",
  },
  {
    icon: Bot,
    title: "Smart AI Agents",
    description: "Custom-trained AI Automations that understands your unique business context.",
  },
  {
    icon: Users,
    title: "24/7 Availability",
    description: "Your AI workforce never sleeps, ensuring round-the-clock productivity.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient">NexauraAI</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We deliver measurable results that transform how your business operates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-500 hover:glow-primary"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
