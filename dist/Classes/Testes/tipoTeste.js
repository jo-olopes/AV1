export default class TipoTeste {
    constructor(tipo) {
        (tipo === 1 ? this.tipo = "Elétrico" :
            (tipo === 2) ? this.tipo = "Hidráulico" : this.tipo = "Aerodinâmico");
        this.num = tipo;
    }
}
//# sourceMappingURL=tipoTeste.js.map