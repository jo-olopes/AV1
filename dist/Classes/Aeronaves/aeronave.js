import TipoAeronave from "./tipoAeronave.js";
import { readFileSync, writeFileSync } from "fs";
class Aeronave {
    constructor(modelo, tipo, capacidade, alcance) {
        this.etapas = new Set();
        this.peças = new Set();
        this.testes = new Set();
        this.id = Aeronave.qtdAeronave;
        this.modelo = modelo;
        this.tipo = tipo;
        this.capacidade = capacidade;
        this.alcance = alcance;
        Aeronave.qtdAeronave++;
    }
    adicionarEtapa(etapa) {
        this.etapas.add(etapa);
    }
    adicionarPeça(peça) {
        this.peças.add(peça);
    }
    adicionarTeste(teste) {
        this.testes.add(teste);
    }
    salvar(arquivo) {
        const informaçoes = `${this.modelo} ${this.tipo.num} ${this.capacidade} ${this.alcance}`;
        writeFileSync(arquivo, informaçoes, "utf-8");
    }
    carregar(arquivo) {
        const txt = readFileSync(arquivo, "utf-8");
        const conteudo = txt.split(" ");
        this.modelo = conteudo[0];
        this.tipo = new TipoAeronave(parseInt(conteudo[1]));
        this.capacidade = parseInt(conteudo[2]);
        this.alcance = parseInt(conteudo[3]);
    }
    detalhes() {
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
        `;
    }
}
Aeronave.qtdAeronave = 1;
export default Aeronave;
//# sourceMappingURL=aeronave.js.map