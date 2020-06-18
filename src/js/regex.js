// RULES

// Common
// \d => digits (equivalent [0-9])
// \w => characters (equivalent [a-zA-Z0-9])
// \s => empty spaces (equivalent [])

// Delimiters
// * => zero or many
// + => one or many
// ? => zero or one (optional)

// Bracket
// [clase] => all the 'clase'
// [clase]{x,y} => between X and Y 'clase'
// [clase]{x,} => at least one 'clase'
// [a-g]	character between a & g

// Specials
// \. or \* or \\	=> escaped special characters
// .+, => (without ?) match most biggest possible
// .+?, => (with ?) match most smallest possible
// ^abc$	=> start / end of the string

// Group
// (abc) => capture group 'abc

// Negation
// [0-5a-c] = match regex
// [^0-5a-c] = match all except regex

// Start ^ and End $
// ^\d{5,}$ = The match must be the entire line, or it is discarded (pending practice)

// Examples
// [cmf]an => can, man or fan
// aa+b*c* => two a, next many c next any c
// \d*\w*\w*\? =>	match "24 files found?"
// I love (cats|dogs) => "i love cats" or "o love dogs"

// COMMONLY USED REGEX

// 1. Digits
//   Whole Numbers => /^\d+$/
//   Decimal Numbers => /^\d*\.\d+$/
//   Whole + Decimal Numbers => /^\d*(\.\d+)?$/
//   Negative, Positive Whole + Decimal Numbers => /^-?\d*(\.\d+)?$/
//   Whole + Decimal + Fractions => /[-]?[0-9]+[,.]?[0-9]*([\/][0-9]+[,.]?[0-9]*)*/

// 2. Alphanumeric Characters
//   Alphanumeric without space => /^[a-zA-Z0-9]*$/
//   Alphanumeric with space => /^[a-zA-Z0-9 ]*$/

// 3. Email
//   Common email Ids => /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/
//   ex: https://www.regexpal.com/?fam=104026
//   Uncommon email ids => /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
//   ex: https://www.regexpal.com/?fam=104027

// 4. Password Strength
//   Complex: Should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long
//   /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/ 
//   Moderate: Should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long
//   /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/

// 5. Username
//   Alphanumeric string that may include _ and – having a length of 3 to 16 characters –
//   /^[a-z0-9_-]{3,16}$/

// 6. URL
//   Include http(s) Protocol
//     /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/ 
//   Protocol Optional
//     /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ 

// 7. Match Duplicates in a String
//   Search Duplicates /(\b\w+\b)(?=.*\b\1\b)/

// 8. Identity Documents
//   Social Security Number – Ref
//     /* can use either hypen(-) or space( ) character as separator */
//     /^((?!219-09-9999|078-05-1120)(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4})|((?!219 09 9999|078 05 1120)(?!666|000|9\d{2})\d{3} (?!00)\d{2} (?!0{4})\d{4})|((?!219099999|078051120)(?!666|000|9\d{2})\d{3}(?!00)\d{2}(?!0{4})\d{4})$/
//   Passport – /^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/

// REGEX IN JAVASCRIPT

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2020-02-14/');

const year = match[1];
const month = match[2];
const day = match[3];

// Function validators

const eightCharacters = value => /^.{8,}$/.test(value)

const oneCapitalLetter = value => /[A-Z]/g.test(value)

const oneNumber = value => /[+-]?(?=[^+-/*^])\d+(\.\d+)*/g.test(value)

const url = value => /https?:\/\/[\w\-\.]+\.\w{2,5}\/?\s*/.test(value)

const email = value => /^.[\.\-\_]?@.*\.\w{2,5}.(\w{2,5})?$/.test(value)
