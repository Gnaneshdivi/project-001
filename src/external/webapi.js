var router = require('express').Router();
const signup= require("../auth/signup");
// create account 
// update pin 
// exchange 
// set upi primary
// set wallet primary 
// whatsapp bot 
// telegram bot
router.get('/user/:id', async function(req, res) {
    console.log(req.params.id);
    var result = await signup.get_user(req.params.id);
    console.log(result)
    if(result==false){
        res.send("User not Found");
    }
    res.send(result)
    

  });
  router.post('/createuser', async function(req, res) {
    var result=await signup.createuser(req.body.phone,req.body.name,"","",req.body.uuid);
    if (result){
res.send(result);

    }
  });
  router.post('/update_pin', function(req, res) {
    var result=signup.updatepin(req.body.id,req.body.pin);
    if(result==true){
        res.send("success");
    }
    res.send("failure");
  });  
  router.post('/exchange', function(req, res) {
    console.log("lreached");
  });  
  router.post('/set_upi_primary', function(req, res) {
    var result=signup.updateupi(req.body.id,req.body.upi);
    if(result==true){
        res.send("success");
    }
    res.send("failure");
  });  
  router.post('/set_wallet_primary', function(req, res) {
    var result=signup.updatewallet(req.body.id,req.body.wallet);
    if(result==true){
        res.send("success");
    }
    res.send("failure");
  });  
  router.post('/whatsapp_bot', function(req, res) {
    var result=signup.updatewhatsapp(req.body.id,req.body.whatsappstatus);
    if(result==true){
        res.send("success");
    }
    res.send("failure");
  });  
  router.post('/telegram_bot', function(req, res) {
    var result=signup.updatetelegram(req.body.id,req.body.telegramstatus);
    if(result==true){
        res.send("success");
    }
    res.send("failure");
  });  


module.exports = router;  



