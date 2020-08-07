const reverse = (input) => {
  let outputWord = "";
  for (let i = input.length - 1; i >= 0; i--) {
    outputWord += input[i];
  }
  console.log(outputWord)
};

const output = (commandLineInput) => {
  for (let j = 2; j < commandLineInput.length; j++) {
    reverse(process.argv[j] + " ");
  }
};
output(process.argv);