function largestNumber(num) {
    const digits = num.toString().split('').map(Number);
    digits.sort((a, b) => b - a);
    const largestNum = parseInt(digits.join(''));
    return largestNum;
}
  
console.log(largestNumber(2183))