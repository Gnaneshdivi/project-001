const web3= require("../helpers/web3")
require('dotenv').config();
var key=process.env.AUTHTOKEN;
const transaction = async function (id,sender,receiver,amount) {
    var txref1;
    var txref2;
    web3.write_tramsaction(key,"57687",sender,receiver,txref1,txref2,amount,"c","u","polygon");

}
module.exports = {
    transaction
 }