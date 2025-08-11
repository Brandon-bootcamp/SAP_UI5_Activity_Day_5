let input = prompt('Enter a number:');

let i = input;

while (i > 0) {
    let  rowOutput = '',
         whiteSpace = '',
         n = 0;

    while(n < i){
        rowOutput += '*';
        n++;
    }
    n = 0;
    
    
    while(n < input - i){
        whiteSpace += ' ';
        n ++;
    }

    console.log(whiteSpace + rowOutput);
    rowOutput = '';
    i -= 1;
}