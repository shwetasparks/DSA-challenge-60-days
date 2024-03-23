function Binary(n) {
   let res = "";
   while (n !== 1) {
      if (n % 2 === 1) {
         res += "1";
      } else {
         res += "0";
      }// Use Math.floor() to ensure integer division
   }
   // Reverse the string
   return res.split("").reverse().join("");
}

// Example usage:
console.log(Binary(100)); // Output: "0101"
