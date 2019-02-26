var average = 0;

function getAverage (a,b,c,d,e){
    average = (a+b+c+d+e)/5;
    console.log(average);
    return average;

}

var myResult = getAverage(7,12,25,40,121);


function logResult(){
    console.log("the average is " + myResult + " inside the function");

}

logResult();
