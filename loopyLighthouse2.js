const loopyLighthouse = (range, multiples, words) => {
  let output = 0;
  for (i = range[0]; i <= range[1]; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      output += `${words[0] + words[1]}`;
    } else if (i % multiples[0] === 0) {
      output += `${words[0]} \n`;
    } else if (i % multiples[1] === 0) {
      output += `${words[1]} \n`;
    } else {
      output += `${i} \n`;
    }
  }
  return output;
};

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));
