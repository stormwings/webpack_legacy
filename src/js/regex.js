// Rules
// \d => digits (equivalent [0-9])
// \w => characters (equivalent [a-zA-Z0-9])
// \s => empty spaces (equivalent [])

// Delimiters
// * => zero or many
// + => one or many
// ? => zero or one

// Bracket
// [clase] => all the 'clase'
// [clase]{x,y} => between X and Y 'clase'
// [clase]{x,} => at least one 'clase'

// Specials
// \. or \* or \\	=> escaped special characters
// .+, => (without ?) match most biggest possible
// .+?, => (with ?) match most smallest possible

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

// validate by separated regex groups
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2020-02-14/');

const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);