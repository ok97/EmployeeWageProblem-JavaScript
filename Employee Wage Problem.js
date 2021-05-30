/* UC1:- Ability to Check Employee is present or Absent.
         - Use Math.Random to check Absent or Present.
         - Use const which signal that the identifier.
         Won't be reassigned. And use let where the variable may be reassigned. Both have Block Scope. 
         Traditional var has function scope ....
*/

const IS_ABSENT = 0; // Constants

let empCheck=Math.floor(Math.random()*4)%2; // Using random function to identity employee is Present or Not

if (empCheck==IS_ABSENT) // Using selection statement 
{
    console.log("UC1: Employee Absent ");   
}
else
{
    console.log("UC1: Employee Present");
}

/*UC2:- Ability to Calculate Daily Employee Wage based on part time or full time work.
        - Use Math.Random to check No Time, Part Time or Full Time
        - Assume Part Time is 4 Hrs and Full time is 8 Hrs and per hour wage is $20
        - Solve Using Switch Statement */

        const IS_PART_TIME=1;  //Constants
        const IS_FULL_TIME=2;
        const PART_TIME_HOURS=4;
        const FULL_TIME_HOURS=8;
        const WAGE_PER_HOUR=20;
        let empHours=0;
        switch(empCheck){
            case IS_FULL_TIME:
                empHours=FULL_TIME_HOURS;
        break;
        case IS_PART_TIME:
            empHours=PART_TIME_HOURS;
            default:
                break;
        }
        let dailyWage = empHours*WAGE_PER_HOUR;
        console.log("UC2: Wage per day is "+dailyWage);