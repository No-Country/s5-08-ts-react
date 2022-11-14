import { Document, FilterQuery, Model, UpdateQuery } from 'mongoose';

export abstract class EntityRepository<T extends Document> {
  constructor(protected readonly entityModel: Model<T>) {}

  find = async (): Promise<T[] | null> => {
    try {
      return await this.entityModel.find();
    } catch (error) {
      return error;
    }
  };

  findOne = async (
    Filter: FilterQuery<T>,
    projection?: Record<string, unknown>,
  ): Promise<T | null> => {
    try {
      return await this.entityModel.findOne(Filter, { __v: 0, ...projection });
    } catch (error) {
      return error;
    }
  };

  create = async (data: unknown): Promise<T> => {
    try {
      const newEntity = new this.entityModel(data);
      return await newEntity.save();
    } catch (error) {
      return error;
    }
  };

  update = async (
    Filter: FilterQuery<T>,
    data: UpdateQuery<unknown>,
  ): Promise<T | null> => {
    try {
      return await this.entityModel.findOneAndUpdate(Filter, data, {
        new: true,
      });
    } catch (error) {
      return error;
    }
  };

  delete = async (Filter: FilterQuery<T>): Promise<boolean> => {
    try {
      const deleteResult = await this.entityModel.deleteMany(Filter);
      return deleteResult.deletedCount >= 1;
    } catch (error) {
      return error;
    }
  };
}
