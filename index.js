// Trying the condition statements

// if and else conditions 

var mark=40;
var grade='';

if (mark>35){
    grade='D';
    console.log('Your grade is :',grade,"\nYou have just passed..!")
}
if (mark>60){
    grade='C';
    console.log('Your grade is :',grade,"\nTry More..!")
}
if (mark>70){
    grade='B';
    console.log('Your grade is :',grade,"\nGood..!")
}
if (mark>80){
    grade='A';
    console.log('Your grade is :',grade,"\nVery Good..!")
}
if (mark>90){
    grade='O';
    console.log('Your grade is :',grade,"\nOutstanding Performance..!")
}
else{
    grade='F';
    console.log('Your grade is :',grade,"\nYou have failed..!")
}
