let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
    }
}

start();

const personalMovieDB = {
 count:numberOfFilms,
 movies:{},
 actors:{},
 genres:[],
 privat:false

};


function rememberMyFilms() {
for ( let i = 0; i < 2; i++){
    const answer = prompt("Один из последних просм фильмов?",''),
          b = prompt("Оценочка?",'');
    if(answer != null && b != null && answer != '' && b!='' && answer.length < 50){
        personalMovieDB.movies[answer] = b;
        console.log('done');
    } else {
        console.log('error again!');
        i--;
    }
          
}
}

//rememberMyFilms();



function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        alert('просмотрено мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert ('вы классический зритель');
    } else if (personalMovieDB.count >= 30){
        alert('kinoman');
    } else {
        alert('err');
    }
}

//detectPersonalLevel();

function showMyDB (){
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);   
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1;i <= 3;i++){
        const genre = prompt(`ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();
//console.log(personalMovieDB);


// let k = 0;
// while (k < 2){
//     const answer = prompt("Один из последних просм фильмов?",''),
//          b = prompt("Оценочка?",'');
//     if(answer != null && b != null && answer != '' && b!='' && answer.length < 50){
//         personalMovieDB.movies[answer] = b;
//         console.log('done');
//         k++;
//     } else {
//         console.log('error again!');
        
//     }
    
// }

// do {
//     const answer = prompt("Один из последних просм фильмов?",''),
//     b = prompt("Оценочка?",'');
// if(answer != null && b != null && answer != '' && b!='' && answer.length < 50){
//    personalMovieDB.movies[answer] = b;
//    console.log('done');
//    k++;
// } else {
//    console.log('error again!');
   
// }

// } while (k < 2);

// // // if (7 == 3) {
// // //     console.log('horosh');
// // // }
// // // else {
// // //    console.log('err');
// // // }

// // // const number = 30;
// // // // if (number<33) {
// // // //     console.log('error');
// // // // } else if (number > 100) {
// // // //     console.log('mnogo');
// // // // } else {
// // // //     console.log('ok!')
// // // // }
// // // // (number === 30) ? console.log('zaebis') : console.log('oshibka');

// // // switch (number) {
// // //      case 29:
// // //          console.log('wrong');
// // //          break;
// // //      case 31:
// // //          console.log('wrong');
// // //         break;
// // //      case 32:
// // //         console.log('wrong1');
// // //         break;
// // //         default:
// // //             console.log('not this time');
// // //             break;
// // // }

// // // let num = 20;

// // // // while(num <= 55){
// // // //     console.log(num);
// // // //     num++;
// // // // }

// // // // do {
// // // //     console.log(num);
// // // //     num++;
// // // // }
// // // // while(num<55);
// // // for (let i = 1; i < 9; i++){
// // //     if(i === 6){
// // //         //break;
// // //         continue;
// // //     }
// // //     console.log(i);
    
// // // }
// let num = 20;
// function showMessage (text) {
//     console.log(text);
    
//     console.log(num);
// }

// showMessage('hello');
// console.log(num);

// function calc (a,b){
//     return (a+b);
// }

// console.log(calc(4,7));
// console.log(calc(4,6));
// console.log(calc(4,5));

// function ret() {
//     let num = 39;
//     return num;
// }
// const anothernum = ret();
// console.log(anothernum);

// const logger = function() {
//  console.log('hey');
// };
// logger();

// const calcul = (a,b) => a+b;

// const str = 'tEst';
// // const arr = [1,2,3,4,5,5,6,4];

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// const fruit = "Somt fruit";

// console.log(fruit.indexOf("it"));

// const logg = "hello world";
// // console.log(logg.slice(0));
// // console.log(logg.substring(2,9));
// console.log(logg.substr(2,5));

// const num = 10.49;
// console.log(Math.round(num));

// const test = "11.9px";
// console.log(parseInt(test));
// console.log(parseFloat(test));