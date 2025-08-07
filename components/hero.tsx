import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant="secondary" className="px-4 py-2">
            Non-Profit Initiative
          </Badge>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Help Your Brother Get Married With Just{" "}
              <span className="text-primary">$5 a Month</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              NikahAid is a non-profit that helps financially struggling youth
              start their married life with dignity. Your small monthly
              contribution can make a lifelong impact.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="#">Join the Community</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#">Request Help</Link>
            </Button>
          </div>

          <div className="mt-12 w-full max-w-4xl">
            <Image
              src="https://images.unsplash.com/photo-1672701896496-ebe86f095e4c?w=1770&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG11c2xpbSUyMHdlZGRpbmd8ZW58MHx8MHx8fDI%3D"
              alt="Muslim couple's hands with henna, wedding rings and flowers during nikah ceremony"
              width={1000}
              height={400}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
