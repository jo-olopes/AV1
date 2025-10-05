export default class StatusPeça {
    constructor(status) {
        (status === 1 ? this.status = "Em Produção" :
            (status === 2) ? this.status = "Em Transporte" : this.status = "Pronta");
        this.num = status;
    }
}
//# sourceMappingURL=statusPe%C3%A7a.js.map