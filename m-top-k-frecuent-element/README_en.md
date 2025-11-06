# Top K Frequent Elements

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.

### Example 1:

>Input: 
>nums = [1,1,1,2,2,3], k = 2
>
>Output: [1,2]

Explanation: The number 1 appears 3 times, and 2 appears 2 times. The 2 most frequent elements are 1 and 2.

### Example 2:

>Input: nums = [1], k = 1
>
>Output: [1]

### Constraints:

- `1 <= nums.length <= 10^5`
- `k` is in the range `[1, the number of unique elements in the array]`.
- `-10^4 <= nums[i] <= 10^4`
- Your algorithm's time complexity **must be better than $O(n \log n)$**.

<details>
    <summary>Hint 1</summary>
    A naive solution would be to count the frequency of each number and then sort the array based on each element’s frequency. After that, we would select the top k frequent elements. This would be an O(n log n) solution. Though this solution is acceptable, can you think of a better way?
</details>

<details>
    <summary>Hint 2</summary>
    Can you think of an algorithm which involves grouping numbers based on their frequency?
</details>

<details>
    <summary>Hint 3</summary>
    Use the bucket sort algorithm to create n buckets, grouping numbers based on their frequencies from 1 to n. Then, pick the top k numbers from the buckets, starting from n down to 1.
</details>

<details>
    <summary>My Aprox. (Max Heap Solution)</summary>

```typescript
function topKFrequent(nums: number[], k: number): number[] {

    const frecuencyHash: Map<number,number> = new Map<number,number>();
    // Assuming MaxPriorityQueue is a provided data structure where the comparator 
    // is set to prioritize higher counts (the second element of the array [num, count])
    const heap = new MaxPriorityQueue<number[]>(([num, count]) => count); 
    const result = [];

    // 1. Populate map: O(n)
    for(const n of nums){
        frecuencyHash.set(n, (frecuencyHash.get(n) || 0) + 1 )    
    }

    // 2. Populate heap: O(m log m), where m is the number of unique elements
    for (const [num, frequency] of frecuencyHash) { // Note: Corrected variable name from 'repeatedHash'
        heap.enqueue([num, frequency]);
    }

    // 3. Extract top k elements: O(k log m)
    for (let i = 0; i < k; i++) {
        // We use 'as number[]' since the heap stores arrays of numbers
        const [num, count] = heap.dequeue() as number[]; 
        result.push(num);
    }

    return result;
};
```
</details>