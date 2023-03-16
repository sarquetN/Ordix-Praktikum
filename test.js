var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var caesarCipher = ["e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d"]
var resultString = [];

console.log(alphabet.length)

function encript(event){
    event.preventDefault();

    let word = document.querySelector(".input1").value
    console.log(word)





}





const uppercase = () => [alphabet(26)].map((n,i) => `${String.fromCharCode(i + "A".charCodeAt())}`);
const lowercase = () => [alphabet(26)]

