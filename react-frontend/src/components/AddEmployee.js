import React, { useState } from 'react';
import EmployeeService from '../services/EmployeeService';

function AddEmployee() {

    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        department: "",
        salary: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({ ...employee, [e.target.name]: value });
    }

    const handleAdd = (e) => {
        e.preventDefault();

        const employeeService = new EmployeeService();
        employeeService.addEmployee(employee).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }

    const handleClear = () => {
        setEmployee({
            id: "",
            firstName: "",
            lastName: "",
            email: "",
            department: "",
            salary: ""
        });
    }

    return (
        <div className="flex mx-auto max-w-2xl border-2 border-neutral-800 rounded shadow mt-10">
            <div className='px-4 py-4 mx-auto'>
                <div className="my-6">
                    <h1 className="font-bold text-2xl text-center">Add New Employee</h1>
                </div>
                <div className="mt-6 p-8 text-center">
                    <input type="text" name="firstName" value={employee.firstName} placeholder="First Name" className="border-2 border-neutral-900 rounded py-2 px-4 w-96 my-2" onChange={(e) => handleChange(e)} />
                    <input type="text" name="lastName" value={employee.lastName} placeholder="Last Name" className="border-2 border-neutral-900 rounded py-2 px-4 w-96 my-2" onChange={(e) => handleChange(e)} />
                    <input type="email" name="email" value={employee.email} placeholder="Email" className="border-2 border-neutral-900 rounded py-2 px-4 w-96 my-2" onChange={(e) => handleChange(e)} />
                    <input type="text" name="department" value={employee.department} placeholder="Department" className="border-2 border-neutral-900 rounded py-2 px-4 w-96 my-2" onChange={(e) => handleChange(e)} />
                    <input type="text" name="salary" value={employee.salary} placeholder="Salary" className="block border-2 border-neutral-900 rounded py-2 px-4 w-96 my-2 mx-auto" onChange={(e) => handleChange(e)} />
                    <button className='mx-4 rounded text-white font-bold bg-green-600 hover:bg-green-900 my-6 py-1 px-4 text-xl' onClick={handleAdd}>
                        Add
                    </button>
                    <button className='mx-4 rounded text-white font-bold bg-red-600 hover:bg-red-900 my-6 py-1 px-4 text-xl' onClick={handleClear}>
                        Clear
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee;