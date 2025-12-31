import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to <span className="text-gradient">Automate</span> Your Business?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Join 500+ companies that have transformed their operations with our AI automation solutions. 
            Get started with a consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="https://tally.so/r/xXj5Gr" target="_blank" rel="noopener noreferrer">
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl">
              View Case Studies
            </Button>
          </div>

          <p className="mt-8 text-muted-foreground text-sm">
            No commitment required · ROI analysis included
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
