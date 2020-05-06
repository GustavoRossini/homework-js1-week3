/*
Sum
If we sum all even numbers between 50 and 100 what is the result?
Build a function, that calculates the sum of all even numbers between a start number and end number
*/
function sumEven (start, end)

{
    var sum = 0;
    
    for(var i = start; i <= end; i++)
    
    {
        if (i % 2 === 0)
    
        {
            sum +=i;
        }
    }
    
    return sum;
}

console.log(sumEven(50,100));
