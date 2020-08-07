const reverse = (input) => {
  let outputWord = "";
  for (let i = input.length - 1; i >= 0; i--) {
    outputWord += input[i];
  }
  return outputWord;
};

const output = (commandLineInput) => {

  let output = "";
  for (let j = 2; j < commandLineInput.length; j++) {
    output += reverse(process.argv[j]) + " ";
  }
  return output;
};
console.log(output(process.argv));
