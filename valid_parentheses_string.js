
var checkValidString = function (s) {
    if (!s) return true;
    var stack = [],
        l = 0, r = 0, len = s.length, star = 0;
    for (let i = 0; i < len; i++) {
        if (s[i] === "(") {
            l++;
            stack.push(true);
        } else if (s[i] === ")") {
            r++;
            if (star + l < r) {
                return false;
            }
            stack.pop();
        } else if (s[i] === "*") {
            star++;
            stack.pop();
        }
    }
    if (stack.length === 0) return true;
    return false;

    //     const c = [];
    //     const o = [];

    //     for (let char of s) {
    //         if (char === "(") {
    //             c.push(char);
    //         } else if (char === "*") {
    //             if (c.length) {
    //                 c.pop();
    //             } else {
    //                 o.push(char);
    //             }
    //         } else {
    //             if (c.length) {
    //                 c.pop();
    //             } else if (o.length) {
    //                 o.pop
    //             } else {
    //                 return false;
    //             }
    //         }
    //     }

    //     for (let char of s) {
    //         if (char === "(") {
    //             c.push(char);
    //         } else if (char === "*") {
    //             if (c.length) {
    //                 c.pop();
    //             } else {
    //                 o.push(char);
    //             }
    //         } else {
    //             if (c.length) {
    //                 c.pop();
    //             } else if (o.length) {
    //                 o.pop
    //             } else {
    //                 return false;
    //             }
    //         }
    //     }


    //     return !c.length;
};