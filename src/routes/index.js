const express = require("express");
const router = express.Router();

router.get("/",(req,res)  =>{
    res.render("index.html",{tienda:"Italo'sphone"});
});
///CELULARES
router.get("/Catalogo/Xiaomi-Poco-X3-HTF",(req,res)  =>{
    res.render("Celulares/Xiaomi-Poco-X3-HTF.html",{tienda:"Italo'sphone"});
});
router.get("/Catalogo/Xiaomi-Redmi-9",(req,res)  =>{
    res.render("Celulares/Xiaomi-Redmi-9.html",{tienda:"Italo'sphone"});
});
router.get("/Catalogo/Xiaomi-Redmi-9C",(req,res)  =>{
    res.render("Celulares/Xiaomi-Redmi-9C.html",{tienda:"Italo'sphone"});
});
router.get("/Catalogo/Xiaomi-Redmi-9A",(req,res)  =>{
    res.render("Celulares/Xiaomi-Redmi-9A.html",{tienda:"Italo'sphone"});
});
router.get("/Catalogo/Xiaomi-Redmi-Note-9S",(req,res)  =>{
    res.render("Celulares/Xiaomi-Redmi-Note-9S.html",{tienda:"Italo'sphone"});
});
router.get("/Catalogo/Xiaomi-Redmi-Note-9pro",(req,res)  =>{
    res.render("Celulares/Xiaomi-Redmi-Note-9pro.html",{tienda:"Italo'sphone",equipo:""});
});
router.get("/Catalogo/Xiaomi-Poco-F2",(req,res)  =>{
    res.render("Celulares/Xiaomi-Poco-F2.html",{tienda:"Italo'sphone",equipo:""});
});
router.get("/pdf",(req,res)  =>{
    res.render("Celulares/catalogo.html");
});
router.get("/local",(req,res)  =>{
    res.render("Celulares/local.html");
});
module.exports = router;