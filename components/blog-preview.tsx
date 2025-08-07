import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogPreview() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Nikah Journal
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stories, advice, and insights about marriage, community, and making
            a difference
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="overflow-hidden pt-0">
            <div className="aspect-video relative">
              <Image
                src="https://images.unsplash.com/photo-1667210205546-8b21c276a3fe?w=1770&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG11c2xpbSUyMHdlZGRpbmd8ZW58MHx8MHx8fDI%3D"
                alt="Muslim wedding ceremony with traditional decorations"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">
                Planning Your Wedding on a Budget
              </CardTitle>
              <CardDescription>
                Practical tips for creating a beautiful and meaningful wedding
                ceremony without breaking the bank.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" asChild>
                <Link href="#">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden pt-0">
            <div className="aspect-video relative">
              <Image
                src="https://images.unsplash.com/photo-1588117699636-9533b13eb891?w=1770&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxtdXNsaW0lMjB3ZWRkaW5nfGVufDB8fDB8fHwy"
                alt="Muslim community celebrating together at wedding"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">
                The Power of Community Support
              </CardTitle>
              <CardDescription>
                How community involvement in marriages strengthens bonds and
                creates lasting relationships.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" asChild>
                <Link href="#">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden pt-0">
            <div className="aspect-video relative">
              <Image
                src="https://images.unsplash.com/photo-1657034495106-39863987fe1c?w=1770&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxzb21hbGklMjB3ZWRkaW5nfGVufDB8fDB8fHwy"
                alt="Somali wedding celebration with traditional attire"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">
                Success Stories: One Year Later
              </CardTitle>
              <CardDescription>
                Following up with couples we&apos;ve helped and seeing how their
                lives have flourished after marriage.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" asChild>
                <Link href="#">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
