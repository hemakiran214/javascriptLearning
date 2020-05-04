/*
  ES6(ES2015) Modules was one of the latest Fetures that was defined by ES which have the below Advantages
  - Used for server / Client side
  - support for import and export keywords
  - Runtime/static loading of module dependecies.
  - Treeshaking mechanism for removing dead code
  - Works in Strict Mode only
  - by default imports become read only.
  LINK OFFICIAL: https://exploringjs.com/es6/ch_modules.html
*/

// can be imported in HTML Like...
<script src="./Charts.js" type="module"></script>
// We can export a default Anonymous, default named objects from a JS module. 
// Objects means functions,constants, variables, expressions A module can have only one default export and Zero or Multiple Named Exports.
export default class Charts {} // Named default Class 
export class Charts {} // Named Class 
export default function() { console.log("Welcome to Charts")}; // Anonymous Default
export function printMessage() { console.log("Welcome to Charts")} // Named Function
export const foo = 1 // Named Constant
export let bar = 1 // Named Variable
export { default } from 'Charts'; //This line addtion will make you the default export of current module as same with charts module
// can be imported in JS like...
import * as chartModule from './Charts.js'; // Importing the entire module by name chartModule
import defaultChart from './Charts.js'; // Import default export from file
import { PieChart as pie, BarChart} from 'src/Charts'; // Import NamedExport from file by renaming to lacal variable
//To BE CONTINUED ...