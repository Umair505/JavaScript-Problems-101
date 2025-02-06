var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

var unq = numbers.filter((val,index,self) =>{
    return self.indexOf(val) === index;
});
console.log(unq);