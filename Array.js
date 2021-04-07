let arr = [1, 1, 2, 2, 5, 3, 1, 1, 10, 5, 5, 4, 7];
let i = 1;

console.log('prinlting the ums');
console.log(arr);


for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] == arr[i + 1] && arr[i] == arr[i - 1]) {
        console.log(arr[i]);
    }
    else if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
        let sumBackward = arr[i - 1];
        let sumForward = arr[i + 1];
        let currentIndexBackward = i - 2;
        let currentIndexForward = i + 2;
        //calculate backward sum
        while (sumBackward < arr[i]) {
            if(currentIndexBackward == 0)//chceck if currentbackindex is zero otherwise fall in an infinite loop
            break;
            sumBackward = sumBackward + arr[currentIndexBackward];
            currentIndexBackward--;   
        }

        //calculate forward sum
        while (sumForward < arr[i]) {
            sumForward += arr[currentIndexForward];
            currentIndexForward++;
        }

        if (arr[i] == sumForward && arr[i] == sumBackward) {
            console.log(arr[i]+ ' is the final number to print');
        }

    }

}
