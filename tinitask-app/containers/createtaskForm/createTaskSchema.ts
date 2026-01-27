import { z } from 'zod';
export const createTaskSchema = z.object({
    title: z.string({ message: 'Title is required' }).min(3, 'Title is too short').max(100, 'Title is too long'),
    description: z.string().optional(),
    dueDate: z.string().optional(),
    priority: z.enum(['low', 'medium', 'high']).optional(),
});

export type CreateTaskSchema = z.infer<typeof createTaskSchema>;