import Funcionario from "../Funcionarios/funcionario.js";
import StatusEtapa from "./statusEtapa.js";
export default class Etapa {
    nome: string;
    prazo: number;
    status: StatusEtapa;
    funcionarios: Set<Funcionario>;
    constructor(nome: string, prazo: number, status: StatusEtapa);
    iniciar(): void;
    finalizar(): void;
    associarFuncionario(f: Funcionario): void;
    listarFuncionarios(): Set<Funcionario>;
    salvar(arquivo: string): void;
    carregar(arquivo: string): void;
    detalhe(): string;
}
