var router = require('express').Router();
// verify b1 id 
// verify b1 id with otp 
// request qr
// transfer to b1id 
    // transfer to upi id 
    // transfer to crypto wallet 
// Request to B1id 
// check balance
// get all accounts 
router.put('/verify_otp', function(req, res) {
    console.log("lreached");
  });
  router.put('/verify_b1id', function(req, res) {
    console.log("lreached");
  });
  router.put('/request_qr', function(req, res) {
    console.log("lreached");
  });
  router.put('/transfer', function(req, res) {
    console.log("lreached");
  });   
  router.put('/request', function(req, res) {
    console.log("lreached");
  });
  router.put('/balance/:id', function(req, res) {
    console.log("lreached");
  });
  router.get('/accounts', function(req, res) {
    console.log("lreached");
  });     
module.exports = router;