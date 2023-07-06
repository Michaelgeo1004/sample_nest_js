import { InferAttributes, InferCreationAttributes } from "sequelize";
import { Column, Model, Table } from "sequelize-typescript";

@Table({ tableName: "Emp_Detail" })
export class EDTS extends Model<InferCreationAttributes<EDTS>, InferAttributes<EDTS>>{

    @Column({ autoIncrement: true, primaryKey: true })
    id: number;

    @Column
    Emp_id: number;


    @Column
    Emp_Name: String;


    @Column
    Age: number;

    @Column
    Location: string;

    @Column
    BloodGroup: string;
    isDeleted: boolean;

}

