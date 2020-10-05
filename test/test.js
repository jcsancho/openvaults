const { ethers } = require("ethers");
const TrojanCoinAfter = artifacts.require("TrojanCoinAfter");
const BN = require('bn.js');

const truffleAssert = require('truffle-assertions');

console.log('starting...')

contract("Testing ", async(accounts) => {

 var account0 = accounts[0];
 var account1 = accounts[1];

 it("#1 check contract address", async function() {
   contractTrojan = await TrojanCoinAfter.deployed();
   console.log('Contract address: ', contractTrojan.address)
   let owner = await contractTrojan.owner.call()
   console.log("Owner: ", owner, account1);
   assert.equal(owner, account0, "owner accounts does not match")
 })

 it("#2 check transfer", async function() {
        beforeBalance =  await contractTrojan.balanceOf.call(account0)
        console.log("Before Transfer Balance: "+ beforeBalance );
        contractTrojan.transfer(account1 , '1000000000000000000000' );
        afterTransferBalance =  await contractTrojan.balanceOf.call(account0)
        var res = beforeBalance.sub(afterTransferBalance);
        console.log("After transfer Balance: "+ afterTransferBalance  );
        console.log("Diff " + res.toString() );
        assert.notEqual(res.toString(), 0, "Transfer was not successful")
 })

/*
 it("#3 check price", async function() {
         let answer = 0;
         answer=parseInt(await contractTrojan.getAnswers.call());
         console.log("rate: " + answer)
         assert.notEqual(answer.toString(), 0, "Price was not successful")
 })
*/

});
