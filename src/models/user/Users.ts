import { z } from "zod";

// Define o schema com validação
export const userSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    birthday: z.string().optional(),
});

// Gera o tipo TypeScript a partir do schema
export type User = z.infer<typeof userSchema>;
