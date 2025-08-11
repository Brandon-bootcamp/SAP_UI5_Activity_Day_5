function numberToWords(n) {
    const words =[
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen',
        'nineteen'
    ];

    const tens =[
        '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];

    if(n < 20){
        return words[n];
    }

    if(n < 100){
        return tens[Math.floor(n / 10)] + (n % 10 !== 0 ? ' ' + words[n % 10] : '');
    }

    if(n < 1000){
        return words[Math.floor(n / 100)] + ' hundred' + (n % 100 !== 0 ? ' ' + numberToWords(n % 100) : '');
    }

    if(n === 1000){
        return 'one thousand';
    }

    return 'number out of range';
}

const numInput = parseInt(prompt('Enter a number from 1 to 1000:'));

if(numInput >= 1 && numInput <= 1000){
    console.log(numberToWords(numInput));
} else {
    console.log('Invalid Input. Please enter a number between 1 and 1000.')
}