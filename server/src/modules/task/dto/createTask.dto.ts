export interface CreateTaskDTO {
    title: string
    description?: string
    dueDate?: Date
    priority?: "low" | "medium" | "high"
}