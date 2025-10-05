import { readFileSync, writeFileSync } from "fs";
import StatusPeça from "./statusPeça.js";
import TipoPeça from "./tipoPeça.js";
import { parse } from "path";

export default class Peça{
    nome: string;
    tipo: TipoPeça;
    fornecedor: string;
    status: StatusPeça;

    constructor(nome: string, tipo: TipoPeça, fornecedor: string, status: StatusPeça){
        this.nome = nome;
        this.tipo = tipo;
        this.fornecedor = fornecedor;
        this.status = status;
    }

    public AtualizarStatus(status: StatusPeça){
        this.status = status;
    }

    public salvar(arquivo: string){
        const informaçoes = `${this.nome} ${this.tipo.num} ${this.fornecedor} ${this.status.num}`

        writeFileSync(arquivo, informaçoes, "utf-8");
    }

    public carregar(arquivo: string){
        const txt = readFileSync(arquivo, "utf-8");
        const conteudo = txt.split(" ");

        this.nome = conteudo[0];
        this.tipo = new TipoPeça(parseInt(conteudo[1]))
        this.fornecedor = conteudo[2];
        this.status = new StatusPeça(parseInt(conteudo[3]))
    }

    public detalhe(){
        return `
=> Peça ${this.nome}
   Tipo: ${this.tipo.tipo}
   Fornecedor: ${this.fornecedor}
   Status: ${this.status.status}
        `
    }
}