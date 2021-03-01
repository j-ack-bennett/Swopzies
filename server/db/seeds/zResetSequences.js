exports.seed = (knex) => {
  // Reset the sequences in postgres
  if (knex.client.config.client == "postgresql") {
    return knex("pg_class")
      .where("relkind", "S")
      .not.where("relname", "LIKE", "%migration%")
      .select("relname")
      .debug()
      .then((sequences) => {
        return Promise.all(
          sequences.map((sequenceObj) => {
            console.log(sequenceObj)
            const sequence = sequenceObj.relname
            const table = sequence.replace("_id_seq", "")
            console.log(sequence, table)
            console.log(
              `select setval('${sequence}', (select max(id) from ${table}) + 1);`
            )
            return knex.raw(
              `select setval('${sequence}', (select max(id) from ${table}) + 1)`
            )
          })
        ).then((results) => {
          console.log(results)
        })
      })
  }
}

// # Find all sequences
// SELECT c.relname FROM pg_class c WHERE c.relkind = 'S';
// # Reset a sequence
// select setval('posts_id_seq', (select max(id) from posts) + 1);
