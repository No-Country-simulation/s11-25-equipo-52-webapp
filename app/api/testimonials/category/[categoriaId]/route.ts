import { NextResponse } from "next/server";
// import { auth } from "@/lib/auth";
import { CategoryService } from "@/models/category/categoryService";
import { TestimonialService } from "@/models/testimonial/testimonialService";

const testimonialService = new TestimonialService();
const categoryService = new CategoryService();

// Obtiene testimonios por categoriaId
export async function GET(request: Request, { params }: { params: Promise<{ categoriaId: string }> }) {
    try {
        const { categoriaId } = await params;

        const categoryFounded = await categoryService.getCategoryById(categoriaId);
        if (!categoryFounded) return NextResponse.json({ message: "Category not found" }, { status: 404 });

        const testimonials = await testimonialService.getTestimonialsByCategoriaId(categoriaId);
        return NextResponse.json(testimonials, { status: 200 });
    } catch (error) {
        if (error instanceof Error) return NextResponse.json({ message: error.message }, { status: 400 });

        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
};