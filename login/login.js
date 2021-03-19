const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.render("pages/login")

});

router.get("/admingrade", (req, res) => {
    res.render("pages/loginAdmgrade")

});

router.get("/adminhorario", (req, res) => {
    res.render("pages/loginAdmhorario")

});

module.exports = router;