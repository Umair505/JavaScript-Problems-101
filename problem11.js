const x = 670; 

if (x >= 0 && x < 33) {
  console.log("F");
} 
else if (x >= 33 && x < 50) {
  console.log("C");
} 
else if (x >= 50 && x < 60) {
  console.log("B");
} 
else if (x >= 60 && x < 70) {
  console.log("A-");
} 
else if (x >= 70 && x < 80) {
  console.log("A");
} 
else if (x >= 80 && x <= 100) {
  console.log("A+");
} 
else {
  console.log("Invalid Number");
}
