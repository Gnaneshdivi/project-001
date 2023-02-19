// connect upi account -- add the veriable to json 1
// connect crypto wallet -- add the veriable to json 1
// create a new wallet -- create using tatum and store secret key 
// set default sending 
// set default receiving 
const addupi = async function (id,vpa) {
    let usersjson = fs.readFileSync("./resources/user.json");
    let users = JSON.parse(usersjson);
    for (var x in users) {
        if(users[x].d1id==id ){
            users[x].vpa=vpa;

        usersjson = JSON.stringify(users);
        fs.writeFileSync("./resources/user.json",usersjson,"utf-8");
            return true;
        }
    
     }
     return false;
};
const addwallet = async function (id,wallet) {
    let usersjson = fs.readFileSync("./resources/user.json");
    let users = JSON.parse(usersjson);
    for (var x in users) {
        if(users[x].d1id==id ){
            users[x].wallet=wallet;

        usersjson = JSON.stringify(users);
        fs.writeFileSync("./resources/user.json",usersjson,"utf-8");
            return true;
        }
    
     }
     return false;
};
