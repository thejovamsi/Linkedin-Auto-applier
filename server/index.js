const express = require('express');
const app  = express();
const port = 4000;
const cors = require('cors');
const dotenv= require('dotenv');
const runPuppeteer = require('./routes/Puppeteer');

// const applyRoute = require('./Routes/applyRoute');


dotenv.config();
app.use(cors());
app.use(express.json());
// app.use("/apply", applyRoute);
app.post('/job-preference', async(req, res) => {
    console.log("Received data:", req.body);
    const data=req.body;
    // res.json({ message: "Data received successfully", data: req.body});

    try{
        await runPuppeteer(data);
        res.json({ message: "data received and applying has started" });
    }
    catch(error) {
        console.error('automation error:',error);
        res.status(500).json({ error: 'Failed to apply for the job' });
    }
});

app.get('/', (req,res) =>{
    console.log("hi");
})

app.listen(port,() => {
    console.log(`the serve is listening to port ${port}`)
})