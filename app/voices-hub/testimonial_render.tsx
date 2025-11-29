// components/testimonial_render.tsx
import { TestimonialVisitor } from "@/components/ui/testimonial/Visitor";

export function TestimonialRender({ testimonials }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
      {testimonials.map((item, i) => (
        <TestimonialVisitor
          key={i}
          author={item.author}
          role={item.role}
          testimonial={item.testimonial}
        />
      ))}
    </div>
  );
}