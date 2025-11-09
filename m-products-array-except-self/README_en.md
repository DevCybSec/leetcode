# Product of Array Except Self

Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` **except** `nums[i]`.

You must write an algorithm that runs in $O(n)$ time and **without using the division operation**.

### Example 1:

> Input:
> nums = [1,2,3,4]
>
> Output: [24,12,8,6]

Explanation:

  - `answer[0]` is `2 * 3 * 4 = 24`
  - `answer[1]` is `1 * 3 * 4 = 12`
  - `answer[2]` is `1 * 2 * 4 = 8`
  - `answer[3]` is `1 * 2 * 3 = 6`

### Constraints:

  - `2 <= nums.length <= 10^5`
  - `-30 <= nums[i] <= 30`
  - The product of any prefix or suffix of `nums` (including the whole array) is guaranteed to fit in a 32-bit integer.

  [Auxiliar reading](https://devcybsec.com/es/contenido/ca1ed722-60a2-45b5-914c-17884bcce6d5)

<details>
<summary>Hint 1</summary>
A brute-force solution would be to iterate through the array with index i and compute the product of the array except for that index element. This would be an O(n^2) solution. Can you think of a better way?
</details>

<details>
<summary>Hint 2</summary>
Is there a way to avoid the repeated work? Maybe we can store the results of the repeated work in an array.
</details>

<details>
<summary>Hint 3</summary>
We can use the prefix and suffix technique. First, we iterate from left to right and store the prefix products for each index in a prefix array, excluding the current index's number. Then, we iterate from right to left and store the suffix products for each index in a suffix array, also excluding the current index's number. Can you figure out the solution from here?
</details>

<details>
<summary>Hint 4</summary>
We can use the stored prefix and suffix products to compute the result array by iterating through the array and simply multiplying the prefix and suffix products at each index.
</details>

<details>
<summary>My Solution</summary>
[auxiliar](https://devcybsec.com/en/contenido/ca1ed722-60a2-45b5-914c-17884bcce6d5)

```javascript
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let postFix = new Array(nums.length).fill(0);
        let preFix = new Array(nums.length).fill(0);
        let result = new Array(nums.length).fill(0);

        let total = 1;
        // 1. Calculate Prefix products (left-to-right)
        for(let i =0; i<=nums.length-1;i++){
            total *= nums[i];
            preFix[i]=total;
        }
        
        total = 1;
        // 2. Calculate Postfix (Suffix) products (right-to-left)
        for(let i=nums.length-1; i >= 0; i--){
            total *= nums[i];
            postFix[i]=total;
        }
        
        // 3. Calculate the final result
        for(let i = 0; i < nums.length; i++){
            result[i]=this.calculate(i, preFix, postFix);
        }

        return result;
    }

    // Helper function to handle edge cases (indices 0 and n-1)
    calculate(index, preFix, postFix){
        if(index == 0)
            return postFix[1]; // Product is the suffix starting at index 1

        if(index == preFix.length-1)
            return preFix[preFix.length-2]; // Product is the prefix ending at index n-2

        return preFix[index-1] * postFix[index+1]; // General product: (Prefix up to i-1) * (Suffix from i+1)
    }
}
```

</details>