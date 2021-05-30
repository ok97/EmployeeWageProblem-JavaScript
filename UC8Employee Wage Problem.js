const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
/*UC3:- Refactor the Code to write a function to get work hours */
function GetEmployeeWage(empCheck) 
{
    switch (empCheck) 
    {
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
            break;
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        default:
            return 0;
    }
}
/*UC8:- Store the Day and the Daily Wage along with the Total Wage.
        - Use Map to store Day wise Wage - Compute the total wage using the Map */

const MAX_WORKING_HOURS = 160;
const MAX_WORKING_DAYS = 20;
let totalWorkingDays = 0;
let totalWorkingHours = 0;
let dailyWageArr = new Array();
let totalWage = 0;
let dailyWageMap = new Map();
function calculateWage(emphours)
{
    return emphours * WAGE_PER_HOUR;
}
function GetTotalWages(totalWage, dailyWage) 
{
    return totalWage + dailyWage;
}

while (totalWorkingDays <= MAX_WORKING_DAYS && totalWorkingHours <= MAX_WORKING_HOURS) 
{
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalWorkingHours += GetEmployeeWage(empCheck);
    totalWorkingDays++;
    let emphours = GetEmployeeWage(empCheck);
    let dailyWage = calculateWage(emphours);
    dailyWageArr.push(dailyWage);
    dailyWageMap.set(totalWorkingDays, dailyWage);
}
console.log(dailyWageMap);
let totalEmpWage = Array.from(dailyWageMap.values()).reduce(GetTotalWages, 0);
console.log("UC8: Total employee wage is:- " + totalEmpWage);