function bigname(arr){
    let bgname = arr[0];
    for(let i=0;i<arr.length;i++)
        {
            let element = arr[i];
            if(element.length>bgname.length)
                {
                    bgname = element;
                }
        }
    return bgname;
}

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
const ans = bigname(friends);
console.log(ans);