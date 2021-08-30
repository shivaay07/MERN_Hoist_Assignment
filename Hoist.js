// console.log(hello);
// var hello = 'world';
// var hello; -- on declaration var hello will be hoisted on the Top of its scope.
// console.log(hello); -- logs unidentified
// hello = 'world';
// expected output -- unidentified


// var needle = 'haystack';
// test();
// function test(){
//   var needle = 'magnet';
//   console.log(needle);
// }
// var needle; -- on declaration var needle being hoisted at the top of its scope.
// test(); -- standalone funtion declare on its scope
// invoking the test(); on next line;
// var needle; var declaration and being hoisted on top of its scope
// needle = 'magnet'; declaring the value to var needle
// console logging the var needle
// expected output - magnet

// var brendan = 'super cool';
// function print(){
//   brendan = 'only okay';
//   console.log(brendan);
// }
// console.log(brendan);

// var brendan;
// function print();
// var brendan = 'only okay';
// console logging (brendan);
// brendan = 'super cool';
// console logging (brendan);
// expected result = only okay
// expected result = super cool

// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//   food = 'half-chicken';
//   console.log(food);
//   var food = 'gone';
// }

// var food;
// food = 'chicken';
// result -- chicken;
// eat();
// function eat(){
  // var food;
  // food = 'half-chicken';
  // result - half chicken
  // food = 'gone';
// }
// food = chicken;
// 

// mean();
// console.log(food);
// var mean = function() {
//   food = "chicken";
//   console.log(food);
//   var food = "fish";
//   console.log(food);
// }
// console.log(food);

// var mean;
// mean 

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind(){
//   genre = "rock";
//   console.log(genre);
//   var genre = "r&b";
//   console.log(genre);
// }
// console.log(genre);

// var genre;
// console.log(genre); -- undefined
// function rewind() {
  // var genre;
  // genre = "rock";
  // console.log(genre) -- rock;
  // genre = "r&b";
  // console.log(genre) -- r&b;
// }
// rewind(); - Invoking the rewind function
// genre = disco;
// console.log (genre) -- disco
// expected result -- undefined, rock, r&b, disco

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);


console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}