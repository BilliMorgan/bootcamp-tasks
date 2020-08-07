const pigLatina = (word) => {
  let index = 0;
  return word.concat(word.charAt(index)).slice(1) + "ay";
};

const inputCommandLine = (input) => {
  let output = "";
  for (let i = 2; i < input.length; i++) {
    output += pigLatina(input[i]) + " ";
  }
  return output;
};
console.log(inputCommandLine(process.argv));
