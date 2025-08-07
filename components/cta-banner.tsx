import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container px-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">
            Be the reason someone builds a family.
          </h2>
          <p className="text-xl md:text-2xl opacity-90">Just $5/month.</p>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Your small monthly contribution can help a young couple start their
            married life with dignity and joy. Join thousands of others making a
            difference.
          </p>
          <Button size="lg" variant="secondary" className="px-8">
            Join the Community
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
