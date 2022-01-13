module.exports = function reverse (n) {
    //let reverseNumber = n.toString();
    let k = Math.abs(n);
    k = k + '';
 
     return Number(k.split('').reverse().join(''));
   /*   let result = '';
     for (let i = 0; i<n.length/2; i++) {
         let first =  n[i];
         let last = n[n.length-1];
         result = 

     } */
}
