import {z} from "zod";
import {Timestamp} from "@firebase/firestore";

export const memoriesSchema = z.object({
    title: z.string().min(1, "Title is required").max(30),
    location: z.string().min(1, "Location is required").max(40),
    created_at: z.instanceof(Timestamp).default(Timestamp.now).optional(),
    updated_at: z.instanceof(Timestamp).optional(),
})