const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();


router.get("/sol1", function (req, res) {
  
    let arr= [1,2,3,5,6,7]
     let n = arr.length;
     let missingNumber = ((n + 2) * (n + 1)) / 2;
  for (let i = 0; i < n; i++) {
      missingNumber = missingNumber - arr[i];
     }
    res.send( { data: missingNumber } );
})

router.get("/sol2", function (req, res) {
  
    let arr= [33,34, 35, 37, 38];
    let missing=0;
    for(let i=0;i<arr.length;i++){
      if((arr[i+1]-arr[i])!=1){
           missing=arr[i]+1;
           break;
      }
    }
    res.send(`array = ${arr}and missing = ${missing}`);
})
module.exports = router;