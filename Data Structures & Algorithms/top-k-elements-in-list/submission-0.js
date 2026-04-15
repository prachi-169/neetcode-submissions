class Solution {
    topKFrequent(nums, k) {
        const map = new Map();

        // Step 1: count frequency
        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        // Step 2: create buckets
        const buckets = Array(nums.length + 1).fill().map(() => []);

        // Step 3: fill buckets
        for (let [num, freq] of map.entries()) {
            buckets[freq].push(num);
        }

        // Step 4: collect top k from high freq to low
        const result = [];

        for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
            for (let num of buckets[i]) {
                result.push(num);
                if (result.length === k) break;
            }
        }

        return result;
    }
}