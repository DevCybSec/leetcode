# 📚 Suma de Prefijos y Suma de Sufijos (Prefix Sum and Suffix Sum)

La técnica de **Suma de Prefijos** (Prefix Sum) y **Suma de Sufijos** (Suffix Sum) es una poderosa herramienta de preprocesamiento de arrays utilizada para optimizar la consulta de sumas, productos o cualquier otra operación acumulativa sobre subarrays. Al precalcular los resultados, se reduce la complejidad temporal de las consultas de $O(N)$ a tan solo $O(1)$.

-----

## 💡 Concepto y Definición

La idea central es crear arrays auxiliares que almacenen el valor acumulado desde un extremo del array original hasta cada posición.

### 1\. Array de Suma de Prefijos (Prefix Sum Array)

Un array de Suma de Prefijos (`PrefixSum`) almacena la suma de todos los elementos desde el índice $0$ hasta el índice $i$. Se calcula de **izquierda a derecha**.

$$\text{PrefixSum}[i] = \sum_{k=0}^{i} \text{ArrayOriginal}[k]$$

**Ejemplo:**

  * **Array Original ($A$):** $[1, 2, 3, 4, 5]$
  * **PrefixSum ($P$):** $[1, 3, 6, 10, 15]$

### 2\. Array de Suma de Sufijos (Suffix Sum Array)

Un array de Suma de Sufijos (`SuffixSum`) almacena la suma de todos los elementos desde el índice $i$ hasta el final del array. Se calcula de **derecha a izquierda**.

**Ejemplo:**

  * **Array Original ($A$):** $[1, 2, 3, 4, 5]$
  * **SuffixSum ($S$):** $[15, 14, 12, 9, 5]$

-----

## ⚙️ Uso en Problemas de Algoritmos

El valor de esta técnica radica en transformar la forma en que se accede a la información acumulada.

### 1\. Suma de Subarray en $O(1)$

Para encontrar la suma de un subarray que va del índice `i` al `j` (ambos inclusive) usando el array de Prefijos ($P$):

$$\text{Suma}(i, j) = P[j] - P[i-1]$$

(Si $i=0$, la suma es simplemente $P[j]$).

### 2\. Producto de Array Excepto Sí Mismo

En problemas donde se requiere el producto de todos los elementos excepto el actual (como en el desafío "Product of Array Except Self"), la combinación de productos de prefijo y sufijo permite una solución $O(N)$ sin división.

Para obtener el producto total de todos los elementos excepto $\text{ArrayOriginal}[i]$, multiplicamos el producto acumulado antes de $i$ por el producto acumulado después de $i$:

$$\text{Resultado}[i] = (\text{Producto Prefijo hasta } i-1) \times (\text{Producto Sufijo desde } i+1)$$

-----

## 📈 Complejidad y Eficiencia

El beneficio principal de usar la Suma de Prefijos y Sufijos es la mejora radical en la complejidad de las consultas.

| Operación | Complejidad Temporal |
| :--- | :--- |
| **Preprocesamiento** (Creación de los Arrays) | $O(N)$ |
| **Consulta** (Cálculo de Subarrays/Productos) | $O(1)$ |

Esto asegura que un algoritmo que originalmente podría ser cuadrático ($O(N^2)$) debido a múltiples consultas de suma o producto se convierta en un algoritmo **lineal ($O(N)$)**.

-----

## 💻 Ejemplo de Implementación del Prefijo (Pseudocódigo)

```pseudocode
función CalcularSumaDePrefijos(nums):
    n = longitud(nums)
    prefix_sum = nuevo_array(n)
    suma_acumulada = 0

    para i de 0 hasta n-1:
        suma_acumulada = suma_acumulada + nums[i]
        prefix_sum[i] = suma_acumulada

    retornar prefix_sum
```