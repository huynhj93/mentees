//807. Max Increase to Keep City Skyline
//https://leetcode.com/problems/max-increase-to-keep-city-skyline/description/

var maxIncreaseKeepingSkyline = function(grid) {
    
    var sum = 0;
    var max;
    
    //transpose matrix    
    var gridCol = grid[0].map((col,i) => grid.map(row => row[i]));
    
    console.log(gridCol);
    
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid.length; j++) {
            max = Math.min(Math.max(...grid[i]),Math.max(...gridCol[j]));
            sum += (max - grid[i][j]);
        }
    }
    
    return sum;
    
};
