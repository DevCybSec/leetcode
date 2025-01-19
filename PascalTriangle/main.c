/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume
 * caller calls free().
 */
int** generate(int numRows, int* returnSize, int** returnColumnSizes) {
     // Allocate memory for the result
    int** result = (int**)malloc(numRows * sizeof(int*));
    if (result == NULL) {
        printf("Memory allocation failed!\n");
        return NULL;
    }

    // Allocate memory for returnColumnSizes
    *returnColumnSizes = (int*)malloc(numRows * sizeof(int));
    if (*returnColumnSizes == NULL) {
        printf("Memory allocation failed for column sizes!\n");
        free(result);
        return NULL;
    }

    for (int i = 0; i < numRows; i++) {
        // Allocate memory for each row
        result[i] = (int*)malloc((i + 1) * sizeof(int));
        if (result[i] == NULL) {
            printf("Memory allocation failed for row %d!\n", i);
            return NULL;
        }

        // Set the size of the current row
        (*returnColumnSizes)[i] = i + 1;

        // First and last elements of the row are 1
        result[i][0] = 1;
        result[i][i] = 1;

        // Calculate the intermediate elements
        for (int j = 1; j < i; j++) {
            result[i][j] = result[i-1][j-1] + result[i-1][j];
        }
    }

    // Set the return size
    *returnSize = numRows;

    return result;
}

int main(){
   int numRows = 5; // Specify the number of rows
    int returnSize; // To capture the number of rows
    int* returnColumnSizes; // To capture the size of each row
    int** pascalTriangle = generatePascalTriangle(numRows, &returnSize, &returnColumnSizes);

    // Check if memory allocation was successful
    if (!pascalTriangle || !returnColumnSizes) {
        printf("Memory allocation failed!\n");
        return 1;
    }

    // Print Pascal's Triangle
    printf("Pascal's Triangle with %d rows:\n", numRows);
    for (int i = 0; i < returnSize; i++) {
        for (int j = 0; j < returnColumnSizes[i]; j++) {
            printf("%d ", pascalTriangle[i][j]);
        }
        printf("\n");
    }

    // Free dynamically allocated memory
    for (int i = 0; i < returnSize; i++) {
        free(pascalTriangle[i]);
    }
    free(pascalTriangle);
    free(returnColumnSizes);

    return 0;
}