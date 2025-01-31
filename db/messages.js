const pool = require("./pool");

async function addMessage(message, username) {
  await pool.query("INSERT INTO messages (text, username) VALUES ($1, $2)", [message, username]);
}

async function getAllMessages(username) {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessageByID(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
  return rows;
}

module.exports = {
  addMessage,
  getAllMessages,
  getMessageByID
};
