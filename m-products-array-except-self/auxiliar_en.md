
# 📚 Prefix Sum and Suffix Sum Algorithm

The **Prefix Sum** and **Suffix Sum** technique is a powerful array preprocessing tool used to optimize the querying of sums, products, or any other cumulative operation over subarrays. By pre-calculating these results, the time complexity of queries is reduced from $O(N)$ to just $O(1)$.

-----

## 💡 Core Concept and Definition

The central idea is to create auxiliary arrays that store the accumulated value from one end of the original array up to each position.

### 1\. Prefix Sum Array

A **Prefix Sum** array (`PrefixSum`) stores the sum of all elements from index $0$ up to index $i$. It is calculated from **left to right**.

$$\text{PrefixSum}[i] = \sum_{k=0}^{i} \text{OriginalArray}[k]$$

**Example:**

  * **Original Array ($A$):** $[1, 2, 3, 4, 5]$
  * **PrefixSum ($P$):** $[1, 3, 6, 10, 15]$

### 2\. Suffix Sum Array

A **Suffix Sum** array (`SuffixSum`) stores the sum of all elements from index $i$ to the end of the array. It is calculated from **right to left**.

**Example:**

  * **Original Array ($A$):** $[1, 2, 3, 4, 5]$
  * **SuffixSum ($S$):** $[15, 14, 12, 9, 5]$

-----

## ⚙️ Key Algorithmic Applications

The technique's value lies in transforming how accumulated information is accessed.

### 1\. Subarray Sum in $O(1)$

To find the sum of a subarray spanning from index `i` to `j` (inclusive) using the Prefix Sum array ($P$):

$$\text{Sum}(i, j) = P[j] - P[i-1]$$

(If $i=0$, the sum is simply $P[j]$).

### 2\. Product of Array Except Self

In problems requiring the product of all elements except the current one (like the "Product of Array Except Self" challenge), combining prefix and suffix products allows for an $O(N)$ solution without division.

To get the total product of all elements except $\text{OriginalArray}[i]$, we multiply the accumulated product *before* $i$ by the accumulated product *after* $i$:

$$\text{Result}[i] = (\text{Prefix Product up to } i-1) \times (\text{Suffix Product from } i+1)$$

-----

## 📈 Complexity and Efficiency

The main benefit of using Prefix and Suffix Sums is the radical improvement in query complexity.

| Operation | Time Complexity |
| :--- | :--- |
| **Preprocessing** (Creating the Arrays) | $O(N)$ |
| **Query** (Calculating Subarrays/Products) | $O(1)$ |

This ensures that an algorithm that might originally be quadratic ($O(N^2)$) due to multiple sum or product queries becomes a **linear ($O(N)$)** algorithm overall.

-----

## 💻 Implementation Example (Pseudocode)

Here is how a Prefix Sum array is calculated in a single pass:

```pseudocode
function CalculatePrefixSum(nums):
    n = length(nums)
    prefix_sum = new_array(n)
    accumulated_sum = 0

    for i from 0 to n-1:
        accumulated_sum = accumulated_sum + nums[i]
        prefix_sum[i] = accumulated_sum

    return prefix_sum
```