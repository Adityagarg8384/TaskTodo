const express= require("express");
const router= express.Router();

const {addtask, gettask, deletetask}= require("../controller/filecontroller");
const {register} = require("../controller/register");
const {login}= require("../controller/login");



router.post("/addtask",addtask);
router.get("/gettask/:id", gettask);
router.delete("/deletetask/:id", deletetask);
router.post("/register", register)
router.post("/login", login);

module.exports= router;