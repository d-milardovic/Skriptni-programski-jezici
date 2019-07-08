import '../styles/index.scss';

// // Zadatak 1
// const first = (a ,b , second) => {
//     return second(a,b);
// };

// const second = (a,b) => {
//     return a+b;
// };

// console.log(first(6,3, second));




// // Zadatak 2
// class Student {
//     constructor (name,age) {
//         this.name = name;
//         this.age = age;
//     }

//     ispis() {
//         console.log(this.name + ' ima ' + this.age + " godina");
//     }
// }

// let Student1 = new Student('Ivan',25);
// Student1.ispis();


// // Zadatak 3
// class FormatDate extends Date{
//     newDate(today) {
//         const dd = String(today.getDate()).padStart(2, '0');
//         const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];       
//         const yyyy = today.getFullYear();

//         console.log(dd + '-' + monthNames[datum.getMonth()] + '-' + yyyy);
//     }
// }

// let datum = new FormatDate();
// datum.newDate(new Date());


/// Zadatak 4
// function returnPromise(number){
//     return new Promise(function(resolve, reject) {
//         resolve(number > 10);
//     });
// }
//
// let promise = returnPromise(15);
// promise.then(
// value => console.log('Number is > 10: ' + value),
// error => console.log('Rejected: ' + error)
// );



// Zadatak 5
function returnPromise(param) {

    return new Promise(resolve => {

        setTimeout(() => {
            if (typeof (param) === 'string') {
                resolve(param.toUpperCase());
            } else {
                Promise.reject(param);
            }
        }, 5000);
    });
}

console.log(returnPromise('rijeseno'));
