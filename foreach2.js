/*
	For Each 2:
	Use the .forEach iterator to loop over the following array of objects and say how delicious each one is.
 */

 var foods = [
  {name: "Pizza", level: "very"},
  {name: "Tacos", level: "mostly"},
  {name: "Cottage Cheese", level: "not very"}
];

// your code here

foods.forEach(function(a) {
  console.log(a.name + " is " + a.level + " delicious");
})

// The output should be
// > Pizza is very delicious
// > Tacos is mostly delicious
// > Cottage Cheese is not very delicious
