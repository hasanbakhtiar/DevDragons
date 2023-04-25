// if - eger 
// else - deyilse
// else if  - eger deyilse 


// const info = 10;

// if (info>100) {
//     console.log('this is true');
    
// }else if(info === "10"){
//     console.log('this is 10');
// }
// else if(info <= 10){
//     console.log('true One');
// }
// else if(info === 10){
//     console.log('true Two');
// }
// else{
//     console.log('this is false');
// }


// const pen = true;
// const mymoney = 0; 
// if (!pen) {
//     console.log('no pen');

// }else if(pen && mymoney>=20){
//     console.log('20$');

// }else if(pen && mymoney >= 1){
//     console.log('1$');
// }else{
//     console.log('cry');
// }




// const currentTime = 9;

// if (currentTime > 5 && currentTime < 12) {
//     console.log('good morning');

//     if (currentTime == 7) {
//         console.log('get up');
//     }else if(currentTime == 9){
//             console.log('have a breakfast');
//     }
    
    
// }else if(currentTime >= 12 && currentTime < 18){
//     console.log('good afternoon');

// }else if (currentTime >= 18 && currentTime <= 21) {
//     console.log('good evening');
    
// }else if(currentTime >= 22 && currentTime <= 23){
//     console.log('good night');

// }else{
//     console.log('false time');
// }




let count = 5;

switch(count){
        case 5:
            console.log('this is 5');
            count = 101;
            if (count>100) {
                console.log('success');
            }else{
                console.log('error');
            }
        break;

        case 10:
            console.log('this is 10');
        break;

        default:
            console.log('cry');
        break;
}






