// Importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose()

// Criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
// Utlilizar o objeto de banco de dados para nossa operações
db.serialize(() => {
  
  // Com comandos SQL eu vou:

  // 1. Criar uma tabela
  // db.run(`
  //   CREATE TABLE IF NOT EXISTS places (
  //     id INTEGER PRIMARY KEY AUTOINCREMENT,
  //     image TEXT,
  //     name TEXT,
  //     address TEXT,
  //     address2 TEXT,
  //     state TEXT,
  //     city TEXT,
  //     itens TEXT
  //   );
  // `)

  // // 2. Inserir dados na tabela
  // const querry = `
  //   INSERT INTO places (
  //     image,
  //     name,
  //     address,
  //     address2,
  //     state,
  //     city,
  //     itens
  //   ) VALUES (?, ?, ?, ?, ?, ?, ?);
  // `

  // const values = [
  //   "https://images.unsplash.com/photo-1481761289552-381112059e05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=861&q=80",
  //   "papersider",
  //   "Guilherme Genballa, Jardim América",
  //   "N° 260",
  //   "Santa Catarina", 
  //   "Rio do Sul",
  //   "Papéis e Papelão"
  // ]

  // function afterInsertData(err) {
  //   if(err) {
  //     return console.log(err)
  //   }

  //   console.log("Cadastrado com sucesso")
  //   console.log(this)
  // }

  // db.run(querry, values, afterInsertData)

  // 3. Consultar dados na tabela
  // db.all(`SELECT name FROM places`, function(err, rows) {
  //   if(err) {
  //     return console.log(err)
  //   }

  //   console.log("Aqui estão seus registros: ")
  //   console.log(rows)
  // })

  // 4. Deletar um dado
  // db.run(`DELETE FROM places WHERE id = ?`, [12], function(err) {
  //   if(err) {
  //     return console.log(err)
  //   }

  //   console.log("Registro deletado com sucesso")
  // })
})