const checkBigName = (arr)=>{
    let bigName = arr[0];
    for(let i =0;i<arr.length;i++)
        {
            if(arr[i].length > bigName.length)
                {
                    bigName = arr[i];
                }
        }
        return bigName;
}

const friends = ["Rahim","Karim","Salam","Barkat","moinul","Bangladesh"];
const Bigname = checkBigName(friends);
console.log(Bigname);