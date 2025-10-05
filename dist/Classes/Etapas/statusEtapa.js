export default class StatusEtapa {
    constructor(status) {
        (status === 1 ? this.status = "Pendente" :
            (status === 2) ? this.status = "Em andamento" : this.status = "Concluída");
        this.num = status;
    }
}
//# sourceMappingURL=statusEtapa.js.map