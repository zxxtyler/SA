import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async listLivros() {
    const livros = await sql`select * from velhinhos`;
    return livros;
  }

  async createVelho(velho) {
    const id = randomUUID();
    console.log('id', id);
    const nome = velho.nome;
    const nascimento = velho.nascimento;
    const telefone = velho.telefone;
    const fotoperfil = velho.fotoperfil;
    const biografia = velho.biografia;
    
    await sql`insert into velhinhos (id, nome, nascimento, telefone, fotoperfil, biografia)
    values (${id}, ${nome}, ${nascimento}, ${telefone}, ${fotoperfil}, ${biografia})`
  }

  async updateVelho(id, velho) {
    const nome = velho.nome;
    const nascimento = velho.nascimento;
    const telefone = velho.telefone;
    const fotoperfil = velho.fotoperfil;
    const biografia = velho.biografia;

    await sql`update velhos set 
        nome = ${nome},
        nascimento = ${nascimento},
        telefone = ${telefone},
        fotoperfil = ${fotoperfil}
        biografia = ${biografia},
        where id = ${id}
    `;
  }

  async deleteVelho(id) {
    await sql`delete from velhos where id = ${id}`
  }

}