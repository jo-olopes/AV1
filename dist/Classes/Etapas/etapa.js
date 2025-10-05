import { readFileSync, writeFileSync } from "fs";
import StatusEtapa from "./statusEtapa.js";
export default class Etapa {
    constructor(nome, prazo, status) {
        this.funcionarios = new Set();
        this.nome = nome;
        this.prazo = prazo;
        this.status = status;
    }
    iniciar() {
        this.status = new StatusEtapa(2);
    }
    finalizar() {
        this.status = new StatusEtapa(3);
    }
    associarFuncionario(f) {
        this.funcionarios.add(f);
    }
    listarFuncionarios() {
        return this.funcionarios;
    }
    salvar(arquivo) {
        const informaçoes = `${this.nome} ${this.prazo} ${this.status.num}`;
        writeFileSync(arquivo, informaçoes, "utf-8");
    }
    carregar(arquivo) {
        const txt = readFileSync(arquivo, "utf-8");
        const conteudo = txt.split(" ");
        this.nome = conteudo[0];
        this.prazo = parseInt(conteudo[1]);
        this.status = new StatusEtapa(parseInt(conteudo[3]));
    }
    detalhe() {
        let funcionariosDetalhe = "";
        this.funcionarios.forEach(element => {
            funcionariosDetalhe += element.detalhe();
        });
        return `
======> Etapa ${this.nome}
        Prazo: ${this.prazo}
        Status: ${this.status.status}
        Funcionários responsáveis:
${funcionariosDetalhe}`;
    }
}
//# sourceMappingURL=etapa.js.map