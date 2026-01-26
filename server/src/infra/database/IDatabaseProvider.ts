import { EntityTarget, ObjectLiteral, Repository } from "typeorm";

export interface IDatabaseProvider {
    getRepository<T extends ObjectLiteral>(entity: EntityTarget<T>): Repository<T>;
}