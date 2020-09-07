const { ethers } = require("ethers");
//var assert = require('assert');
//describe = require('mocha').describe


const TrojanCoinAfter = artifacts.require("TrojanCoinAfter");

console.log('starting')

describe("Coin deployment and synth functionality working", () => {
  it("Can get an exachange reate from synthetix (sUSD/sETH)", async () => {

    con = new web3.eth.Contract( [{"constant":false,"inputs":[{"name":"symb","type":"string"},{"name":"tokenAddress","type":"address"},{"name":"byteCode","type":"bytes32"}],"name":"addFreeCurrency","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"fromSymbol","type":"string"},{"name":"toSymbol","type":"string"},{"name":"venue","type":"string"},{"name":"amount","type":"uint256"},{"name":"referenceId","type":"string"}],"name":"requestAsyncExchangeRateResult","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"eventName","type":"string"},{"name":"source","type":"string"},{"name":"referenceId","type":"string"}],"name":"getAsyncEventResult","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newDiv","type":"uint256"},{"name":"newMul","type":"uint256"}],"name":"updateMulDivConverter2","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"synth","type":"bytes32"},{"name":"token","type":"address"},{"name":"inputAmount","type":"uint256"}],"name":"getSynthToTokenOutputAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"symb","type":"string"},{"name":"tokenAddress","type":"address"}],"name":"addFreeToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_a","type":"string"},{"name":"_b","type":"string"}],"name":"compare","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOracle","type":"address"}],"name":"updateForexOracleAddress","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_a","type":"string"},{"name":"_b","type":"string"}],"name":"equal","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"eventName","type":"string"},{"name":"source","type":"string"}],"name":"getEventResult","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOracle","type":"address"}],"name":"updateSynthAddress","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newDiv","type":"uint256"},{"name":"newMul","type":"uint256"}],"name":"updateMulDivConverter1","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newDiv","type":"uint256"},{"name":"newMul","type":"uint256"}],"name":"updateMulDivConverter3","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"fromSymbol","type":"string"},{"name":"toSymbol","type":"string"},{"name":"venue","type":"string"},{"name":"amount","type":"uint256"}],"name":"getExchangeRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"symb","type":"string"}],"name":"removeFreeToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOracle","type":"address"}],"name":"updateEthTokenAddress","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"fundsReturnToAddress","type":"address"},{"name":"liquidityProviderContractAddress","type":"address"},{"name":"tokens","type":"string[]"},{"name":"amount","type":"uint256"},{"name":"exchanges","type":"string[]"}],"name":"arb","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"newOracle","type":"address"}],"name":"updatePremiumSubOracleAddress","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_haystack","type":"string"},{"name":"_needle","type":"string"}],"name":"indexOf","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"symb","type":"string"}],"name":"removeFreeCurrency","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOracle","type":"address"}],"name":"updateAsyncOracleAddress","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"venueToCheck","type":"string"}],"name":"isFreeVenueCheck","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"symToCheck","type":"string"}],"name":"isFree","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newAddress","type":"address"}],"name":"updateArbContractAddress","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"changeOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOracle","type":"address"}],"name":"updateAsyncEventsAddress","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenAddress","type":"address"}],"name":"getTokenDecimalCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"string"},{"name":"b","type":"string"}],"name":"compareStrings","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"eventName","type":"string"},{"name":"source","type":"string"}],"name":"requestAsyncEvent","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"symbol","type":"string"}],"name":"getTokenAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"synth","type":"bytes32"},{"name":"inputAmount","type":"uint256"}],"name":"getTokenToSynthOutputAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"source","type":"string"}],"name":"stringToBytes32","outputs":[{"name":"result","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"fromSymbol","type":"string"},{"name":"toSymbol","type":"string"},{"name":"venue","type":"string"},{"name":"amount","type":"uint256"}],"name":"requestAsyncExchangeRate","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOracle","type":"address"}],"name":"updateTokenOracleAddress2","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOracle","type":"address"}],"name":"updateSyncEventsAddress","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"symbol","type":"string"}],"name":"getSynthBytes32","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"fromSymb","type":"string"},{"name":"toSymb","type":"string"},{"name":"amount","type":"uint256"}],"name":"getFreeExchangeRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOracle","type":"address"}],"name":"updateTokenOracleAddress","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newDiv","type":"uint256"},{"name":"newMul","type":"uint256"}],"name":"updateMulDivConverter4","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"symbol","type":"string"}],"name":"getForexAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"param1","type":"string"},{"name":"param2","type":"string"},{"name":"param3","type":"string"},{"name":"param4","type":"string"}],"name":"callExtraFunction","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"}],'0x8316B082621CFedAB95bf4a44a1d4B64a6ffc336')



  let coin;
   let answer;
   coin = await TrojanCoinAfter.deployed();
   console.log(coin.address)
   answer=0;
    console.log(answer)
    answer = parseInt(await coin.getAnswers.call());
    console.log(answer)
    assert.notEqual(answer, 0, "Mainnet is not connected")


 })
});
