// 657 Robot Return to Origin
// https://leetcode.com/problems/robot-return-to-origin/description/

var judgeCircle = function(moves) {
    let x = 0, y = 0;
    
    for (let i = 0; i<moves.length; i++) {
        switch (moves[i]) {
            case 'R':
                x++;
                break;
            case 'L':
                x--;
                break;
            case 'U':
                y++;
                break;
            case 'D':
                y--;
                break;
        }     
    }
    
    if (!x && !y) {
        return true;
    }
    return false;
};
