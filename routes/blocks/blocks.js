const express = require("express");
const router = express.Router();
const axios = require("axios");
const block = require("../../repository/writeBlock");
require("dotenv").config();

const token = process.env.APPCO_TOKEN;

// router.get("/", async (req, res, next) => {
//   try {
//     await axios
//       .get(
//         `https://api.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=0x19fecc4ce1c79f30c9564ed5596fb744bf9eaa8e4c72c6cab2dc31b5c8ff4639&apikey=${token}`
//       )
//       .then((response) => {
//         res.json(response.data);
//       });
//   } catch (error) {
//     console.log("error12", error);
//   }
// });

router.get("/", async (req, res, next) => {
  try {
    const response = await axios.get(
      `https://api.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=0xd7d564&boolean=true&apikey=${token}`
    );
    const result = await block.addBlock(response.data.result);
    // console.log(result);
    res.json(result);
    //   .then((response) => {
    //     res.json(response.data);
    //   });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
