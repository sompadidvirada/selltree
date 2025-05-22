const prisma = require("../config/prisma");

exports.CreateUserTreekoff = async (req, res) => {
  try {
    const { username, phonenumber } = req.body;
    if (!username || !phonenumber) {
      return res.send("Username or Phonenumber Requier!!");
    }

    await prisma.customer.create({
      data: {
        username,
        phonenumber,
      },
    });
    res.send("Create User Sucess.");
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "error server" });
  }
};
