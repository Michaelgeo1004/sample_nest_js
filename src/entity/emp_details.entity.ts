import { InferAttributes, InferCreationAttributes } from "sequelize";
import {  BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { EETS } from "./emp.entity";

@Table({ tableName: "Emp_Detail" })
export class EDTS extends Model<InferCreationAttributes<EDTS>, InferAttributes<EDTS>>{

    @Column({ autoIncrement: true, primaryKey: true })
    id: number;

    @ForeignKey(() => EETS)

    @Column({allowNull: false, unique: true })
    Emp_id: number;

    @BelongsTo(() => EETS)
    empdetail: EETS;

    @Column
    Age: number;

    @Column
    Location: string;

    @Column
    BloodGroup: string;
    isDeleted: boolean;

}

