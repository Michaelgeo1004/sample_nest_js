import { InferAttributes, InferCreationAttributes } from "sequelize";
import {  BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { EETS } from "./emp.entity";

@Table({ tableName: "Emp_Detail" })
export class EDTS extends Model<InferCreationAttributes<EDTS>, InferAttributes<EDTS>>{

    @Column({ autoIncrement: true, primaryKey: true })
    id: number;

    @ForeignKey(()=>EETS)
    emp_code: string;

    @BelongsTo(() => EETS)
    empDetail: EETS;

    @Column
    age: number;

    @Column
    location: string;

    @Column
    bloodGroup: string;

    @Column({defaultValue:false})
    isDeleted: boolean;

    @Column
    deletedAt: Date;

}

