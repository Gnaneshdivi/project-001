////d4061fb759f7c29a96d572a808854f0933e897e678278207b268c6c67fe3f156-- testing
var Web3 = require('web3');
var fs = require('fs');
const web3 = new Web3('https://polygon-mumbai.g.alchemy.com/v2/fxh78ToOkJEi7c6j5lnxXhy64mOTLLLp');
var SmartContractAddress = "0x6a1D67312816f68ccb602a5ce3bA33e9D2C7d4EE";
const gasLimit = 300000;
let apijson = fs.readFileSync("./resources/abi.json");
var SmartContractABI = JSON.parse(apijson);
const contract = new web3.eth.Contract(SmartContractABI, SmartContractAddress);
const read_tramsaction = async function (privatekey) {
    const gasPrice = await web3.eth.getGasPrice();
    web3.eth.accounts.wallet.add(privatekey);
    contract.methods.getTransactionData('abcd').call( (err, result) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(result);
        return result;

      });
      
};

const write_tramsaction = async function (privatekey,txnid,sender,receiver,txref1,txref2,amount,sendtype,receivetype,network) {
    const gasPrice =await  web3.eth.getGasPrice();
    web3.eth.accounts.wallet.add(privatekey);
      await contract.methods.recordTransaction(txnid,sender,receiver,txref1,txref2,amount,sendtype,receivetype,network).send({
        from: '0x3cc0cC719ea0a361Ee72cFa73B53308c974b47de',
        gas: gasLimit,
        gasPrice: gasPrice 
      }, (err, result) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(result);
        return result;
      });
    }
    


module.exports = {
    read_tramsaction,write_tramsaction
 }