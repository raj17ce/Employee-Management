package com.raj17ce.Employee.controllers;

import com.raj17ce.Employee.models.EmployeeModel;
import com.raj17ce.Employee.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping("/employees")
    public EmployeeModel createEmployee(@RequestBody EmployeeModel employee) {
        return employeeService.createEmployee(employee);
    }
}
