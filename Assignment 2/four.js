//  Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products 
// of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

function sumOfProduct(n1, n2) {
    const str1 = n1.toString();
    const str2 = n2.toString();
    const maxLength = Math.max(str1.length, str2.length);
    const padded1 = str1.padStart(maxLength, '0');
    const padded2 = str2.padStart(maxLength, '0');
    
    let sum = 0;
    for (let i = 0; i < maxLength; i++) {
      sum += parseInt(padded1[i]) * parseInt(padded2[i]);
    }
    
    return sum;
  }
  
  // Examples:
  console.log(sumOfProduct(6, 34));  // (0*3) + (6*4) = 0 + 24 = 24
  console.log(sumOfProduct(123, 456)); // (1*4)+(2*5)+(3*6) = 4+10+18 = 32
  