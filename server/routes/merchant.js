const db = require('../lib/db');

function signup(req, res) {
  const { merchants } = db.collections;
  merchants.insertOne(req.body);
  res.send({ status: 'OK' });
}

module.exports = {
  signup
};
