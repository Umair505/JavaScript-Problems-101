function PicnicBudget(totalPeople){
    var totalCost;
    if(totalPeople <=100 )
    {
        totalCost = totalPeople * 5000;
    }
    else if(totalPeople > 100 && totalPeople <= 200)
    {
        totalCost = (100*5000) + (totalPeople - 100)*4000;
    }
    else{
        totalCost = (100*5000) + (100*4000) + (totalPeople - 200)*3000;
    }
    return totalCost;
}

console.log(PicnicBudget(100));
console.log(PicnicBudget(102));
console.log(PicnicBudget(202));