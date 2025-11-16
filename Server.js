const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const fs = require('fs');
const multer = require('multer');
const app = express();
const path = require('path');

app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(cors());

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
app.post("/register", (req, res) => {
    const { name, contact, email, password } = req.body;

    const sql = "INSERT INTO userinfo (name, contact, email, password) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, contact, email, password], (err, result) => {
        if (err) {
            console.log("SQL Error:", err);
            return res.status(500).json({ status: "ERROR", error: err });
        }

        return res.json({ status: "SUCCESS", message: "User Registered Successfully" });
    });
});
//admin login
const ADMIN = {
  id: "elegancestore",
  password: "elegance123"
};

app.post("/adminlogin", (req, res) => {
  const { id, password } = req.body;

  if (id === ADMIN.id && password === ADMIN.password) {
    return res.json({ status: "SUCCESS", message: "Welcome Rohit Silswal" });
  } else {
    return res.status(401).json({ status: "ERROR", message: "Invalid admin credentials" });
  }
});

//user login
app.post("/login", (req, res) => {
    const { email, password } = req.body;


    const sql = "SELECT * FROM userinfo WHERE email = ? AND password = ?";
    db.query(sql, [email, password], (err, data) => {

        if (err) {
            console.log(" DB ERROR:", err);
            return res.json({ success: false, error: err });
        }

        if (data.length > 0) {
            return res.json({ success: true, user: data[0] });
        } else {
            return res.json({ success: false, message: "Invalid Email or Password" });
        }
    });
});
//get data from userinfoo sql 
app.get("/userinfo", (req, res) => {
    const sql = "SELECT * FROM userinfo";

    db.query(sql, (err, data) => {
        if (err) return res.json({ status: "ERROR", error: err });

        return res.json(data);
    });
});

//this is for filenupload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync("uploads")) fs.mkdirSync("uploads");
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

//  route for product addition
app.post("/addproduct", upload.single("image"), (req, res) => {
  const { pname, description, type, price } = req.body;
 const image = req.file ? `uploads/${req.file.filename}` : null;

  const sql = "INSERT INTO products (pname, description, type, price, image) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [pname, description, type, price, image], (err, result) => {
    if (err) {
      console.log("SQL Error:", err);
      return res.status(500).json({ status: "ERROR", error: err });
    }
    res.json({ status: "SUCCESS", message: "Product added successfully!" });
  });
});


// GET PRODUCTS
app.get("/products", (req, res) => {
  const sql = "SELECT id, image, pname, price, description FROM products";
  db.query(sql, (err, result) => {
    if (err) return res.json({ error: err });
    res.json(result);
  });
});

app.delete("/products/:id", (req, res) => {
  const productId = req.params.id;
  const q = "DELETE FROM products WHERE id = ?";

  db.query(q, [productId], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Product deleted successfully" });
  });
});

//get product by id
app.get('/products/:id', (req, res) => {
  const { id } = req.params;

  const sql = "SELECT * FROM products WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(result[0]);
  });
});
app.put('/products/:id', (req, res) => {
  const { id } = req.params;
  const { pname, type, price, description, image } = req.body;

  const sql = `UPDATE products SET pname=?, type=?, price=?, description=?, image=? WHERE id=?`;

  db.query(sql, [pname, type, price, description, image, id], (err, result) => {
    if (err) return res.status(500).json({ error: err });

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product updated successfully" });
  });
});


app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
