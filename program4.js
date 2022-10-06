// Write a program to print the first non-repeated character from a string?


function firstNonRepeatedCharacter(string) {
    var first;

    string.split('').some(function (character, index, obj) {
        if(obj.indexOf(character) === obj.lastIndexOf(character)) {
            first = character;
            return true;
        }

        return false;
    });

    return first;
}

console.log(firstNonRepeatedCharacter('aabbdjshjks'));
