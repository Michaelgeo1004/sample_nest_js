import { EETS } from "src/entity/emp.entity";

export class createEmpDetailsDto
{    id: number;
    emp_code: string;
    empDetail: EETS;
    age: number;
    location: string;
    bloodGroup: string;
    isDeleted: boolean;
    deletedAt:Date;
}