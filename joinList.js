/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
// ...

// Test / Driver Code below...
const joinList = (conceptList) => {
  let output = "";
  for (let i = 0; i <= conceptList.length - 1; i++) {
    if (i !== conceptList.length - 1) {
      output += conceptList[i] + ", ";
    } else if (i === conceptList.length - 1) {
      output += conceptList[i];
    }
  }
  return output;
};

const conceptList = [
  "gists",
  "types",
  "operators",
  "iteration",
  "problem solving",
];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);
