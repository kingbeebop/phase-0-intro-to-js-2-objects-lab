// Write your solution in this file!

const employee = {
    name: "test",
    streetAddress: "123 Broadway",
};

function updateEmployeeWithKeyAndValue(obj, key, value){
    return {
        ...obj,
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key){
    const employeeCopy = {...obj};
    delete employeeCopy[key];
    return employeeCopy;
}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
}

