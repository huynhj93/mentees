//890. Find and Replace Pattern
//https://leetcode.com/problems/find-and-replace-pattern/description/

//THERE MUST BE A BETTER WAY

var findAndReplacePattern = function(words, pattern) {
    let P = {};
    
    const match = words.filter((w) => {
        for (let i = 0; i < pattern.length; i++) {
            
            if (!Object.values(P).includes(w[i]) && !Object.keys(P).includes(pattern[i])) {
                P[pattern[i]] = w[i];
            } else if (P[pattern[i]] != w[i] || Object.values(P).length != [...new Set(Object.values(P))].length) {
                console.log(Object.values(P));
                console.log([...new Set(Object.values(P))]);
                P = {};
                return false;
            }
        }
        P = {};
        return true;
    });
    
    return match;
};