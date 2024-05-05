//Variables
//var
//let
//const
//This is a  global Scope where we declare the function outside the block
var gs = ("Hello, Whats Good, I am mathias")
    function gg(){
        console.log("i am buchi "+ gs);
    }
gg();


//We also have Block scope where the sunction cant be called outside the block
//as long as the variable is declared inside the block it cant be used or called outside of it

function example (){
    if(true){
        let bv = "GreatStack";
        console.log(bv);
    }
    // console.log(bv);
}
example();


//Functions
//This is a function fot simple addition
function fn(x,y){
    return x +y;
}
console.log(fn(10,20));

function nn(num){
    console.log(num)
    num--;
    if(num>=10){
        nn(num);
    }
    else{
        setTimeout (function(){
            console.log("Whats good")//we can also apply the anonymous functions in pur day to day activies
        },9000)
       
    }
}
nn(20);

//This is a Recursive Function because it calls it self
function countdown(number){
    console.log(number);
    number+=2;
    if(number<=90){
        countdown(number);//if the number i am going to pass is less than 90 it should keep adding untill it reaches 090
    }
    else{
        console.log("U de crase")
    }
}
countdown(30);

//We Also have recursive Functions 
var fc= function(x,y){
    return x-y;
}
console.log(fc(90,20));//They dont have a name so we run them with the variables that the creat them with


//This is another way of using anonmouse functions
setTimeout (function(){
    console.log("Big head")
} ,3000)


//we also have call back functions

function display(result){
    console.log(result)
}
function bb(x,y,myCallback){
    let sum = x+y;
    myCallback(sum)
}
bb(20,40,display);

//simple functions that checks if the persons age is greater than or less than 19
function age(num){
    if (num<=19){
        console.log("You are still a young boy")
    }
    else{
        console.log("You are welcome")
    }
}
age(40);


function checkAgeandGenderandName(age,gender,name){
    if(age<=19 || gender==='female'){
        console.log('You are to young and we dont acceept females')
    }
    else{
        console.log('You are welcome '+ name);
    }
}
checkAgeandGenderandName(20,"male","Johnson");// if the parameter is a string dont forget to add double qoutes 
