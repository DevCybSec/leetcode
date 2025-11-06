# K Elementos Más Frecuentes

Dado un array de enteros `nums` y un entero `k`, devuelve los `k` elementos más frecuentes. Puedes devolver la respuesta en cualquier orden.

### Ejemplo 1:

>Entrada: 
>nums = [1,1,1,2,2,3], k = 2
>
>Salida: [1,2]

Explicación: El número 1 aparece 3 veces y el 2 aparece 2 veces. Los 2 elementos más frecuentes son 1 y 2.

### Ejemplo 2:

>Entrada: nums = [1], k = 1
>
>Salida: [1]

### Restricciones:

- `1 <= nums.length <= 10^5`
- `k` está en el rango `[1, el número de elementos únicos en el array]`.
- `-10^4 <= nums[i] <= 10^4`
- La complejidad temporal de tu algoritmo **debe ser mejor que $O(n \log n)$**.

<details>
    <summary>Pista 1</summary>
    Una solución simple (naive) sería contar la frecuencia de cada número y luego ordenar el array basándose en la frecuencia de cada elemento. Después de eso, seleccionaríamos los k elementos más frecuentes. Esta sería una solución O(n log n). Aunque esta solución es aceptable, ¿se te ocurre una forma mejor?
</details>

<details>
    <summary>Pista 2</summary>
    ¿Se te ocurre un algoritmo que implique agrupar números basándose en su frecuencia?
</details>

<details>
    <summary>Pista 3</summary>
    Utiliza el algoritmo de ordenamiento por cubetas (bucket sort) para crear n cubetas, agrupando los números basándose en sus frecuencias de 1 a n. Luego, selecciona los top k números de las cubetas, comenzando desde n hasta 1.
</details>

<details>
    <summary>Mi Aprox. (Solución con Max Heap)</summary>

```typescript
function topKFrequent(nums: number[], k: number): number[] {

    const frecuencyHash: Map<number,number> = new Map<number,number>();
    // Asumiendo que MaxPriorityQueue es una estructura de datos proporcionada donde el comparador 
    // está configurado para priorizar los conteos más altos (el segundo elemento del array [num, count])
    const heap = new MaxPriorityQueue<number[]>(([num, count]) => count); 
    const result = [];

    // 1. Llenar el mapa: O(n)
    for(const n of nums){
        frecuencyHash.set(n, (frecuencyHash.get(n) || 0) + 1 )    
    }

    // 2. Llenar el heap: O(m log m), donde m es el número de elementos únicos
    for (const [num, frequency] of frecuencyHash) { // Nota: Corregido el nombre de la variable de 'repeatedHash'
        heap.enqueue([num, frequency]);
    }

    // 3. Extraer los top k elementos: O(k log m)
    for (let i = 0; i < k; i++) {
        // Usamos 'as number[]' ya que el heap almacena arrays de números
        const [num, count] = heap.dequeue() as number[]; 
        result.push(num);
    }

    return result;
};
```
</details>