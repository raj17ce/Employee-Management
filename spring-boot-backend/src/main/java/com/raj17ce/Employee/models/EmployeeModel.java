package com.raj17ce.Employee.models;

import lombok.Data;

@Data
public class EmployeeModel {
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String department;
    private int salary;
}
