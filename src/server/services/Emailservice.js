const nodemailer = require("nodemailer");
require("dotenv").config();

const transPorter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true only for 465
  auth: {
    user: process.env.EMAILUSER,
    pass: process.env.EMAILPASS,
  },
});

const contactUsInquiry = (name, email, message) => {
  const mailOptions = {
    from: process.env.FROM_MAIL,
    to: process.env.SUPPORT_EMAIL,
    subject: `Someone contacted you from the portfolio website -${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
        <h2 style="color: #000;">📩 New Contact Us Inquiry</h2>

        <p>A user has just submitted an inquiry through the Contact Us form. Here are the details:</p>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>
        <blockquote style="border-left: 4px solid #000; padding-left: 10px; color: #555;">
          ${message}
        </blockquote>
      </div>
    `,
  };
  return new Promise((resolve, reject) => {
    transPorter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error in sending inquiry email:", error);
        reject(error);
      } else {
        console.log("Inquiry email sent to support:", info.response);
        resolve(info.response);
      }
    });
  });
};

module.exports = {
  contactUsInquiry,
};
