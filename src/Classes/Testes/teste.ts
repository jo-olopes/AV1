import { readFileSync, writeFileSync } from "fs";
import ResultadoTeste from "./resultadoTeste.js";
import TipoTeste from "./tipoTeste.js";

export default class Teste{
    tipo: TipoTeste;
    resultado: ResultadoTeste;

    constructor(tipo: TipoTeste, resultado: ResultadoTeste){
        this.tipo = tipo;
        this.resultado = resultado;
    }

    public salvar(arquivo: string){
        const informaçoes = `${this.tipo.num} ${this.resultado.num}`

        writeFileSync(arquivo, informaçoes, "utf-8");
    }

    public carregar(arquivo: string){
        const txt = readFileSync(arquivo, "utf-8");
        const conteudo = txt.split(" ");

        this.tipo = new TipoTeste(parseInt(conteudo[0]))
        this.resultado = new ResultadoTeste(parseInt(conteudo[2]))
    }

    public detalhe(){
        return `
===> Teste ${this.tipo.tipo}
     Resultado: ${this.resultado.resultado}
        `
    }
}