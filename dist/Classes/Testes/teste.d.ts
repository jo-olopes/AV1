import ResultadoTeste from "./resultadoTeste.js";
import TipoTeste from "./tipoTeste.js";
export default class Teste {
    tipo: TipoTeste;
    resultado: ResultadoTeste;
    constructor(tipo: TipoTeste, resultado: ResultadoTeste);
    salvar(arquivo: string): void;
    carregar(arquivo: string): void;
    detalhe(): string;
}
