import Etapa from "../Etapas/etapa.js";
import Peça from "../Peças/peça.js";
import TipoAeronave from "./tipoAeronave.js";
import Teste from "../Testes/teste.js"
import { readFileSync, writeFileSync } from "fs";

export default class Aeronave{
    private static qtdAeronave: number = 1;
    private readonly id: number;
    modelo: string;
    tipo: TipoAeronave;
    capacidade: number;
    alcance: number;
    etapas: Set<Etapa> = new Set();
    peças: Set<Peça> = new Set();
    testes: Set<Teste> = new Set();

    constructor(modelo: string, tipo: TipoAeronave, capacidade: number, alcance: number){
        this.id = Aeronave.qtdAeronave;
        this.modelo = modelo;
        this.tipo = tipo;
        this.capacidade = capacidade;
        this.alcance = alcance;

        Aeronave.qtdAeronave++;
    }

    public adicionarEtapa(etapa: Etapa){
        this.etapas.add(etapa);
    }

    public adicionarPeça(peça: Peça){
        this.peças.add(peça);
    }

    public adicionarTeste(teste: Teste){
        this.testes.add(teste);
    }

    public salvar(arquivo: string){
        const informaçoes = `${this.modelo} ${this.tipo.num} ${this.capacidade} ${this.alcance}`

        writeFileSync(arquivo, informaçoes, "utf-8");
    }

    public carregar(arquivo: string){
        const txt = readFileSync(arquivo, "utf-8");
        const conteudo = txt.split(" ");

        this.modelo = conteudo[0];
        this.tipo = new TipoAeronave(parseInt(conteudo[1]));
        this.capacidade = parseInt(conteudo[2]);
        this.alcance = parseInt(conteudo[3]);
    }
    
    public detalhes() {
        let peçasDetalhe = "";
        this.peças.forEach(element => {
            peçasDetalhe += element.detalhe();
        });

        let etapasDetalhe = "";
        this.etapas.forEach(element => {
            etapasDetalhe += element.detalhe();
        });

        let testesDetalhe = "";
        this.testes.forEach(element => {
            testesDetalhe += element.detalhe();
        });

        return `
=============== Aeronave: Código ${this.id} ===============

Modelo: ${this.modelo}
Tipo: ${this.tipo.tipo}
Capacidade de pessoas: ${this.capacidade}
Alcance Máximo: ${this.alcance}km

---------------------- Peças Utilizadas -----------------------
${peçasDetalhe}
---------------------- Etapas de Produção ---------------------
${etapasDetalhe}
---------------------- Testes Realizados ----------------------
${testesDetalhe}
===============================================================
        `
    }
}