// ES2015 import syntax - statically imported
// statically imported modules gets added to initial bundle
import fruits from "./fruits.js";
import veggies from "./veggies.js";

fruits(); // Fruits!!!
veggies(); // Veggies!!!

//Note: Statically importing all modules increases initial bundle size
// which increases application loading time
// use dynamic imports for modules not required at initial load.