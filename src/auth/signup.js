let fs = require('fs');
// verify b1id 
// otp validation 
// create b1id 
// create user account in json 
// create pin for account 
const verifyid = async function (id) {
    let usersjson = fs.readFileSync("./resources/user.json");
    let users = JSON.parse(usersjson);
    for (var x in users) {
        if(users[x].d1id==id){
            
            return true;
        }
     }
     return false;

};
const validate_otp = async function (id,pin) {
    let usersjson = fs.readFileSync("./resources/user.json");
    let users = JSON.parse(usersjson);
    for (var x in users) {
        if(users[x].d1id==id && users[x].d1pin==pin ){
           
            
            return true;
        }
     }
     return false;



};
const createid = async function (phone) {
    return "d1-".concat(phone);


};
const createuser = async function (phone,name,wallet,vpa) {
    var d1id=await createid(phone);
    console.log(d1id);
    let usersjson = fs.readFileSync("./resources/user.json","utf-8");
    var body={phone_number:phone,name:name,wallet:wallet,vpa:vpa,d1id:d1id,d1pin:""};
    let users = JSON.parse(usersjson);
    users.push(body);
    usersjson = JSON.stringify(users);
    fs.writeFileSync("./resources/user.json",usersjson,"utf-8");
    return body;
};
const updatepin = async function (id,pin) {
    let usersjson = fs.readFileSync("./resources/user.json");
    let users = JSON.parse(usersjson);
    for (var x in users) {
        if(users[x].d1id==id ){
            users[x].d1pin=pin;
            console.log(users[x]);

        usersjson = JSON.stringify(users);
        fs.writeFileSync("./resources/user.json",usersjson,"utf-8");
            return true;
        }
    
     }
     return false;
    


};


module.exports = {
    updatepin,createuser,validate_otp,verifyid
 }