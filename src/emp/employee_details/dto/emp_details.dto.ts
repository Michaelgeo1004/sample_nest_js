import { EETS } from "src/entity/emp.entity";

export class Emp_DetailsDto {
    id: number;
    emp_code: string;
    empDetail: EETS;
    age: number;
    location: string;
    bloodGroup: string;
    isDeleted: boolean;
    deletedAt:Date;
}