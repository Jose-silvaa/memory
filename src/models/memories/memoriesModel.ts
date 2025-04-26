import {z} from "zod";

export const memoriesSchema = z.object({
    user_id: z.number().min(1),
    title: z.string().min(1, "Title is required").max(30),
    location: z.string().min(1, "Location is required").max(40),
    created_at: z.string().min(1, "Date is required").max(20),
    updated_at: z.string().min(1, "Date is required").max(20).optional(),
})