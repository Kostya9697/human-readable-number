module.exports = function toReadable (number) {
    const arr = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }
    let stringNumber = number.toString()
    if (stringNumber.length === 1) {
        return arr[number]
    }
    else if (stringNumber.length === 2 && stringNumber[1] === '0') {
        return arr[stringNumber]
    }
    else if (stringNumber.length === 2 && stringNumber[0] === '1' && stringNumber[2] !== '0') {
        return arr[number]
    }
    else if (stringNumber.length === 2 && stringNumber[1] !== 0) {
        return arr[stringNumber[0]+'0'] + ' ' + arr[stringNumber[1]]
    }
    else if (stringNumber.length === 3 && stringNumber[1] === '0' && stringNumber[2] === '0'){
        return arr[stringNumber[0]] + ' ' + 'hundred'
    }
    else if (stringNumber.length === 3 && stringNumber[1] !== '0' && stringNumber[2] === '0'){
        return arr[stringNumber[0]] + ' ' + 'hundred' + ' ' + arr[stringNumber[1] + '0']
    }
    else if (stringNumber.length === 3 && stringNumber[1] === '0' && stringNumber[2] !== '0'){
        return arr[stringNumber[0]] + ' ' + 'hundred' + ' ' + arr[stringNumber[2]]
    }
    else if (stringNumber.length === 3 && stringNumber[1] === '1' && stringNumber[2] !== '0'){
        return arr[stringNumber[0]] + ' ' + 'hundred' + ' ' + arr[stringNumber[1]+stringNumber[2]]
    }
    else if (stringNumber.length === 3 && stringNumber[1] !== '0' && stringNumber[2] !== '0'){
        return arr[stringNumber[0]] + ' ' + 'hundred' + ' ' + arr[stringNumber[1] + '0'] + ' ' + arr[stringNumber[2]]
    }
}

