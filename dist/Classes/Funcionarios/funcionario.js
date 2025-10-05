import { readFileSync, writeFileSync } from "fs";
import NivelPermissao from "./nivelPermissao.js";
class Funcionario {
    constructor(nome, telefone, endereço, usuario, senha, permissao) {
        this.id = Funcionario.qtdFuncionario.toString();
        this.nome = nome;
        this.telefone = telefone;
        this.endereço = endereço;
        this.usuario = usuario;
        this.senha = senha;
        this.permissao = permissao;
        Funcionario.qtdFuncionario++;
    }
    autenticar(usuario, senha) {
        if (this.usuario === usuario && this.senha === senha) {
            return true;
        }
        return false;
    }
    salvar(arquivo) {
        const informaçoes = `${this.nome} ${this.telefone} ${this.endereço} ${this.usuario} ${this.senha} ${this.permissao.num}`;
        writeFileSync(arquivo, informaçoes, "utf-8");
    }
    carregar(arquivo) {
        const txt = readFileSync(arquivo, "utf-8");
        const conteudo = txt.split(" ");
        this.nome = conteudo[0];
        this.telefone = conteudo[1];
        this.endereço = conteudo[2];
        this.usuario = conteudo[3];
        this.senha = conteudo[4];
        this.permissao = new NivelPermissao(parseInt(conteudo[5]));
    }
    detalhe() {
        return `
==========> Funcionário ${this.nome}
            Telefone: ${this.telefone}
            Endereço: ${this.endereço}
            Usuário: ${this.usuario}
            Permissão: ${this.permissao.tipo}
        `;
    }
}
Funcionario.qtdFuncionario = 1;
export default Funcionario;
//# sourceMappingURL=funcionario.js.map