import axios from "axios";

const EmployeeAPIBaseURL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
    addEmployee(employee) {
        return axios.post(EmployeeAPIBaseURL, employee);
    }
}

export default EmployeeService;