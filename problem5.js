// You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

// Input:
// The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

// Output:
// Print the result.

// Sample Input:
// 1000
// 700

// Sample Output:
// 300
var amount = 1000;
var applesPerKg = 220;
var orangesPerKg = 250;
var totalCost = 2*220 + 1.5*250;
console.log(amount - totalCost);
