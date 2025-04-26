import {z} from "zod";

export const mediaSchema = z.object({
    memory_id: z.number().min(1),
    image_url: z.string().min(1, "Image is required"),
    audio_url: z.string().min(1, "Audio is required"),
    created_at: z.string().min(15, "Date is required"),
})