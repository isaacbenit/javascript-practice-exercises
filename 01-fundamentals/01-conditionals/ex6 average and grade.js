//Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.
let david=80,vinoth=77,divya=88,ishinta=95,thomas=68;
let average= (david+vinoth+divya+ishinta+thomas)/5;
console.log('the average is ' + average + ' which make it grade' ) 
if (average<60){console.log('F')}
else if (average<70){console.log('D')}
else if (average<80){console.log('C')}
else if(average<90){console.log('B')}
else{console.log('A')};
