# Producto de Array Excepto Sí Mismo

Dado un array de enteros `nums`, devuelve un array `answer` tal que `answer[i]` es igual al producto de todos los elementos de `nums` **excepto** `nums[i]`.

Debes escribir un algoritmo que se ejecute en tiempo $O(n)$ y **sin usar la operación de división**.

### Ejemplo 1:

> Entrada:
> nums = [1,2,3,4]
>
> Salida: [24,12,8,6]

Explicación:

  - `answer[0]` es `2 * 3 * 4 = 24`
  - `answer[1]` es `1 * 3 * 4 = 12`
  - `answer[2]` es `1 * 2 * 4 = 8`
  - `answer[3]` es `1 * 2 * 3 = 6`

### Restricciones:

  - `2 <= nums.length <= 10^5`
  - `-30 <= nums[i] <= 30`
  - Se garantiza que el producto de cualquier prefijo o sufijo de `nums` (incluido el array completo) cabe en un entero de 32 bits.

[Lectura de apoyo](https://devcybsec.com/es/contenido/ca1ed722-60a2-45b5-914c-17884bcce6d5)


<details>
<summary>Pista 1</summary>
Una solución de fuerza bruta sería iterar por el array con el índice i y calcular el producto del array excepto el elemento en ese índice. Esto sería una solución O(n^2). ¿Se te ocurre una forma mejor?
</details>

<details>
<summary>Pista 2</summary>
¿Hay alguna manera de evitar el trabajo repetitivo? Tal vez podemos almacenar los resultados del trabajo repetitivo en un array.
</details>

<details>
<summary>Pista 3</summary>
Podemos usar la técnica de prefijo y sufijo. Primero, iteramos de izquierda a derecha y almacenamos los productos de prefijo para cada índice en un array de prefijos, excluyendo el número del índice actual. Luego, iteramos de derecha a izquierda y almacenamos los productos de sufijo para cada índice en un array de sufijos, también excluyendo el número del índice actual. ¿Puedes descifrar la solución a partir de aquí?
</details>

<details>
<summary>Pista 4</summary>
Podemos usar los productos de prefijo y sufijo almacenados para calcular el array de resultados, iterando por el array y simplemente multiplicando los productos de prefijo y sufijo en cada índice.
</details>

<details>
<summary>Mi Solución</summary>

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
        // 1. Calcular productos de Prefijo (de izquierda a derecha)
        for(let i =0; i<=nums.length-1;i++){
            total *= nums[i];
            preFix[i]=total;
        }
        
        total = 1;
        // 2. Calcular productos de Sufijo (de derecha a izquierda)
        for(let i=nums.length-1; i >= 0; i--){
            total *= nums[i];
            postFix[i]=total;
        }
        
        // 3. Calcular el resultado final
        for(let i = 0; i < nums.length; i++){
            result[i]=this.calculate(i, preFix, postFix);
        }

        return result;
    }

    // Función auxiliar para manejar los casos de borde (índices 0 y n-1)
    calculate(index, preFix, postFix){
        if(index == 0)
            return postFix[1]; // El producto es el sufijo que empieza en el índice 1

        if(index == preFix.length-1)
            return preFix[preFix.length-2]; // El producto es el prefijo que termina en el índice n-2

        return preFix[index-1] * postFix[index+1]; // Producto general: (Prefijo hasta i-1) * (Sufijo desde i+1)
    }
}
```
</details>
