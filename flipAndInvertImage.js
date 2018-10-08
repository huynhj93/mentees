//832. Flipping an Image
//https://leetcode.com/problems/flipping-an-image/description/

var flipAndInvertImage = function(A) {
    for (let i = 0; i < A.length; i++) {
        A[i].reverse();        
        for (let j = 0; j < A[i].length; j++) {
            if (A[i][j]) {
                A[i].splice(j,1,0);
            } else {
                A[i].splice(j,1,1);
            }
        }
    }
    
    return A;
};