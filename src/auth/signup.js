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
const createuser = async function (phone,name,wallet,vpa,uuid) {
    var d1id=await createid(phone);
    console.log(d1id);
    let usersjson = fs.readFileSync("./resources/user.json","utf-8");
    var body={uuid:uuid,phone_number:phone,name:name,wallet:wallet,vpa:vpa,d1id:d1id,d1pin:"",whatsapp:false,telegram:false};
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
const updatewallet = async function (id,wallet) {
    let usersjson = fs.readFileSync("./resources/user.json");
    let users = JSON.parse(usersjson);
    for (var x in users) {
        if(users[x].d1id==id ){
            users[x].wallet=pin;
            console.log(users[x]);

        usersjson = JSON.stringify(users);
        fs.writeFileSync("./resources/user.json",usersjson,"utf-8");
            return true;
        }
    
     }
     return false;
    


};
const updateupi = async function (id,upi) {
    let usersjson = fs.readFileSync("./resources/user.json");
    let users = JSON.parse(usersjson);
    for (var x in users) {
        if(users[x].d1id==id ){
            users[x].vpa=upi;
            console.log(users[x]);

        usersjson = JSON.stringify(users);
        fs.writeFileSync("./resources/user.json",usersjson,"utf-8");
            return true;
        }
    
     }
     return false;
};
const updatewhatsapp = async function (id,status) {
    let usersjson = fs.readFileSync("./resources/user.json");
    let users = JSON.parse(usersjson);
    for (var x in users) {
        if(users[x].d1id==id ){
            users[x].whatsapp=status;
            console.log(users[x]);

        usersjson = JSON.stringify(users);
        fs.writeFileSync("./resources/user.json",usersjson,"utf-8");
            return true;
        }
    
     }
     return false;
};
const updatetelegram = async function (id,status) {
    let usersjson = fs.readFileSync("./resources/user.json");
    let users = JSON.parse(usersjson);
    for (var x in users) {
        if(users[x].d1id==id ){
            users[x].telegram=status;
            console.log(users[x]);

        usersjson = JSON.stringify(users);
        fs.writeFileSync("./resources/user.json",usersjson,"utf-8");
            return true;
        }
    
     }
     return false;
};

 const get_user = async function (id) {
    let usersjson = fs.readFileSync("./resources/user.json");
    let users = JSON.parse(usersjson);
    for (var x in users) {
        if(users[x].d1id==id ){
            
            return users[x];
        }
    
     }
     return false;
    


};


module.exports = {
    updatepin,createuser,validate_otp,verifyid,get_user,updateupi,updatewallet,updatetelegram,updatewhatsapp
 }