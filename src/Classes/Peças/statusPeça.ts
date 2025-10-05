export default class StatusPeça{
    status: "Em Produção" | "Em Transporte" | "Pronta";
    num: number;

    constructor(status: number){
        (status === 1 ? this.status = "Em Produção" : 
        (status === 2) ? this.status = "Em Transporte" : this.status = "Pronta")
        this.num = status;
    }
}