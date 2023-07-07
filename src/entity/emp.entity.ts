import { InferAttributes, InferCreationAttributes } from "sequelize";
import { Column, HasMany, Model, Table } from "sequelize-typescript";
import { EDTS } from "./emp_details.entity";

@Table({ tableName: "Employees" })
export class EETS extends Model<InferCreationAttributes<EETS>, InferAttributes<EETS>>{


    @Column({ autoIncrement: true, primaryKey: true })
    id: number;

    @HasMany(() => EDTS)
    emp:EDTS[];

    @Column({ primaryKey: true, allowNull: false, unique: true })
    Emp_id: number;

    @Column
    Emp_Name: string;
    isDeleted: boolean;
}