import { Bot, Workflow, BarChart3, MessageSquareText, Cpu, Database } from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Streamline complex business processes with intelligent automation that adapts to your needs.",
  },
  {
    icon: MessageSquareText,
    title: "AI Chatbots & Assistants",
    description: "Deploy conversational AI that handles customer queries 24/7 with human-like understanding.",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Harness machine learning to forecast trends, optimize decisions, and stay ahead of competition.",
  },
  {
    icon: Cpu,
    title: "Custom AI Development",
    description: "Bespoke AI solutions built from the ground up for your unique business challenges.",
  },
  {
    icon: Database,
    title: "Data Integration",
    description: "Seamlessly connect and synchronize data across all your platforms and tools.",
  },
  {
    icon: Bot,
    title: "AI Agent Teams",
    description: "Deploy autonomous AI agents that collaborate to complete complex multi-step tasks.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            End-to-end AI automation solutions designed to transform every aspect of your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-500 hover:glow-primary overflow-hidden"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
