import NivelPermissao from "./nivelPermissao.js";
export default class Funcionario {
    private static qtdFuncionario;
    private readonly id;
    nome: string;
    telefone: string;
    endereço: string;
    usuario: string;
    private senha;
    private permissao;
    constructor(nome: string, telefone: string, endereço: string, usuario: string, senha: string, permissao: NivelPermissao);
    autenticar(usuario: string, senha: string): boolean;
    salvar(arquivo: string): void;
    carregar(arquivo: string): void;
    detalhe(): string;
}
