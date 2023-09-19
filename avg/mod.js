console.log("module")

function average(arr)
{
    let sum = 0;
    arr.forEach(element =>{
        sum = sum + element;
    })
    return sum/arr.length;
}


module.exports = {
    avg : average
}