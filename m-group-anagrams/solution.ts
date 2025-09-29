function groupAnagrams(strs: string[]): string[][] {
    if(strs.length === 1)
        return [[strs[0]]];

    let  dictionary:Map<number,string[]> = new Map<number,string[]>();

    let tmpSum = 0;
    for(let str of strs){
        //sumamos el valor de cada ascii 
        for(let character of str)
            tmpSum += character.charCodeAt(0);
        
        if(dictionary.has(tmpSum))
            dictionary.set(tmpSum, [...(dictionary.get(tmpSum) || []), str])
        else
            dictionary.set(tmpSum, [str]);

        tmpSum=0;
    }

    return Array.from(dictionary.values());
};

//improved solution to avoid collisions
function groupAnagramsImproved(strs: string[]): string[][] {
  if (strs.length === 0) return [];
  const map = new Map<string, string[]>();

  for (const s of strs) {
    const key = s.split('').sort().join(''); // anagram-invariant
    const bucket = map.get(key);
    if (bucket) bucket.push(s);
    else map.set(key, [s]);
  }
  return Array.from(map.values());
}

