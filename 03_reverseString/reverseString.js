const reverseString = function(character) {
    character = character.split('');
    character = character.reverse();
    let reverseString = character.join("");
    return reverseString;
};

reverseString("a string here");
// Do not edit below this line
module.exports = reverseString;
