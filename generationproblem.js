/* Function to generate combination of password */
function generatePass() {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789@#$';

    for (let i = 1; i <= 8; i++) {
        let char =Math.random()
            * str.length ;

        pass += str.charAt(char)
    }

    return pass;
}

console.log(generatePass());
