import { readFileSync, writeFileSync } from "fs";
import ResultadoTeste from "./resultadoTeste.js";
import TipoTeste from "./tipoTeste.js";
export default class Teste {
    constructor(tipo, resultado) {
        this.tipo = tipo;
        this.resultado = resultado;
    }
    salvar(arquivo) {
        const informaçoes = `${this.tipo.num} ${this.resultado.num}`;
        writeFileSync(arquivo, informaçoes, "utf-8");
    }
    carregar(arquivo) {
        const txt = readFileSync(arquivo, "utf-8");
        const conteudo = txt.split(" ");
        this.tipo = new TipoTeste(parseInt(conteudo[0]));
        this.resultado = new ResultadoTeste(parseInt(conteudo[2]));
    }
    detalhe() {
        return `
===> Teste ${this.tipo.tipo}
     Resultado: ${this.resultado.resultado}
        `;
    }
}
//# sourceMappingURL=teste.js.map