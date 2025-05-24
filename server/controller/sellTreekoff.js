const prisma = require("../config/prisma");

exports.CreateUserTreekoff = async (req, res) => {
  try {
    const { username, phonenumber } = req.body;
    console.log(req.body);
    if (!username || !phonenumber) {
      return res.send("Username or Phonenumber Requier!!");
    }

    await prisma.customer.create({
      data: {
        username: username,
        phonenumber: phonenumber,
        point: {
          create: {
            point: 0,
          },
        },
      },
    });
    res.send("Create User Sucess.");
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "error server" });
  }
};

exports.getUser = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id || id === null) {
      return res.send(`Define the ID frist !!`);
    }

    const user = await prisma.customer.findFirst({
      where: { id:Number(id) },
      include: { point: true },
    });
    const latestBill = await prisma.customerBill.findFirst({
      where: { customerId: Number(id) },
      orderBy: { createAt: "desc" },
    });

    if (!user) {
      return res.json({ message: "This User is not exit !" });
    }

    res.json({
      ...user,
      bill: latestBill || null, // attach bill as a single object
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: `server error` });
  }
};

exports.createBill = async (req, res) => {
  try {
    const { userId } = req.body;
    if (userId !== 9001) {
      const check = await prisma.customerBill.findFirst({
        where: {
          customerId: Number(userId),
        },
      });
      if (check) {
        return res.send(check);
      }
    }
    const bill = await prisma.customerBill.create({
      data: {
        customerId: Number(userId),
      },
    });
    console.log(bill);
    res.send(bill);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: `server error` });
  }
};

exports.deleteBill = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    if (!id) {
      return res.send("need ID");
    }
    await prisma.customerBill.delete({
      where: {
        id: Number(id),
      },
    });
    res.send("DELETE BILL SUCCESS!");
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "server error" });
  }
};

exports.createWaitOrder = async (req, res) => {
  const { brachId } = req.body;
  try {
    const has200 = await prisma.waitOrder.findFirst({
      where: {
        brachId: Number(brachId),
        waitNumber: 5,
      },
    });

    if (has200) {
      await prisma.waitOrder.deleteMany({
        where: {
          brachId: Number(brachId),
        },
      });

      // Step 3: Create a new wait order starting at 1
      const newWait = await prisma.waitOrder.create({
        data: {
          brachId: Number(brachId),
          waitNumber: 1,
        },
      });
      return res.send(newWait);
    }

    // Step 4: If not, continue normal queueing
    const lastOrder = await prisma.waitOrder.findFirst({
      where: { brachId: Number(brachId) },
      orderBy: { waitNumber: "desc" },
    });

    const nextWaitNumber = lastOrder ? lastOrder.waitNumber + 1 : 1;

    const continueWait = await prisma.waitOrder.create({
      data: {
        brachId: Number(brachId),
        waitNumber: nextWaitNumber,
      },
    });
    res.send(continueWait);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: `server error` });
  }
};

exports.createBrach = async (req, res) => {
  try {
    const { name } = req.body;
    const createBrachs = await prisma.brach.create({
      data: {
        name: name,
      },
    });
    res.send(createBrachs);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: `server error` });
  }
};
