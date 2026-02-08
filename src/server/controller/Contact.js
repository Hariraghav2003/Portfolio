const { contactUsInquiry } = require("../services/Emailservice");

exports.contactMe = async (req, res) => {
  try {
    const { payload } = req.body;
    const { name, email, message } = payload;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }
    await contactUsInquiry(name, email, message);
    return res.json({ message: "Inquiry submitted successfully!" });
  } catch (error) {
    console.error("Error in contactMe endpoint:", error);
    return res.status(500).json({ error: "Internal server error",errorDetails: error.message});
  }
};
