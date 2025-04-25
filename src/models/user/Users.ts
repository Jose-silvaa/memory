import { z } from "zod";

// Define o schema com validação
export const userSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    profilePhotoUrl: z.string().optional(),
    createdAt: z.string().default(()=> new Date().toISOString()).optional(),
    lastLogin: z.string().optional(),
});

// Gera o tipo TypeScript a partir do schema
export type User = z.infer<typeof userSchema>;


