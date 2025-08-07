import { Heart, Users, CheckCircle } from "lucide-react";

export default function WhyMarriageMatters() {
  return (
    <section className="py-16 md:py-24 ">
      <div className="container px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why We Do This
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding the importance of supporting young couples in their
            journey to marriage
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Rising Costs of Marriage</h3>
            <p className="text-muted-foreground">
              Wedding expenses have skyrocketed, making it difficult for young
              people to afford even basic ceremonies. Many delay marriage for
              years due to financial constraints.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Social Stability</h3>
            <p className="text-muted-foreground">
              Marriage provides emotional stability, companionship, and a
              foundation for building strong communities. Supporting marriage
              strengthens society as a whole.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Rewards of Helping</h3>
            <p className="text-muted-foreground">
              There&apos;s immense spiritual and emotional reward in helping
              others achieve their dreams. Your contribution creates ripple
              effects of happiness and gratitude.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
