import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Property Investor",
    rating: 4,
    comment:
      "Pe'colo has been managing my property portfolio for 3 years. Their professionalism and attention to detail is unmatched. Highly recommended!",
  },
  {
    name: "Michael Chen",
    role: "Corporate Client",
    rating: 5,
    comment:
      "The serviced apartment we stayed in was perfect for our corporate relocation. Everything was handled seamlessly from start to finish.",
  },
  {
    name: "Emma Rodriguez",
    role: "Property Owner",
    rating: 4,
    comment:
      "Their rent-to-rent scheme has provided me with guaranteed income for 2 years. Professional service and transparent communication throughout.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-brown mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied
            clients
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <Card key={index} className="p-6 animate-scale-in">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{t.comment}</p>
                <div className="font-semibold text-brand-brown">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
