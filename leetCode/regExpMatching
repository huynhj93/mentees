// https://leetcode.com/problems/regular-expression-matching/description/

var isMatch = function(s, p) {
    var exp = new RegExp(p);
    var match = s.match(exp);
    if (match) {
        return s === match[0];  
    }
    return false;
};

//console.log(isMatch("ab",".*c"));
