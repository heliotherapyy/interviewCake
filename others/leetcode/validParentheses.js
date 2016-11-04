/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        if (isOpening(char)) stack.push(char);
        else {
            if (stack.length) {
                var popped = stack.pop();
                if (isMatch(popped, char)) {
                    continue;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }

    if (stack.length === 0) return true;
    else return false;
};

function isOpening(char) {
    if (char === '(' || char === '{' || char === "[") return true;
    else return false;
}

function isMatch(opening, closing) {
    if (opening === "(") return closing === ")";
    if (opening === "{") return closing === "}";
    if (opening === "[") return closing === "]";
}

var string = "([)]";
var a = isValid(string);
console.log(a);