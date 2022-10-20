const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

let persons= [
  {
  name: "PK",
  age: 10,
  votingStatus: false
},
{
  name: "SK",
  age: 20,
  votingStatus: false
},
{
  name: "AA",
  age: 70,
  votingStatus: false
},
{
  name: "SC",
  age: 5,
  votingStatus: false
},
{
  name: "HO",
  age: 40,
  votingStatus: false
}
]

router.post("/solution", function (req, res) {
  
   let votingAge=req.query.votingAge;
   const result = persons.reduce((acc,cum)=>{
    if(cum.age>=votingAge){
      cum.votingStatus=true;
      acc.push(cum);
       }

    return acc;
   },[])
    res.send({updatedArray:result});
})
module.exports = router;