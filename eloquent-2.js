// triangle loop
for (var abc='#'; abc.length <8; abc+='#')
  console.log(abc);

//Fizzbuzz
for (i=1; i<=100; i++) {
  if(i % 3 === 0 && i % 5 === 0) {
      console.log("Fizz");
  } else if(i % 5 === 0) {
      console.log("Buzz");
  } else {
      console.log(i);
  }
}

//Chessboard
var size = 8;

var hashtag = "";

for (var i = 0; i < size; i++) {
 for (var j = 0; j < size; j++) {
   if ((i + j) % 2 == 0)
     hashtag += " ";
   else
     hashtag += "#";
 }
 hashtag += "\n";
}

console.log(hashtag);
