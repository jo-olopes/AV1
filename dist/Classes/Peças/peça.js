import { readFileSync, writeFileSync } from "fs";
import StatusPeça from "./statusPeça.js";
import TipoPeça from "./tipoPeça.js";
export default class Peça {
    constructor(nome, tipo, fornecedor, status) {
        this.nome = nome;
        this.tipo = tipo;
        this.fornecedor = fornecedor;
        this.status = status;
    }
    AtualizarStatus(status) {
        this.status = status;
    }
    salvar(arquivo) {
        const informaçoes = `${this.nome} ${this.tipo.num} ${this.fornecedor} ${this.status.num}`;
        writeFileSync(arquivo, informaçoes, "utf-8");
    }
    carregar(arquivo) {
        const txt = readFileSync(arquivo, "utf-8");
        const conteudo = txt.split(" ");
        this.nome = conteudo[0];
        this.tipo = new TipoPeça(parseInt(conteudo[1]));
        this.fornecedor = conteudo[2];
        this.status = new StatusPeça(parseInt(conteudo[3]));
    }
    detalhe() {
        return `
=> Peça ${this.nome}
   Tipo: ${this.tipo.tipo}
   Fornecedor: ${this.fornecedor}
   Status: ${this.status.status}
        `;
    }
}
//# sourceMappingURL=pe%C3%A7a.js.map