const jim = 56;
const tim = 89;
const kim = 68;

// if(jim > tim && jim > kim){
//     console.log('jim is the ultimate boss');
// }
// else if(tim > jim && tim > kim){
//     console.log('Tim is the boss');
// }
// else{
//     console.log('Kim is the kardasians boss');
// }

                /*** or ***/

function maxOfThree(jim, tim, kim) {
    if (jim > tim && jim > kim) {
        return 'Jim is the ultimate boss';
    } else if (tim > jim && tim > kim) {
        return 'Tim is the boss';
    } else {
        return 'Kim is the kardasians boss';
    }
}
console.log(maxOfThree(jim, tim, kim));


// ANOTHER WAY TO FIND BIG NUMBER:
const max = Math.max(12, 1, 56, 5, 65, 8, 1, 99, 2);
console.log('max isuing Math.max', max);

