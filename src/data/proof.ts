// Customer voices and case studies. Only real, approved statements belong here.
// As long as the lists are empty, the quote section and the case study page stay hidden.
export interface Testimonial { quote: string; name: string; role: string; initials: string; photo?: string }
export interface CaseStudy { slug: string; title: string; practice: string; summary: string }

export const TESTIMONIALS: Testimonial[] = [];
export const CASE_STUDIES: CaseStudy[] = [];
