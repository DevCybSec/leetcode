function isValid(s: string): boolean {
    let arr = [];
    for(const c of s){
        if(c === '(' || c === '{' || c === '[')
            arr.push(c);
        else if (c === ')') {
            if(arr.pop() === '(')
                continue;
            else 
                return false;
        } else if (c==']') {
            if(arr.pop() === '[')
                continue;
            else 
                return false;
        } else if (c=='}') {
            if(arr.pop() === '{')
                continue;
            else 
                return false;
        } 
    }

    return true;
};

function isValid2(s: string): boolean {
    let map = new Map([
        ["}", "{"],
        [")", "("],
        ["]", "["],
    ])

    let stack =  []

    for (let i of s) {
        if (map.has(i)) {
            let pop = stack.pop()
            if (pop !== map.get(i)) {
                return false
            }
        } else {
            stack.push(i)
        }
    }

    return !stack.length
};