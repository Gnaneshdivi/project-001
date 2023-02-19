let https = require('https');
let fs = require('fs');
let { json } = require('express');
let express = require('express');
require('dotenv').config();
let bodyParser = require("body-parser");
const { time } = require('console');
const router = express.Router();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/",router);
router.use('/web', require('./src/external/webapi'));
router.use('/api', require('./src/external/api'));
const web3= require("./src/helpers/web3")
const signup= require("./src/auth/signup");
const { sign } = require('crypto');


router.post("/tran",async (req,res)=>{
  console.log(req.body);
  var aa=web3.read_tramsaction('d4061fb759f7c29a96d572a808854f0933e897e678278207b268c6c67fe3f156');
  // // res.send(aa);
  // signup.createuser("100","gnanesh","123","123@okaxis");
  // signup.updatepin("d1-100","100")
});
router.post("/create",async (req,res)=>{
 web3.write_tramsaction('d4061fb759f7c29a96d572a808854f0933e897e678278207b268c6c67fe3f156')
  // signup.createuser("100","gnanesh","123","123@okaxis");
 
});


const port = 5000;
app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 