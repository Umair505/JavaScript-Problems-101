let arr = [1, 10, 2, 4, 6, 9, 18, 11, 14, 13, 12, 3, 5, 7, 8, 10, 15, 17, 16, 19, 20];
// arr = arr.sort((a, b) => a - b);
// console.log(arr);
for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
            {
                if(arr[i]>arr[j])
                    {
                        let tmp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = tmp;
                    }
            }
    }
console.log(arr);