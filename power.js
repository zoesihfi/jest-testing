function power (x, y) {
    
    var num = x;

    for (i=1; i < y; i++) {
        num = multiply(num, x)
    }
    return num;
}

module.exports = power;