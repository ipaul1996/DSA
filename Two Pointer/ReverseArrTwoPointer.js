//Two Pointer Technique for reversing an array
//We can also reverse a string in a same fashion

let arr = [1, 5, 10, 15, 20, 25, 30, 35, 40];

function reversing(array) {

    let left = 0;

    let right = array.length-1;

    while(left<right) {

        swap(array, left, right);

        left++;

        right--;

    }

    return array;

};

function swap(array, a, b) {

    let temp = array[a];

    array[a] = array[b];

    array[b] = temp;

}

console.log(reversing(arr));

