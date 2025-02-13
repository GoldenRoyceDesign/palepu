const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "divyaneela75@gmail.com", // Your email address
    pass: "iazv kyqh usrb rqie", // App password (DO NOT share publicly)
  },
});

app.post("/send-email", (req, res) => {
  const { name, email, phone, reason } = req.body;

  const mailOptions = {
    from: "divyaneela75@gmail.com",
    to: "divyaneela75@gmail.com",
    subject: "New Form Submission",
    text: `You have received a new form submission:
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Reason: ${reason}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    } else {
      res.status(200).send("Email sent successfully!");
    }
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
