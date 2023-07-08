import { EDTS } from "src/entity/emp_details.entity";
import { EODE } from "src/entity/emp_off_details.entity";

export class createEmpDetailsDto
{
    id: number;
    empDetail: EDTS[];
    empOff: EODE[];
    emp_code: string;
    empName: string;
    isDeleted: boolean;
    deletedAt: Date;
}