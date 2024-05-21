const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 2020;
const jobRoutes = require("./router/job");

app.use(express.json());

mongoose.connect("mongodb+srv://abhikainthla001:iegM6Mp6G0UAU1Y9@cluster0.4izhdwf.mongodb.net/")
.then(() => console.log("Connection with Database established successfully"))
.catch((err) => console.log("ERROR CONNECTING WITH DATABASE", err));

app.use(jobRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})