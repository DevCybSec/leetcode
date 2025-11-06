function groupAnagrams(strs: string[]): string[][] {

    let toGroup:Map<number,string[]> = new Map<number,string[]>();

    for(const str of strs){
        let key:number = 0;
        for(const char of str){
           key += char.charCodeAt(0) - 'a'.charCodeAt(0);     
        }
        toGroup.set(key, toGroup.has(key) ? [...(toGroup.get(key) || []), str] : [str]);
    }

    return [...toGroup.values()];
};

function groupAnagramsToAvoidColisions(strs: string[]): string[][] {
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

        // 2. Crear la Clave Única: O(1)
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