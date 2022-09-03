// Write your solution in this file!
let employee = {
    name: `Diego`,
    streetAddress: `1111 Main Ln`,
}


function updateEmployeeWithKeyAndValue (employee, key, value) {
    return {
        ...employee,
        [key]: value,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    let employeeClone = {...employee};
    delete employeeClone[key];
    return employeeClone
}

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee
}