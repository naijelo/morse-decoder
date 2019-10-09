const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    
    let stack = [];// сюда складывать готовое
    let sub; // подстрока
    for (let i = 0; i < (expr.length / 10); i++) {
        let firstIndex = i * 10;
        let lastIndex = firstIndex + 10;
        sub = expr.substring(firstIndex, lastIndex);
        //поделили и теперь замена
        if (sub === "**********") {
            stack.push(" ");
        } else {
            sub = stack.push(MORSE_TABLE[sub.replace(/00/g, "").replace(/10/g, ".").replace(/11/g, "-")]);
        }
    }
    return stack.join("");
}
 
module.exports = {
    decode
}