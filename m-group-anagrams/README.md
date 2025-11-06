# Agrupar Anagramas
Dada un array de cadenas strs, agrupa los anagramas. Puedes devolver la respuesta en cualquier orden.

Un anagrama es una palabra o frase formada por la reordenación de las letras de otra palabra o frase diferente, utilizando exactamente todas las letras originales exactamente una vez.

**Ejemplo 1:**
>Entrada: strs = ["eat","tea","tan","ate","nat","bat"]
>
>Salida: [["bat"],["nat","tan"],["ate","eat","tea"]]

**Ejemplo 2:**
>Entrada: strs = [""]
>
>Salida: [[""]]

**Restricciones:**
- `1 <= strs.length <= 10^4`

- `0 <= strs[i].length <= 100`

- `strs[i]` consiste en letras minúsculas del inglés.

<details> <summary>Pista 1</summary> Una solución simple (naive) sería ordenar cada cadena y agruparlas usando un mapa hash. Esta sería una solución O(m * n log n). Aunque esta solución es aceptable, ¿se te ocurre una forma mejor sin ordenar las cadenas? (donde 'm' es el número de cadenas y 'n' es la longitud máxima de una cadena). </details>

<details> <summary>Pista 2</summary> Por definición de anagrama, solo nos importa la frecuencia de cada carácter en una cadena. ¿Cómo es esto útil para resolver el problema? </details>

<details> <summary>Pista 3</summary> Podemos simplemente usar un array de tamaño O(26), ya que el conjunto de caracteres es 'a' a 'z' (26 caracteres continuos), para contar la frecuencia de cada carácter en una cadena. Luego, podemos usar este array como la clave en el mapa hash para agrupar las cadenas. </details>

<details> <summary>Mi Aprox. (Clave por Frecuencia)</summary>

```typeScript

function groupAnagrams(strs: string[]): string[][] {
    const anagramMap: Map<string, string[]> = new Map(); // Clave: String de Frecuencia -> Valor: Array de Anagramas
    const aCharCode = 'a'.charCodeAt(0);

    for (const str of strs) {
        // Inicializamos un array de 26 posiciones para el conteo de a-z.
        const counts = new Array(26).fill(0); 

        // 1. Contar Frecuencia: O(n) por cadena
        for (const char of str) {
            // Calculamos el índice (0 para 'a', 1 para 'b', etc.)
            const index = char.charCodeAt(0) - aCharCode;
            counts[index]++;
        }

        // La clave es una cadena que representa el conteo exacto de cada letra (ej. "1#0#0#1#...").
        const key = counts.join('#'); 

        // 3. Agrupar: O(1)
        if (anagramMap.has(key)) {
            anagramMap.get(key)!.push(str);
        } else {
            anagramMap.set(key, [str]);
        }
    }

    // Devolver todos los valores (los grupos de anagramas) del mapa.
    return Array.from(anagramMap.values());
};
```
</details>