const { Router } = require("express");

const messages = [
    {
      id: 1,
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      id: 2,
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

function getNewId(){
  return Math.max(...messages.map(message => message.id)) + 1;
}

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.render("index", { title: "Mini Messageboard", messages: messages }));
indexRouter.get("/new", (req, res) => res.render("form", {title: "New Message"}));
indexRouter.post("/new", (req, res) => {
  messages.push({ id: getNewId(), text: req.body.text, user: req.body.user, added: new Date() });
  res.redirect("/");
});
indexRouter.get("/message", (req, res) => {
  const id = req.query.id;
  const returnMessage = messages[messages.findIndex(message => message.id == id)];
  if (returnMessage === undefined){
      res.status(404).send("Message not found");
      return;
  }
  res.render("viewmessage", {title: `Message ${id}`, message: returnMessage});
});

module.exports = indexRouter;
