import { NextResponse } from "next/server";
import { TestimonialService } from "@/models/testimonial/testimonialService";
import { CreateTestimonialFullService } from "@/models/testimonialFull/createTestimonialFullService";
import { TestimonialFullCreateSchema } from "@/models/testimonialFull/dto/createTestimonialFull";

const testimonialService = new TestimonialService();
const testimonialFullService = new CreateTestimonialFullService();

// Crea un nuevo testimonio
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const dto = TestimonialFullCreateSchema.parse(body);
        const newTestimonial = await testimonialFullService.createTestimonialFull(dto);

        return NextResponse.json(newTestimonial, { status: 201 });
    } catch (error) {
        if (error instanceof Error) return NextResponse.json({ message: error.message }, { status: 400 });

        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
};

// Obtiene todos los testimonios
export async function GET() {
    const testimonials = await testimonialService.getAllTestimonials();
    return NextResponse.json(testimonials, { status: 200 });
};