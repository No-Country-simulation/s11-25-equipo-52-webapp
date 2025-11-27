import { z } from 'zod';
import { PersonCreateSchema } from '@/models/person/dto/person';
import { TestimonialCreateSchema } from '../../testimonial/dto/testimonial';

export const TestimonialFullCreateSchema = z.object({
    person: PersonCreateSchema,
    testimonial: TestimonialCreateSchema,
});

export type TestimonialFullCreateDto = z.infer<typeof TestimonialFullCreateSchema>;