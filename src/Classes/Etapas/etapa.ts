import { readFileSync, stat, writeFileSync } from "fs";
import Funcionario from "../Funcionarios/funcionario.js";
import StatusEtapa from "./statusEtapa.js";

export default class Etapa{
    nome: string;
    prazo: number;
    status: StatusEtapa;
    funcionarios: Set<Funcionario> = new Set();

    constructor (nome: string, prazo: number, status: StatusEtapa){
        this.nome = nome;
        this.prazo = prazo;
        this.status = status;
    }

    public iniciar(){
        this.status = new StatusEtapa(2);
    }

    public finalizar(){
        this.status = new StatusEtapa(3);
    }

    public associarFuncionario(f: Funcionario){
        this.funcionarios.add(f);
    }

    public listarFuncionarios(){
        return this.funcionarios;
    }

    public salvar(arquivo: string){
        const informaçoes = `${this.nome} ${this.prazo} ${this.status.num}`

        writeFileSync(arquivo, informaçoes, "utf-8");
    }

    public carregar(arquivo: string){
        const txt = readFileSync(arquivo, "utf-8");
        const conteudo = txt.split(" ");

        this.nome = conteudo[0];
        this.prazo = parseInt(conteudo[1]);
        this.status = new StatusEtapa(parseInt(conteudo[3]))
    }

    public detalhe(){
        let funcionariosDetalhe = "";
        this.funcionarios.forEach(element => {
            funcionariosDetalhe += element.detalhe();
        });

        return `
======> Etapa ${this.nome}
        Prazo: ${this.prazo}
        Status: ${this.status.status}
        Funcionários responsáveis:
${funcionariosDetalhe}`
    }
}