# Anagrama Válido

Dadas dos cadenas `s` y `t`, devuelve `true` si las dos cadenas son anagramas una de la otra, de lo contrario devuelve `false`.

Un **anagrama** es una cadena que contiene exactamente los mismos caracteres que otra cadena, pero el orden de los caracteres puede ser diferente.

### Ejemplo 1:

>Input: s = "racecar", t = "carrace"
>
>Output: true

### Ejemplo 2:

>Input: s = "jar", t = "jam"
>
>Output: false

### Restricciones:

- `s y t consisten en letras minúsculas del inglés.`


<details>
    <summary>Pista 1</summary>
    Una solución de fuerza bruta sería ordenar las cadenas dadas y verificar su igualdad. Esta sería una solución O(n log n + m log m). Aunque esta solución es aceptable, ¿se te ocurre una forma mejor sin ordenar las cadenas dadas?
</details>

<details>
    <summary>Pista 2</summary>
    Por la definición de anagrama, podemos reorganizar los caracteres. ¿Importa el orden de los caracteres en ambas cadenas? Entonces, ¿qué es lo que importa?
</details>

<details>
    <summary>Pista 3</summary>
    Podemos simplemente considerar mantener la frecuencia de cada carácter. Podemos hacer esto usando dos tablas hash separadas para las dos cadenas. Luego, podemos verificar si la frecuencia de cada carácter en la cadena 's' es igual a la de la cadena 't' y viceversa.
</details>

<details>
    <summary>Mi Aprox.</summary>

```typescript
function isAnagram(s: string, t: string): boolean {
    
    if(s.length != t.length)
        return false
    
    let ascii: number[] = new Array(26).fill(0);
    let aChar = 'a';
    for(let i = 0; i<s.length; i++){
        ascii[s.charCodeAt(i)-aChar.charCodeAt(0)]--;
        ascii[t.charCodeAt(i)-aChar.charCodeAt(0)]++;
    }

    for(const value of ascii){
        if(value!=0)
            return false;
    }

    return true;
};
```
</details>