const fruit = 'Avacado';
const price = 51;
const isAvailable = true;
console.log(`My favourite fruit is ${fruit}.`)
// $ or ` can be escaped with \
console.log(`Its price is \$${price}.`);
// Multi line strings
console.log(`The avocado, alligator pear or avocado pear is an evergreen tree
in the laurel family. It is native to the Americas and was first domesticated
in Mesoamerica more than 5,000 years ago.`)
// Nesting 
const classes = `header ${
    fruit !== 'Avacado' ? "" : `icon-${isAvailable ? "available" : "unavailable"}`
}`;
console.log('\n');

// Tagged Templates
function myTag(strings, fruitExp, priceExp) {
  const [str0,str1,str2] = [strings[0],strings[1],strings[2]]; // "My favourite fruit is "
  console.log(`Tagged Expression string:
  ${str0}
  ${str1}
  ${str2}`)  
  const cost_parameter = price < 100 ? "cheap" : "costly";
  // return a string built using a template literal
  return `${fruitExp}es are ${cost_parameter}.`;
}
const output = myTag`My favourite fruit is ${fruit}. Its price is ${price}.`;
console.log(output);
// Avacadoes are cheap.
//can use any property access, function call, new expression, another tagged template literal.
console.log`Hello`; 