
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">Now Powered by GPT-4 & Claude</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight animate-slide-up">
            Transform Your Business With{" "}
            <span className="text-gradient">AI Automation</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
            We build intelligent automation systems that eliminate manual work, 
            reduce costs by 60%, and scale your operations effortlessly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="https://tally.so/r/xXj5Gr" target="_blank" rel="noopener noreferrer">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl">
              <a href="https://tally.so/r/xXj5Gr" target="_blank" rel="noopener noreferrer">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-muted-foreground text-sm mb-6">Trusted* by innovative companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <span className="text-2xl font-bold text-foreground">TechFlow*</span>
              <span className="text-2xl font-bold text-foreground">DataSync*</span>
              <span className="text-2xl font-bold text-foreground">CloudNine*</span>
              <span className="text-2xl font-bold text-foreground">Innovate*</span>
              <span className="text-2xl font-bold text-foreground">NextGen*</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
