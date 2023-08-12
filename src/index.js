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
    function decode(expr) {
    let toNumber = {
        '**********': ' ',
    };

    let str = "";
    
    Object.keys(MORSE_TABLE).map(element => toNumber[element.replaceAll('.', '10').replaceAll('-', '11').padStart(10, '0')] = MORSE_TABLE[element]);
    
    for (let i = 0; i < expr.length; i += 10) {
        str += toNumber[expr.slice(i, i + 10)];
    };

    return str;
}
}

module.exports = {
    decode
}
