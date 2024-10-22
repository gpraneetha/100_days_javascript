const millet = {
    milletName: 'Finger Millet',
    scientificName: 'Setaria italica',
    family: 'Poaceae'
}
const {milletName, family} = millet;
console.log(milletName, family); //Finger Millet Poaceae

// binding pattern and assignment pattern
// binding pattern - used where the language binds a variable for you like for of, catch or function parameters
const objBinding = { a: 1, b: { c: 2 } };
const { a } = objBinding; // a is constant
let {
  b: { c: d },
} = objBinding; // d is re-assignable

// assignment pattern
const numbers = [];
const objAssignment = { a: 1, b: 2 };
({ a: numbers[0], b: numbers[1] } = objAssignment);
// The properties `a` and `b` are assigned to properties of `numbers`

// Default value
const { b=1 } = { b: undefined} ;
// Function Paramter default values
function getBMI({w=57,h=6}) {
    return w/(h*h);
}
console.log(getBMI({w:60}))
// Rest property - should be last one in the pattern
const { millet1, ...otherMillets } = { millet1: 'Foxtail', millet2: 'Pearl', millet3: 'Finger' };
console.log(millet1, otherMillets); // Foxtail { millet2: 'Pearl', millet3: 'Finger' }

// assigning to a new variable and with default values
const o = { p: 42, q: true };
const { p: foo, q: bar, r=5 } = o;

console.log(foo); // 42
console.log(bar); // true
console.log(r); // 5

// Unpacking properties
function userId({ id }) {
    return id;
}
let user = {fullName: {firstName: 'Praneetha'}, id: 23, 'displayName': 'GP'};
console.log(userId(user)); // 23

// unpacking with nested objects
function fullName({ displayName, fullName: { firstName: name } }) {
    return `${displayName} is ${name}`;
}
console.log(fullName(user)); // "GP is Praneetha"
  
// for of iteration and destructuring
const nutriData =  [
    {
      food_name: 'orange',
      brand_name: null,
      serving_qty: 1,
      serving_unit: 'fruit (2-7/8" dia)',
      serving_weight_grams: 140,
      nf_calories: 68.6,
      nf_total_fat: 0.21,
      nf_saturated_fat: 0.02,
      nf_cholesterol: 0,
      nf_sodium: 1.4,
      nf_total_carbohydrate: 17.56,
      nf_dietary_fiber: 3.08,
      nf_sugars: 11.9,
      nf_protein: 1.27,
      nf_potassium: 232.4,
      nf_p: 32.2,
      full_nutrients: [],
      nix_brand_name: null,
      nix_brand_id: null,
      nix_item_name: null,
      nix_item_id: null,
      upc: null,
      consumed_at: '2024-10-21T17:04:38+00:00',
      metadata: null,
      source: 1,
      ndb_no: 9202,
      tags: [null],
      alt_measures: [null],
      lat: null,
      lng: null,
      meal_type: 3,
      photo: [null],
      sub_recipe: null,
      class_code: null,
      brick_code: null,
      tag_id: null
    },
    {
      food_name: 'egg',
      brand_name: null,
      serving_qty: 1,
      serving_unit: 'large',
      serving_weight_grams: 50,
      nf_calories: 71.5,
      nf_total_fat: 4.76,
      nf_saturated_fat: 1.56,
      nf_cholesterol: 186,
      nf_sodium: 71,
      nf_total_carbohydrate: 0.36,
      nf_dietary_fiber: 0,
      nf_sugars: 0.19,
      nf_protein: 6.28,
      nf_potassium: 69,
      nf_p: 99,
      full_nutrients: [Array],
      nix_brand_name: null,
      nix_brand_id: null,
      nix_item_name: null,
      nix_item_id: null,
      upc: null,
      consumed_at: '2024-10-21T17:04:38+00:00',
      metadata: [],
      source: 1,
      ndb_no: 1123,
      tags: ['fiber'],
      alt_measures: [Array],
      lat: null,
      lng: null,
      meal_type: 3,
      photo: null,
      sub_recipe: null,
      class_code: null,
      brick_code: null,
      tag_id: null
    }
]; 
for (const {food_name, nf_protein} of nutriData) {
    console.log(`Food: ${food_name}, Protein: ${nf_protein}`)
}

const milletType = {
    self: "Pearl",
    __proto__: {
      prot: "Millets",
    },
  };
const { self, prot } = milletType;

console.log(self); // "Pearl"
console.log(prot); // "Millets"