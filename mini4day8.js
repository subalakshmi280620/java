let str = "  I AM SUBALAKSHMI  ";
const removespace = str.trim();
const lowercasestr = removespace.toLowerCase();
const reversestr = lowercasestr.split("").reverse().join("")
const userinput= lowercasestr===reversestr ? "Palindrome" : "Not a Palindrome";
console.log(userinput);