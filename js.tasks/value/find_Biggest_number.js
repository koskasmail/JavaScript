let nums = [4, 10, 77, 20, 3, 44];
let print_max = 0;

function find_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY;
    console.error(max_num);
    for (let num of nums) {
        if (num > max_num) {
            max_num = num;
        }
    }
    return max_num;
}
