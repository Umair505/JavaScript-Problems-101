// 2-> function name PandaCost: 3 parameter needed.PandaCost
// 1 singara price = 7 Taka
// 1 samusa = 10 taka
// 1 Jilapi = 15 taka
// Now calculate how much total cost if a man want to buy different quantity how much he should pay
function PandaCost(singara,samusa,jilapi)
{
    if(typeof singara !== 'number' || typeof samusa !== 'number' ||typeof jilapi !=='number' )
        return "Please Provide an integer numbers"
    else if(singara <=0 || samusa <=0 || jilapi <=0)
    {
        return "Please provide a valid number"
    }
    var totalCost = singara*7 + samusa*10 + jilapi * 15;
    return totalCost;
}

console.log(PandaCost(30,20,20));
console.log(PandaCost(1,2,'1'));
console.log(PandaCost(1,1,-1));