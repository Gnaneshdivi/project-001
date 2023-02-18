////d4061fb759f7c29a96d572a808854f0933e897e678278207b268c6c67fe3f156-- testing 
var Web3 = require('web3');
var fs = require('fs');
const web3 = new Web3('https://polygon-mumbai.g.alchemy.com/v2/fxh78ToOkJEi7c6j5lnxXhy64mOTLLLp');
var SmartContractAddress = "0xCB66858e6e833132a2467e36345a7202cb7B407F";
const gasPrice =  web3.eth.getGasPrice();
const gasLimit = 300000;
let apijson = fs.readFileSync("./resources/abi.json");
var SmartContractABI = JSON.parse(apijson);
const contract = new web3.eth.Contract(SmartContractABI, SmartContractAddress);
const read_tramsaction = async function (privatekey) {
    web3.eth.accounts.wallet.add(privatekey);
    contract.methods.getTransactionData('gnanesh').call( (err, result) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(result);
        return result;

      });
      
};

const write_tramsaction = async function (privatekey) {
    web3.eth.accounts.wallet.add(privatekey);
    contract.methods.recordTransaction('gnanesh','234','123','123','123',100,'123','123','123').send({
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
};

module.exports = {
    read_tramsaction,write_tramsaction
 }