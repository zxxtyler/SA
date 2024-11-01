import { sql } from './db.js'

sql`
  CREATE TABLE velhinhos (
      id text PRIMARY KEY,
      nome character varying(255),
      nascimento date,
      telefone character varying(255),
      fotoperfil character varying(255),
      biografia character varying(255)
  );
`.then(() => {
  console.log('tabela criada');
})