function twoSum(nums: number[], target: number): number[] {
    let count = 0;
    let gap = count + 1;

    while(count <= nums.length -1){
        
        if((nums[count] + nums[gap]) === target && count != gap){
             return [count, gap];
        }

        if(gap < nums.length -1){
            gap++;
        } else {
            count++; gap=count+1;
        }
            
    }

    return [];
};

function twoSumBest(nums:number[],target:number){
    const indices: Map<number,number> = new Map<number,number>();

    for (let i = 0; i < nums.length; i++) {
            indices.set(nums[i], i);
    }

    for(let i:number = 0; i<nums.length; i++){
        let diff = target - nums[i];
        if(indices.get(diff) !== undefined && indices.get(diff)!==i){
            return [i,indices.get(diff)];
        }
    }

    return [];
}

function twoSumOptimized(nums: number[], target: number): number[] {
    const indices: { [key: number]: number } = {}; // valor -> índice

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const diff = target - num;

        // 1. BUSCAR: Si la 'diff' ya está en el mapa, hemos encontrado la pareja.
        if (indices[diff] !== undefined) {
            // El índice menor (el de 'diff') ya estaba almacenado.
            // La solución pide el índice menor primero.
            return [indices[diff], i]; 
        }

        // 2. ALMACENAR: Si no se encuentra, almacenamos el número actual para futuras búsquedas.
        indices[num] = i;
    }

    return []; // Nunca se alcanza si se asume que siempre hay una solución
}