const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
/*UC3:- Refactor the Code to write a function to get work hours */
function GetEmployeeWage(empCheck)
{
    switch(empCheck)
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
/* UC7:- Use the Daily Wage Array perform following operations using Array Helper Functions.
         a. Calc total Wage using Array forEach or reduce method
         b. Show the Day along with Daily Wage using Array map helper function
         c. Show Days when Full time wage of 160 were earned using filter function
         d. Find the first occurrence when Full Time Wage was earned using find function
         e. Check if Every Element of Full Time Wage is truly holding Full time wage
         f. Check if there is any Part Time Wage
         g. Find the number of days the Employee Worked
*/
/*UC7-A:- Calculating total Wage using Array forEach or reduce method */

const MAX_WORKING_HOURS=160;
const MAX_WORKING_DAYS=20;
let totalWorkingDays=0;
let totalWorkingHours=0;
let dailyWageArr=new Array();
let totalWage=0;
function calculateWage(emphours)
{
    return emphours*WAGE_PER_HOUR;
}
function sum(dailyWage)
{
    totalWage+=dailyWage;
}
function totalWages(totalWage,dailyWage)
{
    return totalWage+dailyWage;
}

while(totalWorkingDays<=MAX_WORKING_DAYS && totalWorkingHours<=MAX_WORKING_HOURS)
{
    let empCheck=Math.floor(Math.random()*10)%3;
    totalWorkingHours+=GetEmployeeWage(empCheck);
    totalWorkingDays++;
    let emphours = GetEmployeeWage(empCheck);
    let dailyWage= calculateWage(emphours);
    dailyWageArr.push(dailyWage);
}
dailyWageArr.forEach(sum);
console.log("UC7-A: Total wage using foreach "+totalWage);
console.log("UC7-A: Total wage using reduce "+dailyWageArr.reduce(totalWages,0));

/*UC7-B:- Show the Day along with Daily Wage using Array map helper function */

let dailyCount=0;
function dailyWageCount(wage)
{
dailyCount++;
return dailyCount+"="+wage;
}
let dailyWageMap = dailyWageArr.map(dailyWageCount);
console.log("UC7-B: Daily wage map is:- "+ dailyWageMap);

/*UC7-C:- Show Days when Full time wage of 160 were earned using filter function */

function fullTimeWage(wage)
{
    return wage.includes("160");
}
let fulldayWage = dailyWageMap.filter(fullTimeWage);
console.log("UC7-C: Wage map when full time salary is earned:- "+fulldayWage);

/*UC7-D:- Find the first occurrence when Full Time Wage was earned using find function */

let firstOccurrence = dailyWageMap.find(fullTimeWage);
console.log("UC7-D: First occurence of full time wage:-  "+firstOccurrence);

/*UC7-E:- Check if Every Element of Full Time Wage is truly holding Full time wage */

console.log("UC7-E: Checking whether all elemets holding full time wage:- "+fulldayWage.every(fullTimeWage));

/*UC7-F:- Check if there is any Part Time Wage */

function partTimeWage(wage){
    return wage.includes("80");
}
console.log("UC7-F: Checking for part time wage:- "+dailyWageMap.some(partTimeWage));

/*UC7-G:- Find the number of days the Employee Worked */

function totalDaysWorked(wage,days)
{
    if (wage>0) days++;
    return days;
}
console.log("UC7-G: Total days worked:- "+dailyWageArr.reduce(totalDaysWorked,0));

