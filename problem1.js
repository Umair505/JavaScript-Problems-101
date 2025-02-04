function largestNumber(array){
    if(!Array.isArray(array)){
        return "Provide an array"
    }
    let max = array[0];
    for(let i = 0;i<array.length;i++)
    {
        if(typeof array[i]!== "number" )
            return "All values should be number"
       
        if(array[i]>max)
        {
            max = array[i];
        }
    }


    return max;
}

var arr = [10,20,30,40,1,2];

console.log(largestNumber(arr));
