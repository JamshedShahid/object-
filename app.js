// var arr =[
//     {
//         name: "juice",
//         price : 50,
//             Quantity: 3,
            
//     },
//     {
//         name: "Cookies",
//         price : 30,
//             Quantity: 9,
            
//     },
//     {
//         name: "shirt",
//         price : 880,
//             Quantity: 1,
            
//     },

//     {
//         name: "pen",
//         price : 100,
//             Quantity: 2,
            
//     }
// ]


//  console.log(arr[0].price*3)
// console.log(arr[1].price*9)
// console.log(arr[2].price*1)
// console.log(arr[3].price*2)

// var total =0;
// arr.forEach(item => {
//     total +=  item.price  } )
    
//     console.log (total)









// var bj ={
//     name: "Jamshed",
//     age : 18,
//     Email: "eyes0033@gmail.com",
//      password : 25353553,
//       country: "Pakistan",
//       city: "Karachi",
//       Active : true
// }


// var che = "name" in bj
// console.log(che)

// var che = "age" in bj
// console.log(che)

// var che = "Email" in bj
// console.log(che)


// var che = "password" in bj
// console.log(che)

// var che = "city" in bj
// console.log(che)


// var che = "country" in bj
// console.log(che)

// var che = "Active" in bj
// console.log(che)

// var che = "xyz" in bj
// console.log(che)






// function Std(Name, age,clss, active){
//     this.Name=Name
//     this.age=age
//     this.clas=clss
//     this.active=active
// }

// var part1 = new Std("Jamshed", 18, 7, true)

// var part2 = new Std("Ali", 14, 9, true)
// var part3 = new Std("Hamza", 15, 11, false)
// var part4 = new Std("Saad", 16, 8, true)
// console.log(part1)
// console.log(part2)
// console.log(part3)
// console.log(part4)






function Intt(Name, gender, address, education, profession){
    this.name = Name
    this.gender = gender
    this.address = address
    this.education = education
    this.profession = profession
}
var creat = new Intt("Hamza" , "Male" , "Karachi", "Matric", "Science")
var creat2 = new Intt("Saad" , "Male" ," Karachi", "Graduate", "Math");
var creat3 = new Intt("Toqeer" , "Male" , "Karachi", "Inter", "Student");

console.log(creat)
console.log(creat2)
console.log(creat3)
 


document.getElementById("names")

sec="<select>"+
"<option>" + "Name " + "</option>"+
"<option>" + "FatherName"+ "</option>"+
"<option>" + "Class"+ "</option>"+
"<option>" + "Age"+ "</option>"
+ "</select>"
names.innerHTML=sec


document.getElementById("num")

sec="<select>"+
"<option>" + "Jamshed " + "</option>"+
"<option>" + "Shahid"+ "</option>"+
"<option>" + "12"+ "</option>"+
"<option>" + "18"+ "</option>"
+ "</select>"
num.innerHTML=sec



 
