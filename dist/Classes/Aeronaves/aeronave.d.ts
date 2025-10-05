import Etapa from "../Etapas/etapa.js";
import Peça from "../Peças/peça.js";
import TipoAeronave from "./tipoAeronave.js";
import Teste from "../Testes/teste.js";
export default class Aeronave {
    private static qtdAeronave;
    private readonly id;
    modelo: string;
    tipo: TipoAeronave;
    capacidade: number;
    alcance: number;
    etapas: Set<Etapa>;
    peças: Set<Peça>;
    testes: Set<Teste>;
    constructor(modelo: string, tipo: TipoAeronave, capacidade: number, alcance: number);
    adicionarEtapa(etapa: Etapa): void;
    adicionarPeça(peça: Peça): void;
    adicionarTeste(teste: Teste): void;
    salvar(arquivo: string): void;
    carregar(arquivo: string): void;
    detalhes(): string;
}
