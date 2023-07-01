import { InferAttributes, InferCreationAttributes } from "sequelize";
import { Column, Model, Table } from "sequelize-typescript";



@Table({ tableName: "users" })
export class User extends Model<InferCreationAttributes<User>, InferAttributes<User>>{

    @Column({ autoIncrement: true, primaryKey: true })
    id: number;

    @Column
    userName: string;

    @Column({ defaultValue: false })
    isDeleted: boolean;

    @Column
    updatedAt: Date;

}