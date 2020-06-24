// // chapter 21-25

// // task1
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your lastname");
// var fullName = firstName + " " +  lastName;
// alert("Welcome "+fullName);


// // task2
// var favMobile = prompt("Write your favourite mobile model");
// var mobileLength = favMobile.length;
// document.write("My favourite phone is: "+favMobile+"<br>");
// document.write("Length of string: "+mobileLength+"<br>");_

// // task3

// var nationality = "Pakistani";
// var nInd = nationality.indexOf('n');
// document.write("String: "+nationality+"<br>");
// document.write("index of 'n': "+nInd);

// // task4

// var greet = "Hello world";
// var lInd = greet.lastIndexOf('l');
// document.write("string: "+greet+"<br>");
// document.write("last index of 'l': "+lInd);


// // task5
// var nationality = "Pakistani";
// var thirdInd = nationality.charAt(3);
// document.write("string: "+nationality+"<br>");
// document.write("character at index 3: "+thirdInd);


// // task6

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your lastname");
// var fullName = firstName.concat(" "+lastName);
// alert("Welcome "+fullName);


// // task7

// var city = "Hyderabad";
// var afterRep = city.replace("Hyder","Islam");
// document.write("city: "+city+"<br>");
// document.write("after replacement: "+afterRep);

// // task8

// var message = "Ali and Sami are best friends.They play cricket and football together.";
// var repAnd = message.replaceAll("and","&");

// document.write("message: "+message+"<br>");
// document.write("After replacement: "+repAnd);

// // task9

// var str = "472";
// document.write("value: "+str+"<br>");
// document.write("type: "+typeof(str)+"<br>");

// var changeType = Number(str);
// document.write("value: "+str+"<br>");
// document.write("type: "+typeof(changeType));


// // task10

// var usrInp = prompt("enter your fav colour");
// var userInp_upper = usrInp.toLocaleUpperCase();
// document.write("user input: "+usrInp+"<br>");
// document.write("upper case: "+userInp_upper);


// // task11
// var animal = prompt("enter animal name");
// var firstLet = animal.slice(0,1);
// var firstLetUpp = firstLet.toLocaleUpperCase();
// var remLet = animal.slice(1);
// var titleCase = firstLetUpp + remLet;
// document.write("user input: "+animal+"<br>");
// document.write("title case: "+titleCase);



// // task12
// var num = 35.36;
// var res = num.toString().replace(".","");
// document.write("Numbre: "+num+"<br>");
// document.write("Result: "+res);


// task13

// var res = String.fromCharCode(33,44,46,64);
// var name = "adnan!";

// for(var i=0; i<res.length; i++){
//     if(res[i] == name){
//         alert("wrong input");
//         break;
//     }
//     else{
//         alert("correct");
//         break;
//     }
    

// }


// // task14

// var bak = prompt("Welcome to ABC bakery.What do you want to order sir/ma'am?");
// var bakLow = bak.toLowerCase();
// var bakery = ["cake","apple pie","cookie","chips","patties"];

// for(var i=0; i<bakery.length; i++){
//     if(bakLow == bakery[i]){
//         alert(bakLow+" is available at index "+i+" in our bakery");
//         break;
//     }
//     else{
//         alert("We are sorry."+bakLow+" is not available in our bakery");
//         break;
//     }
// }


// // task15

// var pass = prompt("Enter your password");
// var firstLet = pass.slice(0,1);
// var lowerLetter = /[a-z]/g;
// var upperLetter = /[A-Z]/g;
// var number = /[0-9]/g;

// if(pass.match(lowerLetter)){
//     if(pass.match(upperLetter)){
//         if(pass.match(number)){
//             if(pass.length >= 6){
//                 if(isNaN(parseInt(pass[0]))){
//                     alert("correct password")
//                 }
//                 else{
//                     alert("Entered password: "+pass+"\r\n"+
//                     "first letter should not be a number"+"\r\n"+
//                     "Please enter a valid password");

//                 }
                
//             }
//             else{
//                 alert("Entered password: "+pass+"\r\n"+
//                 "Password atleat 6 characters long"+"\r\n"+
//                 "Please enter a valid password");
//             }
//         }
//         else{
//             alert("Entered password: "+pass+"\r\n"+
//             "Password should contain number"+"\r\n"+
//             "Please enter a valid password");
//         }
        
//     }
//     else{
//         alert("Entered password: "+pass+"\r\n"+
//         "Password should contain upper case"+"\r\n"+
//         "Please enter a valid password");
//     }
       
// }
// else{
//     alert("Entered password: "+pass+"\r\n"+
//     "Password should contain lower case"+"\r\n"+
//     "Please enter a valid password");
// }
    

// // task16

// var university = "university of karachi";
// var spl = university.split("");

// for(var i = 0; i < spl.length; i++){
//     document.write(spl[i]+"<br>");
// }

// // task17

// var usrIn = prompt("enter your country");
// var lastChr = usrIn.charAt(usrIn.length-1);
// alert("user input: "+usrIn+"\r\n"+"Last character of input: "+lastChr);


// // task18

// var text = "the quick brown fox jumps over the lazy dog";
// var countThe = (text.match(/the/g)).length;
// document.write("Text: "+"the quick brown fox jumps over the lazy dog"+"<br>");
// document.write("There are "+countThe+" occurrence(s) of word 'the'")


// // chapter 26-30

// // task1
// var num = prompt("enter positive integer");
// document.write("number: "+num+"<br>");
// document.write("round of value: "+Math.round(num)+"<br>")
// document.write("floor value: "+Math.floor(num)+"<br>");
// document.write("ceil value: "+Math.ceil(num));

// // task2

// var num = prompt("enter negative integer");
// document.write("number: "+num+"<br>");
// document.write("round of value: "+Math.round(num)+"<br>")
// document.write("floor value: "+Math.floor(num)+"<br>");
// document.write("ceil value: "+Math.ceil(num));


// // task3
// var num = prompt("enter number");
// var numabs = Math.abs(num);
// document.write("The absolute value of "+num+" is "+numabs);

// // task4

// var ranNum = Math.random();
// var ranSix = (ranNum * 6) + 1;
// var ranSixFlr = Math.floor(ranSix);
// document.write("random dice value: "+ranSixFlr);


// // task5

// var coin = Math.random();
// var headTail = (coin * 2) + 1;
// var headTailFlr = Math.floor(headTail);

// if(headTailFlr == 2){
//     document.write(headTailFlr+"<br>")
//     document.write("random coin value: Heads")
// }
// else{
//     document.write(headTailFlr+"<br>")
//     document.write("random coin value: Tails")

// }


// // task6

// var number = Math.random();
// var numberHund = (number * 100) + 1;
// var numberHundFlr = Math.floor(numberHund);

// document.write("random number between 1 and 100: "+numberHundFlr);


// // task7

// var weight = prompt("enter your weight in kilograms");
// var weightPar = parseInt(weight) + 8.3;

// document.write("The weight of user is "+weightPar+" kilograms");



// // task8

// var secNum = Math.random();
// var secOne_Ten = (secNum * 10) + 1;
// var secOne_Ten_Flr = Math.floor(secOne_Ten);
// alert(secOne_Ten_Flr)
// var user = prompt("Enter a number between 1-10");
// if(user == secOne_Ten_Flr){
//     alert("congratulation");
// }
// else{
//     alert("Try again");
// }


// //chapter 31-34

// // task1
// var rn = new Date();
// document.write(rn);

// // task2

// var rn = new Date();
// var month = ["january","february","march","april","may","june","july","august","september","october","november","december"];
// var monthInWord = month[rn.getMonth()];
// document.write("current month: "+monthInWord);


// // task3

// var rn = new Date();
// var days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
// var dayInWord = days[rn.getDay()];
// var dayThree = dayInWord.slice(0,3);
// alert("Today is: "+dayThree);

// // task4

// var rn = new Date();
// var days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
// var dayInWord = days[rn.getDay()];

// if(dayInWord == "sunday" || dayInWord == "saturday"){
//     alert("It's fun day");
// }
// else{
//     alert("normal day");
// }

// // task5

// var rn = new Date();
// var dat = rn.getDate();

// if(dat < 16){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("last days of the month");
// }


// // task6

// var rn = new Date();
// var since1970 = rn.getTime();
// var min = since1970 / 1000 * 60;

// document.write("current date: "+rn+"<br>");
// document.write("Elapsed milliseconds sice january 1,1970: "+since1970+"<br>");
// document.write("Elapsed minutes sice january 1,1970: "+min);


// // task7

// var rn = new Date();
// var time = rn.getHours();

// if(time < 12){
//     alert("It's AM")
// }
// else{
//     alert("It's PM");
// }


// // task8

// var lastdate = new Date("December 31, 2020");
// var laterDate = new Date(lastdate);
// alert("later date: "+laterDate);

// // task9

// var firstRam = new Date("June 18, 2015");
// var rn = new Date("June 24, 2020");
// var diff = rn.getTime() - firstRam.getTime();
// var SinceDays = diff / (1000 * 60 * 60 * 24);
// document.write(SinceDays+ " days have passed since 1st Ramadan, 2015");

// // task10

// var refDate = new Date("Dec 05, 2015");
// var begDate = new Date("jan 01, 2015");
// var diff = refDate.getTime() - begDate.getTime();
// var sec = diff / 1000;
// document.write(sec+" seconds had passed since beginning of 2015");


// // task11

// var rn = new Date(2020,5,25,00,35,30);
// document.write("curent date: "+rn+"<br>");

// rn = new Date(2020,5,24,23,35,30);
// document.write("1 hour ago it was: "+rn);


// // task12

//  var rn = new Date();
//  document.write("current date: "+rn+"<br>");
//  rn.setFullYear(1920);
//  document.write("100 years back, it was: "+rn);

// // task13


// var age = prompt("What is your age?");
// document.write("Your age is: "+age+"<br>");
// var rn = new Date();
// var birthYear = rn.getFullYear() - age;
// document.write("your birth year is: "+birthYear);


// // task14

// document.write("K-Electric Bill"+"<br>");
// var name = "ADNAN";
// var month = "February";
// var unit = Math.round(410).toFixed(2);
// var charge = Math.round(16).toFixed(2);
// var netAmount_withInDue = unit * charge;
// var latePay = 350;
// var grossAmount_afterDue = (netAmount_withInDue + latePay);

// document.write("Customer name: "+name+"<br>");
// document.write("Month: "+month+"<br>");
// document.write("Number of units: "+unit+"<br>");
// document.write("charges per unit: "+charge+"<br>"+"<br>");

// document.write("Net amount payable with in due date: "+Math.round(netAmount_withInDue).toFixed(2)+"<br>");
// document.write("Late payment surcharge: "+Math.round(latePay).toFixed(2)+"<br>");
// document.write("Gross amount payable after due date: "+Math.round(grossAmount_afterDue).toFixed(2)+"<br>");

