const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'elegancestore'
});

// Test Route
app.get("/", (req, res) => {
    res.send("Server running!");
});

// REGISTER route
app.post("/register", (req, res) => {
    const { name, contact, email, password } = req.body;

    const sql = "INSERT INTO userinfo (name, contact, email, password) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, contact, email, password], (err, result) => {
        if (err) return res.json({ status: "ERROR", error: err });

        return res.json({ status: "SUCCESS", message: "User Registered Successfully" });
    });
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    console.log("📥 Received Email:", email);
    console.log("📥 Received Password:", password);

    const sql = "SELECT * FROM userinfo WHERE email = ? AND password = ?";
    db.query(sql, [email, password], (err, data) => {

        if (err) {
            console.log("❌ DB ERROR:", err);
            return res.json({ success: false, error: err });
        }

        console.log("📤 DB Result:", data);

        if (data.length > 0) {
            return res.json({ success: true, user: data[0] });
        } else {
            return res.json({ success: false, message: "Invalid Email or Password" });
        }
    });
});

app.get("/userinfo", (req, res) => {
    const sql = "SELECT * FROM userinfo";

    db.query(sql, (err, data) => {
        if (err) return res.json({ status: "ERROR", error: err });

        return res.json(data);
    });
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
