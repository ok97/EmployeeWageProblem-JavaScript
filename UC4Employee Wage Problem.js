const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
/*UC3:- Refactor the Code to write a function to get work hours */
function GetEmployeeWage(empCheck){
    switch(empCheck){
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
    break;
    case IS_PART_TIME:
        return PART_TIME_HOURS;
        default:
            return 0;
    }
}
let empCheck=Math.floor(Math.random()*10)%3;
/*UC4: Calculating Wages for a Month assuming 20 Working Days in a Month */
let NO_OF_WORKING_DAYS=20;
let empHours=0;
let dailyWage=0;
for(let day=0;day<NO_OF_WORKING_DAYS;day++){
    empHours = GetEmployeeWage(empCheck);
    dailyWage += empHours*WAGE_PER_HOUR;

}
console.log("UC4: Total wage is "+dailyWage);