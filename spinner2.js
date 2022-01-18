const spinnerString = '| / - \\ | / - \\ |';
const spinner = function(string) {
  let timeCounterSum = 100;
  for (let j = 0; j < string.length; j++) {
    setTimeout(() => {
      process.stdout.write("\r" + string[j]);
      if (j === string.length - 1) {
        process.stdout.write("\n");
      }
    }, timeCounterSum);
    timeCounterSum += 200;
  }
};

spinner(spinnerString);
// setTimeout(() => {
//   process.stdout.write('\r|');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   //need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\')
// }, 700);

// //...fill in the rest yourself...

// setTimeout(() => {
//   process.stdout.write('\r|');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   //need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\')
// }, 1500);

// setTimeout(() => {
//   //need to escape the backslash since it's a special character.
//   process.stdout.write('\r\|')
// }, 1700);

// setTimeout(() => {
//   //need to escape the backslash since it's a special character?
//   process.stdout.write('\r\ \n')
// }, 1900);