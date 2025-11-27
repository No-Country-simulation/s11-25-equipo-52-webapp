import prisma from "@/lib/db";
import { TestimonialFullCreateDto } from "./dto/createTestimonialFull";

export class CreateTestimonialFullService {
    async createTestimonialFull(data: TestimonialFullCreateDto) {
        return await prisma.$transaction(async (tx) => {
            const person = await tx.persona.upsert({
                where: { correo: data.person.correo },
                update: {
                    nombreCompleto: data.person.nombreCompleto,
                    fotoUrl: data.person.fotoUrl ?? undefined,
                },
                create: {
                    nombreCompleto: data.person.nombreCompleto,
                    correo: data.person.correo,
                    fotoUrl: data.person.fotoUrl ?? undefined,
                }
            });

            const testimonial = await tx.testimonio.create({
                data: {
                    ...data.testimonial,
                    personaId: person.id,
                },
            });

            return { person, testimonial };
        });
    };
};