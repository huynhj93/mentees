//709 To Lower Case - implementing toLowerCase()

//https://leetcode.com/problems/to-lower-case/description/

var toLowerCase = function(str) {
    //return str.toLowerCase();
    
    var lower = "";
    
    for (let i=0; i<str.length; i++) {
        if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) {
            lower += String.fromCharCode(str.charCodeAt(i)+(97-65));
        } else {
            lower += str[i];
        }
    }
    return lower;
};
