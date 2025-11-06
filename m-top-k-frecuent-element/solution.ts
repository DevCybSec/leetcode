function topKFrequent(nums: number[], k: number): number[] {

    const frecuencyHash: Map<number,number> = new Map<number,number>();
    const heap = new MaxPriorityQueue<number[]>(([num, count]) => count);
    const result = [];

    //Populate map
    for(const n of nums){
        frecuencyHash.set(n, (frecuencyHash.get(n) || 0) + 1 )    
    }

    //Populate heap.
    for (const [num, frequency] of repeatedHash) {
        heap.enqueue([num, frequency]);
    }

    //Populate result
    for (let i = 0; i < k; i++) {
        const [num, count] = heap.dequeue() as number[];
        result.push(num);
    }

    return result;
};

function topKFrequentBucketSort(nums: number[], k: number): number[] {
    const frequencyMap: Map<number, number> = new Map();
    

    const buckets: number[][] = Array(nums.length + 1).fill(null).map(() => []);
    const result: number[] = [];

    // 1. Conteo de Frecuencias: O(n)
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // 2. Colocación en Cubetas: O(m)
    // m = número de elementos únicos (m <= n)
    for (const [num, frequency] of frequencyMap) {
        // Colocamos el número en la cubeta correspondiente a su frecuencia.
        buckets[frequency].push(num);
    }

    // 3. Extracción de los Top K: O(n) en el peor caso
    // Iteramos las cubetas de mayor a menor frecuencia.
    // El índice 'i' representa la frecuencia.
    for (let i = buckets.length - 1; i >= 1 && result.length < k; i--) {
        // Si la cubeta en la frecuencia 'i' tiene números, los añadimos al resultado.
        if (buckets[i].length > 0) {
            for (const num of buckets[i]) {
                if (result.length < k) {
                    result.push(num);
                }
            }
        }
    }

    return result;
};