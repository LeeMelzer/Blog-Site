const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/Auth");
const usersRoute = require("./routes/Users");
const postsRoute = require("./routes/Posts");
const categoryRoute = require("./routes/Categories");
const multer = require("multer");
const path = require("path");

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname,"/images")))

mongoose
    .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
}).then(console.log("Connected to MongoDB")).catch(err=>console.log(err));

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, "images");
    }, 
    filename:(req,file,cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"),(req,res) => {
    res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/categories", categoryRoute);

app.listen("5000", ()=>{
    console.log("Backend is running.");
});

