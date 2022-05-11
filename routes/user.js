const expresse = require("express");
const users = require("../users");

const userRouter = expresse.Router();

userRouter.get("/", (req, res) => {
  const d = new Date();
  let hour = d.getHours();
  if (hour > 9 && hour < 17) {
    res.render("work");
  } else {
    res.render("wenot");
  }
});

module.exports = userRouter;
