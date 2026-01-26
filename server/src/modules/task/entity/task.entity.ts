import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm"

export enum TaskPriority {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high",
}

@Entity("tasks")
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id!: string

    @Column({ type: "varchar", length: 255 })
    public title!: string

    @Column({ type: "text", nullable: true })
    public description?: string

    @Column({ type: "boolean", default: false })
    public isCompleted!: boolean

    @Column({ type: "timestamp", nullable: true })
    public dueDate?: Date

    @Column({ type: "enum", enum: TaskPriority, default: TaskPriority.LOW })
    public priority!: TaskPriority

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    public createdAt!: Date

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    public updatedAt!: Date
}