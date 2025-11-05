function isAnagram(s: string, t: string): boolean {
    
    if(s.length != t.length)
        return false
    
    let ascii: number[] = new Array(26).fill(0);
    let aChar = 'a';
    for(let i = 0; i<s.length; i++){
        ascii[s.charCodeAt(i)-aChar.charCodeAt(0)]--;
        ascii[t.charCodeAt(i)-aChar.charCodeAt(0)]++;
    }

    for(const value of ascii){
        if(value!=0)
            return false;
    }

    return true;
};