# Contiene Duplicados (Fácil)

Dado un array de enteros `nums`, devuelve `true` si algún valor aparece al menos dos veces en el array, y devuelve `false` si cada elemento es distinto.

#### Ejemplo 1:

    Input: nums = [1,2,3,1]

    Output: true

    Explicación:

    El elemento 1 aparece en los índices 0 y 3.

#### Ejemplo 2:

    Input: nums = [1,2,3,4]

    Output: false

    Explicación:

    Todos los elementos son distintos.

#### Ejemplo 3:

    Input: nums = [1,1,1,3,3,4,3,2,4,2]

    Output: true


#### Restricciones:

- `1 <= nums.length <= 10<sup>5</sup>`
- `-10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>`


<details>
    <summary> pista 1 </summary>
    Una solución de fuerza bruta sería comparar cada elemento con todos los demás elementos del array. Esto sería una solución O(n^2). ¿Se te ocurre una forma mejor?
</details>    

<details>
    <summary> pista 2 </summary>
    ¿Hay alguna forma de comprobar si un elemento está duplicado sin compararlo con todos los demás? Quizás haya una estructura de datos que sea útil aquí.
</details>    

<details>
    <summary> pista 3 </summary>
   Podemos usar una estructura de datos hash, como un hash set o un hash map, para almacenar los elementos que ya hemos visto. Esto nos permitirá comprobar si un elemento es un duplicado en tiempo constante.
</details>    

<details>
    <summary> Mi Aprox. </summary>

```typescript
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