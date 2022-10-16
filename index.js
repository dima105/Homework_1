/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// function should return two numbers
const sum = (a, b) => {
  return a + b;
};

/**
 * @param {number} num
 * @return {boolean}
 */
// function should return if number is even
const isNumberEven = (num) => {
  return num % 2 == 0;
};

/**
 * @param {number} num1
 * @param {number} num2
 * @return {string}
 */
// Write logic to compare two numbers and return which number is greater or they are equal
const findLargestNumber = (num1, num2) => {
  if(num1 > num2){
    return num1 + ' is the largest number';
  }else if(num1 < num2){
    return num2 + ' is the largest number';   
  }else{
    return num1 + ' is equal to ' + num2;
  }
};

/**
 * @param {number} side1
 * @param {number} side2
 * @param {number} side3
 * @return {string}
 */
// function should return type of triangle
const findTriangleType = (side1, side2, side3) => {
  if(side1 == side2 && side2 == side3){
    return 'Equilateral triangle';
  }else if(side1 == side2 || side2 == side3 || side3==side1){
    return 'Isosceles triangle';
  }else {
    return 'Scalene triangle';
  }
};

/**
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
//function should return amount of days in month
const findDaysInMonth = (month, year) => {
  if(1 <= month && month <= 12){
    switch(month){
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return 'The Month has 31 days';

      case 4:
      case 6:
      case 9:
      case 11:  
        return 'The Month has 30 days';

      case 2:
        if(year % 4 != 0){
          return 'The Month has 28 days';
        }else{
          return 'The Month has 29 days';
        }  
      }
  }else{
    return 'Invalid Month of value ' + month;
  }
};

/**
 * @param {number} num1
 * @param {number} num2
 * @param {string} operation
 * @return {number | string}
 */
const calculateResult = (num1, num2, operation) => {
  if(operation == 'add'){
    return num1 + num2;
  }else if(operation == 'subtract'){
    return num1 - num2;
  }else if(operation == 'multiply'){
    return num1 * num2;
  }else if(operation == 'divide'){
    return num1 / num2;
  }else if(operation == 'modulus'){
    return num1 % num2;
  }else {
    return 'someunknownoperation is an invalid operation';
  } 
};

/**
 * @return {string}
 */
// Create multiply table multiplying all digits from 2 t0 9 on 1 - 10 and write result in string
const getMultiplicationTable = () => {
  const firstMultiplier = 10;
  const secondMultiplier = 11;
  let result = '';
 
   for(i = 2; i < firstMultiplier; i++){
      result += ('==== ' + i + ' ====' + ' \n');
     for(j = 1; j < secondMultiplier; j++){
       result += (i + ' * ' + j + ' = ' + i * j + ' \n');
     }
   }
  return result;
};

module.exports = {
  isNumberEven,
  findLargestNumber,
  findTriangleType,
  findDaysInMonth,
  sum,
  calculateResult,
  getMultiplicationTable,
};
