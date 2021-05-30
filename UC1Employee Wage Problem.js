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