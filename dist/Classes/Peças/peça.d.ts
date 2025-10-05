import StatusPeça from "./statusPeça.js";
import TipoPeça from "./tipoPeça.js";
export default class Peça {
    nome: string;
    tipo: TipoPeça;
    fornecedor: string;
    status: StatusPeça;
    constructor(nome: string, tipo: TipoPeça, fornecedor: string, status: StatusPeça);
    AtualizarStatus(status: StatusPeça): void;
    salvar(arquivo: string): void;
    carregar(arquivo: string): void;
    detalhe(): string;
}
