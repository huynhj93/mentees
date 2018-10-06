//905. Sort Array By Parity
//https://leetcode.com/problems/sort-array-by-parity/description/

var sortArrayByParity = function(A) {
    let b = [];
    
    A.forEach((e) => {
        (e % 2 === 0) ? b.unshift(e) : b.push(e);
    });

    return b;
};

