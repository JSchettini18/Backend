// database.js
const { MongoClient } = require('mongodb');


const url = "mongodb+srv://usuario_pratica:Jo5280%40@cluster0.seuhost.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(url);

let dbCached = null;

async function conectarDb() {
  if (dbCached) return dbCached;           // reutiliza conexão
  await client.connect();                  // conecta uma vez
  dbCached = client.db('agenda');          // usa o DB 'agenda'
  return dbCached;
}

module.exports = { conectarDb };
