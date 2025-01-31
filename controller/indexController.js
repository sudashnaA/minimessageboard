const db = require("../db/messages");

async function getIndex(req, res) {
    const currentMessages = await db.getAllMessages();
    res.render("index", { title: "Mini Messageboard", messages: currentMessages })
}

async function getNew(req, res){
    res.render("form", {title: "New Message"});
}

async function postNew(req, res){
    await db.addMessage(req.body.text, req.body.username);
    res.redirect("/");
}

async function getMessage(req, res){
    const id = req.query.id;
    const returnMessage = await db.getMessageByID(id);
    if (returnMessage.length === 0){
        res.status(404).send("Message not found");
        return;
    }
    res.render("viewmessage", {title: `Message ${id}`, message: returnMessage[0]});
    res.end();
}

module.exports = {
  getIndex,
  getNew,
  postNew,
  getMessage
};
