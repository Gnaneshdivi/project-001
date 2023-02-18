let https = require('https');
let fs = require('fs');
let { json } = require('express');
let express = require('express');
require('dotenv').config();
let bodyParser = require("body-parser");
const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/",router);
router.post("/getprivatekey",async (req,res)=>{
  console.log(req.body);
  res.send(await wallet.getprivatekey(req.body.walletaddress));
});
const port = 5000;
app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 