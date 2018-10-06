//461. Hamming Distance
//https://leetcode.com/problems/hamming-distance/description/

var hammingDistance = function(x, y) {
    let xBin = x.toString(2); //easy way to convert to bits
    let yBin = y.toString(2);
    let hDiff = 0;

    while (xBin.length < 31 || xBin.length < yBin.length) {
        xBin = "0" + xBin;
    }
    
    while (yBin.length < 31 || yBin.length < xBin.length) {
        yBin = "0" + yBin;
    }
    
    for (let a = 0; a < xBin.length; a++) {
        if (xBin[a] !== yBin[a]) {
            hDiff++;
        }
    }
    
    return hDiff;
};
