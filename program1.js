// Write a program to find all pairs of an integer array whose sum is equal to a given number

function getPairCount(arr, n, sum)
{
    let count = 0; 
 
    
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
            if (arr[i] + arr[j] == sum)
                count++;
 
    return count;
}
 

    let arr = [ 1, 5, -7, 1, 5 ];
    let n = arr.length;
    let sum = 6;
    console.log("Count of pairs is " + getPairCount(arr, n, sum));
        
