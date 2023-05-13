let nums = [5, 10, 77, 20, 99, 44];
let print_min = 0;

function find_min(nums) {
    let min_num = Number.POSITIVE_INFINITY;
    console.error(min_num);
    for (let num of nums) {
        if (num < min_num) {
            min_num = num;
        }
    }
    return min_num;
}