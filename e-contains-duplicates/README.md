# Contains Duplicate (Easy)

Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

#### Example 1:

    Input: nums = [1,2,3,1]

    Output: true

    Explanation:

    The element 1 occurs at the indices 0 and 3.

#### Example 2:

    Input: nums = [1,2,3,4]

    Output: false

    Explanation:

    All elements are distinct.

#### Example 3:

    Input: nums = [1,1,1,3,3,4,3,2,4,2]

    Output: true


#### Constraints:

- `1 <= nums.length <= 105`
- `109 <= nums[i] <= 109`


<details>
    <summary> hint 1 </summary>
    A brute force solution would be to check every element against every other element in the array. This would be an O(n^2) solution. Can you think of a better way?
</details>    

<details>
    <summary> hint 2 </summary>
    Is there a way to check if an element is a duplicate without comparing it to every other element? Maybe there's a data structure that is useful here.
</details>    

<details>
    <summary> hint 3 </summary>
   We can use a hash data structure like a hash set or hash map to store elements we've already seen. This will allow us to check if an element is a duplicate in constant time.
</details>    

<details>
    <summary> My Aprox. </summary>

``` typescript
function containsDuplicate(nums: number[]): boolean {
    let nHash:Map<number, number> = new Map<number, number>();
    for(const num of nums){
        if(nHash.get(num))
            return true;
        else 
            nHash.set(num,num);     
    }
    return false;
};
```        
</details> 