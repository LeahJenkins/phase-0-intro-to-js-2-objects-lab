const employee = {
name : "Leah",
streetName : "1153 Acorn St"
}

function updateEmployeeWithKeyAndValue(obj, key, value){
 const newObj = {...obj}
 newObj[key] = value
 return newObj
}

console.log(updateEmployeeWithKeyAndValue(myObject, "favoriteColor", "Purple"))

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value
    return obj
}

console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Sam"))

function deleteFromEmployeeByKey(obj, key){
    const newObj = {...obj}
    newObj[key] = undefined
    return newObj
}

console.log(deleteFromEmployeeByKey(myObject, "name"))

function destructivelyDeleteFromEmployeeByKey(obj, key){
    obj[key] = undefined
    return obj
}

console.log(deleteFromEmployeeByKey(employee, "name"))