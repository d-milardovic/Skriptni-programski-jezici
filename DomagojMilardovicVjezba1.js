import '../styles/index.scss';

// //Zad 1
// function change(first, ...rest){
//     first = first === first.toLowerCase() ? first.toUpperCase() : first.toLowerCase();
//     return first + rest;
// }

// let string = "domagoj";

// console.log(change(string[0], string.slice(1)));



// //zad 2
// function toTime(params){
//     if(params < 12){
//         return params + " am";
//     }
//     else if(params == 24){
//         return "00 am";
//     }
//     else if (params > 12){
//         return params -12 + " pm";
//     }
// }

// let time = toTime(15);
// console.log(time);


// // Zad 3
// function Student(ime, ocjena) {
//     this.ime = ime;
//     this.ocjena = ocjena;
// }

// Student.prototype.returnGrade = function () {
//     let grades = ['nedovoljan', 'dovoljan', 'dobar', 'vrlo dobar', 'odlican'];
//     return grades[this.ocjena - 1];
// };

// let stu = new Student('frane', 5);
// console.log(stu.returnGrade());




// // Zad 4
// function filterArray(params) {
//     return params.filter(number => number > 2);    
// }

// let niz = [1,1,5,3,2,3,4,5];

// console.log(filterArray(niz));


// // Zad 5
// function findName(arr1) {
//     var mf = 1;
//     var m = 0;
//     var item;

//     for (var i = 0; i < arr1.length; i++) {
//         for (var j = i; j < arr1.length; j++) {
//             if (arr1[i].ime == arr1[j].ime)
//                 m++;
//             if (mf < m) {
//                 mf = m;
//                 item = arr1[i].ime;
//             }
//         }
//         m = 0;
//     }
//     console.log(item + " ( " + mf + " times ) ");
// }

// let niz = [{ime: "Domagoj"},{ime: "Filip"},{ime: "Domagoj"},{ime: "Mario"},{ime: "Domagoj"},{ime: "Jure"}, {ime:"Domagoj"}];
// findName(niz);


