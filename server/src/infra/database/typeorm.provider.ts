import { myDataSource } from './dataSource';
import { IDatabaseProvider } from './IDatabaseProvider';
import { injectable } from 'inversify';
import { DataSource, EntityTarget, ObjectLiteral, Repository } from 'typeorm';

@injectable()
export class TypeormProvider implements IDatabaseProvider {
  private getDataSource(): DataSource {
    return myDataSource;
  }

  public getRepository<T extends ObjectLiteral>(entity: EntityTarget<T>): Repository<T> {
    const dataSource = this.getDataSource();
    return dataSource.getRepository<T>(entity);
  }
}