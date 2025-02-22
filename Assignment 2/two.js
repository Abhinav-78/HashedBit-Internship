// Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          return "Error: Division by zero";
        }
        result = num1 / num2;
        break;
      default:
        return "Invalid operator. Please use '+', '-', '*', or '/'.";
    }
    return result;
  }
  
  // Examples:
  console.log(calculator(10, 5, '+')); // 15
  console.log(calculator(10, 5, '-')); // 5
  console.log(calculator(10, 5, '*')); // 50
  console.log(calculator(10, 5, '/')); // 2
  