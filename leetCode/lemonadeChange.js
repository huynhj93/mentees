// https://leetcode.com/problems/lemonade-change/description/

// 860. Lemonade Change

/* At a lemonade stand, each lemonade costs $5. 
Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).
Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.  You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.
Note that you don't have any change in hand at first.
Return true if and only if you can provide every customer with correct change. */

// Tried using lastIndexOf

var lemonadeChange = function(bills) {
    for (var i = 0; i < bills.length; i++) {
        if (bills[i] > 5) {
            if (i === 0) {
                return false;
            } else {
                if (bills.lastIndexOf(5,i) > -1) {
                    bills.splice(bills.indexOf(5),1,0);
                    if (bills[i] === 20) {
                        if (bills.lastIndexOf(10,i) > -1) {
                            bills.splice(bills.indexOf(10),1,0);
                        } else {
                            if (bills.lastIndexOf(5,i) > -1) {
                                bills.splice(bills.indexOf(5),1,0);
                            } else {return false;}
                            if (bills.lastIndexOf(5,i) > -1) {
                                bills.splice(bills.indexOf(5),1,0);
                            } else {return false;}
                        }
                    }
                } else {
                    return false;
                }
            }
        }
    }
    return true;
};

console.log(lemonadeChange([5,5,5,20]))

// Solution in Python --> just counts number of 5s and 10s

class Solution(object): #aw
    def lemonadeChange(self, bills):
        five = ten = 0
        for bill in bills:
            if bill == 5:
                five += 1
            elif bill == 10:
                if not five: return False
                five -= 1
                ten += 1
            else:
                if ten and five:
                    ten -= 1
                    five -= 1
                elif five >= 3:
                    five -= 3
                else:
                    return False
        return True

//Solution in JavaScript

var lemonadeChange = function(bills) {
    var [five, ten] = [0,0];
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            five += 1;
        } else if (bills[i] === 10) {
            if (!five) {
                return false;
            } else {
                five -= 1;
                ten += 1;
            }
        } else {
            if (five && ten) {
                five -= 1;
                ten -= 1;
            } else if (five >= 3) {
                five -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
};
