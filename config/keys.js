const db = {
  username: "mydevelopmenttest7",
  password: "mydevelopmenttest7",
  database: "gym",
  cluster: "cluster0",
};

const uri = `mongodb+srv://${db.username}:${db.password}@${db.cluster}.syofxxg.mongodb.net/${db.database}?retryWrites=true&w=majority`;

module.exports = uri;
