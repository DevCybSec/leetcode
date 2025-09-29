function twoSum(nums: number[], target: number): number[] {
    let count = 0;
    let result = false;
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