import { InferAttributes, InferCreationAttributes } from "sequelize";
import { Column, Model, Table } from "sequelize-typescript";

@Table({ tableName: "Employees" })
export class EETS extends Model<InferCreationAttributes<EETS>, InferAttributes<EETS>>{
   

   @Column({ autoIncrement: true, primaryKey: true })
   id: number;

   @Column
   Emp_id: string;

   @Column
   Emp_Name: string;
    isDeleted: boolean;
}