//quiz 1; find the last element of the following arrays
arr1 = [3,7,34,90,12];
arr2 = [true,"green","where",12,56];

let last = arr1[arr1.length-1];
console.log(last);
let last2 = arr2[arr2.length-1];
console.log(last2)

// quiz 2; write a js program that will join the following array elements into into a string

myPets = ["Cow","Bird","Snake","Dog"];
const text = myPets.join();

console.log(text);

//quiz3; write a js script to sort the following array items
var arr3 = [-5,9,5,3,2,-3,6,8,4,1];
const numbers =arr3.sort();

console.log(numbers);

//quiz4; remove duplicates from the array
var arr = ["apple","mango","apple","orange","mango","mango"];
function removeDuplicates(arr){
    return [...new Set(arr)];
}
console.log(removeDuplicates(arr));

function findDuplicates(arr){
    return arr.filter((currentValue,currentIndex) => arr.indexOf(currentValue) !==currentIndex);
    }
    console.log(findDuplicates(arr));

    //quiz5; search for the following word in array
    let arr5 = ["the","way","x",4];
    let value = "we";
    if(arr5.includes(value)){
        console.log(value );

    }
    else{
        console.log("the word was not found");
    }






    //quiz6; sort a string
    let word = "sevink";
    const wor = word.split('').sort().join('');

    console.log(wor);
