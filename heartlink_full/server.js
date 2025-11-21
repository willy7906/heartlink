const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
app.use(bodyParser.json());
app.use(express.static('.'));

// Dummy API for payment verification
app.post('/api/payment', async (req, res) => {
  const {email, phone, transactionId} = req.body;
  if(!email || !phone || !transactionId){
    return res.status(400).json({message:'Missing fields'});
  }
  // Send verification code (dummy)
  const verificationCode = Math.floor(100000 + Math.random()*900000);
  console.log(`Send code ${verificationCode} to ${email} / ${phone}`);
  // Normally use nodemailer or SMS API here
  res.json({message:`Payment submitted. Verification code sent to ${email} / ${phone}`});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));