const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {res.render('home')})
router.get("/login", (req, res) => {res.render('login')})
router.get("/register", (req, res) => {res.render('register')})
router.get("/createalbum", (req, res) => {res.render('createalbum')})
router.get("/store", (req, res) => {res.render('store')})
router.get("/myCollection", (req, res) => {res.render('mycollection')})
router.get("/adminAlbums", (req, res) => {res.render('adminalbums')})

module.exports = router;