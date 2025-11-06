# Group Anagrams
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An anagram is a word or phrase formed by rearranging the letters of another word or phrase, using all the original letters exactly once.

**Example 1:**
>Input: strs = ["eat","tea","tan","ate","nat","bat"]
>
>Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

**Example 2:**
>Input: strs = [""]
>
>Output: [[""]]

**Constraints:**
- `1 <= strs.length <= 10^4`

- `0 <= strs[i].length <= 100`

- `strs[i]` consists of lowercase English letters.

<details> <summary>Hint 1</summary> A naive solution would be to sort each string and group them using a hash map. This would be an O(m * n log n) solution. Though this solution is acceptable, can you think of a better way without sorting the strings? (where 'm' is the number of strings and 'n' is the maximum length of a string). </details>

<details> <summary>Hint 2</summary> By the definition of an anagram, we only care about the frequency of each character in a string. How is this helpful in solving the problem? </details>

<details> <summary>Hint 3</summary> We can simply use an array of size O(26), since the character set is 'a' through 'z' (26 continuous characters), to count the frequency of each character in a string. Then, we can use this array as the key in the hash map to group the strings. </details>

<details> <summary>My Aprox. (Frequency Key Solution)</summary>

```typeScript

function groupAnagrams(strs: string[]): string[][] {
    const anagramMap: Map<string, string[]> = new Map(); // Key: Frequency String -> Value: Array of Anagrams
    const aCharCode = 'a'.charCodeAt(0);

    for (const str of strs) {
        // Initialize a 26-position array for a-z character counts.
        const counts = new Array(26).fill(0); 

        // 1. Count Frequency: O(n) per string
        for (const char of str) {
            // Calculate the index (0 for 'a', 1 for 'b', etc.)
            const index = char.charCodeAt(0) - aCharCode;
            counts[index]++;
        }

        // 2. Create the Unique Key: O(1)
        // The key is a string representing the exact count of each letter (e.g., "1#0#0#1#...").
        const key = counts.join('#'); 

        // 3. Group: O(1)
        if (anagramMap.has(key)) {
            anagramMap.get(key)!.push(str);
        } else {
            anagramMap.set(key, [str]);
        }
    }

    // Return all values (the anagram groups) from the map.
    return Array.from(anagramMap.values());
};
```
</details>