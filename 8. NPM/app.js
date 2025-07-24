const validator = require("validator");
const chalk = require("chalk");

//ngecheck email
console.log(validator.isEmail("akhsantf@gmail.com"));
console.log(validator.isMobilePhone("084808444533830", "id-ID"));
// console.log(chalk.black.bgWhite("text"));
