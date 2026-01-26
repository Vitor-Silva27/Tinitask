import { DataSource } from "typeorm"

export const myDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT!,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ["src/modules/**/entity/*.ts"],
    logging: false,
    synchronize: false,
    migrations: ["src/infra/database/migrations/*.ts"],
    migrationsRun: false,
    migrationsTableName: "migrations",
    migrationsTransactionMode: "all",
})