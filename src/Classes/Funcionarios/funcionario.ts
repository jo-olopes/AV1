import { readFileSync, writeFileSync } from "fs";
import NivelPermissao from "./nivelPermissao.js";

export default class Funcionario{
    private static qtdFuncionario: number = 1;
    private readonly id: string;
    nome: string;
    telefone: string;
    endereço: string;
    usuario: string;
    private senha: string;
    private permissao: NivelPermissao;

    constructor(nome: string, telefone: string, endereço: string, usuario: string, senha: string, permissao: NivelPermissao){
        this.id = Funcionario.qtdFuncionario.toString();
        this.nome = nome;
        this.telefone = telefone;
        this.endereço = endereço;
        this.usuario = usuario;
        this.senha = senha;
        this.permissao = permissao;

        Funcionario.qtdFuncionario++;
    }

    public autenticar(usuario: string, senha: string){
        if (this.usuario === usuario && this.senha === senha){
            return true
        }
        return false
    }

    public salvar(arquivo: string){
        const informaçoes = `${this.nome} ${this.telefone} ${this.endereço} ${this.usuario} ${this.senha} ${this.permissao.num}`

        writeFileSync(arquivo, informaçoes, "utf-8");
    }

    public carregar(arquivo: string){
        const txt = readFileSync(arquivo, "utf-8");
        const conteudo = txt.split(" ");

        this.nome = conteudo[0];
        this.telefone = conteudo[1]
        this.endereço = conteudo[2];
        this.usuario = conteudo[3];
        this.senha = conteudo[4];
        this.permissao = new NivelPermissao(parseInt(conteudo[5]))
    }

    public detalhe(){
        return `
==========> Funcionário ${this.nome}
            Telefone: ${this.telefone}
            Endereço: ${this.endereço}
            Usuário: ${this.usuario}
            Permissão: ${this.permissao.tipo}
        `
    }
}