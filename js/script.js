const numberOfFilms = prompt("Сколько фильмов вы посмотрели?", "");

const personalMovieDB = {
 count:numberOfFilms,
 movies:{},
 actors:{},
 genres:[],
 privat:false

};

const answer = prompt("Один из последних просм фильмов?",''),
      b = prompt("Оценочка?",''),
     c = prompt("Один из последних просм фильмов?",''),
      d = prompt("Оценочка?",'');

personalMovieDB.movies[answer] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);