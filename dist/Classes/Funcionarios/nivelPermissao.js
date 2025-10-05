export default class NivelPermissao {
    constructor(tipo) {
        (tipo === 1 ? this.tipo = "Administrador" :
            (tipo === 2) ? this.tipo = "Engenheiro" : this.tipo = "Operador");
        this.num = tipo;
    }
}
//# sourceMappingURL=nivelPermissao.js.map