const express = require("express"); // Az Express modul importálása, amely segít a szerver létrehozásában
const mysql = require("mysql"); /* adatbazis kapcsolodas */
const path = require("path"); /* eleresi utak kezelese */
const bodyParser = require("body-parser"); /* bejovo adatok kezelese */

const app = express(); /* express alkalmazas letrehozasa */
app.use(express.json()); /* beállítja, hogy a szerver JSON formátumú adatokat tudjon fogadni a kliensről */

// Adatbázis kapcsolat létrehozása
const db = mysql.createConnection({
    user: "root",// Az adatbázis felhasználóneve
    host: "localhost",// Az adatbázis szerver címe
    port: 3307,// Az adatbázis szerver portja
    password: "", // Az adatbázis felhasználó jelszava
    database: "fogado",// Az adatbázis neve
}); 


// Main Api
app.get("/", (req, res) => {
    res.send("Fut a backend!");
});

app.get("/szobak", (req, res) => {
    const sql = "SELECT DISTINCT sznev, agy FROM foglalasok INNER JOIN szobak ON foglalasok.szoba = szobak.szazon INNER JOIN vendegek ON foglalasok.vendeg = vendegek.vsorsz;";
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result)
    })
});

app.get("/kihasznaltsag", (req, res) => {
    const sql = "SELECT szobak.sznev AS szoba, COUNT(foglalasok.vendeg) AS vendegek, SUM(DATEDIFF(foglalasok.tav, foglalasok.erk)) AS vendeg_ejszakak FROM foglalasok INNER JOIN szobak ON foglalasok.szoba = szobak.szazon GROUP BY szobak.sznev ORDER BY vendeg_ejszakak DESC, vendegek ASC;";
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result)
    })
});

app.get("/foglaltsag", (req, res) => {
    const sql = "SELECT vendegek.vnev AS 'Vendegnev',sznev AS 'Szobanev',foglalasok.erk AS 'Erkezes',foglalasok.tav AS 'Tavozas' FROM `szobak` INNER JOIN foglalasok ON szobak.szazon = foglalasok.szoba INNER JOIN vendegek ON foglalasok.vendeg = vendegek.vsorsz ORDER BY Vendegnev ASC;";
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result)
    })
});

// Szerver indítása a 3001-es porton
app.listen(3001, () => {
    console.log("Server is running on port 3001");// Log üzenet a szerver indításáról
});