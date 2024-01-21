/* eslint-disable @typescript-eslint/no-explicit-any */
import { IEmployee } from '../interfaces.js';
import * as sqlitetools from './sqlitetools.js';

const employees:any[] = await sqlitetools.getRecordsWithSql('SELECT * FROM Employees');

export const getAllEmployees = (): IEmployee[] => {
	return employees.map(m => {
		const employee: IEmployee = {
			id: m.EmployeeID,
			firstName: m.FirstName,
			lastName: m.LastName, 
			title: m.Title
		}	
		return employee;
	})
}
