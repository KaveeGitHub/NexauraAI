import { MessageSquare, Settings, Rocket, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery Call",
    description: "We analyze your current workflows and identify automation opportunities tailored to your business.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Custom Solution Design",
    description: "Our experts design AI solutions that integrate seamlessly with your existing tech stack.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Implementation",
    description: "We deploy and configure your AI automation systems with minimal disruption to operations.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Optimization & Support",
    description: "Continuous monitoring and optimization to ensure peak performance and ROI.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven methodology that delivers results in weeks, not months
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="relative group"
              >
                <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:glow-primary h-full">
                  {/* Step number */}
                  <div className="absolute -top-4 left-8 bg-gradient-primary text-primary-foreground font-bold text-sm px-4 py-1 rounded-full">
                    {step.step}
                  </div>

                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mt-2 group-hover:bg-primary/20 transition-colors duration-300">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
