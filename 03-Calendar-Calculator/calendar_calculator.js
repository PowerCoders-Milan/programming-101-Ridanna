//insert your pseudocode below
/*
*create 2 variable
*First variable days of the months and the other is number of the months.
*add the sum of the last months up-to-date. 
*make list of variable to sums which are created
*The variable should be added with sums required
*for every month I define, I will check how many day are there before 
then the month selected will be equal to the sum of earlier months eg. 31 + 28.
*I will also checked the name of the month against the name that i have.
*calculate the asked number by adding the day of the month with the day from the month
print:
*Example
*variable = April
*variable = 4
*days before = 31 + 28 + 31 =
*result = 90 + 4 =94
print:

*/

//Insert your code below
var Months, day, result;


Months = 'April';
day = 4;
if (Months == 'January') {
  result = 0 + day;
}
if (Months == 'February') {
  result = 31 + day;
}
if (Months == 'March') {
  result = 59 + day;
}
if (Months == 'April') {
  result = 90 + day;
}
if (Months == 'May') {
  result = 120 + day;
}
if (Months == 'June') {
  result = 150 + day;
}
if (Months == 'July') {
  result = 180 + day;
}
if (Months == 'August') {
  result = 211 + day;
}
if (Months == 'September') {
  result = 242 + day;
}
if (Months == 'October') {
  result = 272 + day;
}
if (Months == 'November') {
  result = 303 + day;
}
if (Months == 'December') {
  result = 333 + day;
}
window.alert(result);

/*code for password generator*/
/*
create a text with list of random letter for password
create list of random integer number between specific set like 1-20
create list of random special character to be integrated with text
choose random integer number of special character selection
print a collection of mixed password 
/* code below*/
var password;

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}


window.alert(['ftherofkjbdfskjgòuhkjsbdkjbf'.charAt((mathRandomInt(1, 20) - 1)),mathRandomInt(10000, 99999),'.&%*$£!)*&%$/'.charAt((mathRandomInt(1, 10) - 1))].join(''));

password;